import React, { useState, useEffect } from "react";
import {
  ExamRoomModel,
  QuestModel,
  QuestTransModel,
  NumQuestModel,
} from "../../../models";
import AudioFile from "../../../sound/untitled_YppUX89.mp3";
import Swal from "sweetalert2";
import io from "socket.io-client";
import GROBAL from "../../../GLOBAL";
// const socket = io.connect(`${GROBAL.BASE_SERVER.IO}`);

const exam_room_model = new ExamRoomModel();
const quest_model = new QuestModel();
const quest_trans_model = new QuestTransModel();
const num_quest_model = new NumQuestModel();

const useQueuehooks = () => {
  const user_local = localStorage.getItem("session-user");
  const { company_table_uuid } = JSON.parse(user_local);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [age, setAge] = React.useState("");
  const [maxQueue, setMaxQueue] = useState(0);
  const [examRoom, setExamRoom] = useState([]);
  const [quest, setQuest] = useState([]);
  const [questlast, setQuestLast] = useState([]);
  const [data, setData] = useState({
    name_service: "",
    room: "",
    queue: 1,
  });
  const [queue, setQueue] = useState(1);
  const [selectedById, setSelectedById] = useState(null);
  const [isShowEdit, setIsShowEdit] = useState(false)

  const setvalue = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    const socket = io.connect(`${GROBAL.BASE_SERVER.IO}`);
    exam_room_model.getExamRoomBy().then((response) => {
      setExamRoom(response.data);
    });
    quest_model.getQuestBy().then((response) => {
      setQuest(response.data);
    });
    quest_model.getQuestBy().then((response) => {
      setQuestLast(response.data[0]);
    });
    num_quest_model.getNumQuestBy({company_table_uuid:company_table_uuid}).then((response) => {
      const num = response.data.length > 0 ? response.data[0].num_quest + 1 : 1;
      setMaxQueue(num);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      queue: quest.length + 1,
    }));
  }, [quest]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [audio] = useState(new Audio(AudioFile));

  const playAudio = () => {
    audio.play();
  };

  const handleEditClick = (id) => {
    setSelectedById(id); 
    setIsShowEdit(true); 
  };

  const addQueue = (quest_table_uuid) => {
    quest_trans_model
      .insertQuestTransAndDelete({
        quest_table_uuid: quest_table_uuid,
        company_table_uuid: localStorage.getItem("company_table_uuid"),
      })
      .then(() => {
        // Fetch updated data and set the state
        quest_model.getQuestBy().then((response) => {
          setQuest(response.data);
        });
      });
    //  audio.play();
  };

  const checkSubmit = () => {
    if (data.name_service == "" || data.name_service == undefined) {
      Swal.fire({
        title: "กรุณาระบุชื่อผู้รับบริการ !",
        icon: "warning",
      });
      return false;
    }
    if (data.room == "" || data.room == undefined) {
      Swal.fire({
        title: "กรุณาเลือกห้องตรวจ !",
        icon: "warning",
      });
      return false;
    } else {
      return true;
    }
  };

  const confirmCreate = async () => {
    if (checkSubmit()) {
      quest_model.insertQuest({
          service_recipet: data.name_service,
          exam_room_table_uuid: data.room,
          quest: maxQueue,
          // company_table_uuid: company_table_uuid,
        })
        num_quest_model.insertNumQuest({num_quest: maxQueue})
        .then((response) => {
          if (response) {
            Swal.fire({
              title: "สำเร็จ",
              icon: "success",
              timer: 2000,
            }).then(() => {
              window.location.reload();
              setData({
                name_service: "",
                room: "",
              });
            });
          }
          setQueue((prevQueue) => prevQueue + 1);
        })
        .catch((error) => {
          console.error("Error:", error);
      });
    }
  };

  const clear_data = async () => {
    Swal.fire({
      title: "คุณต้องการล้างข้อมูลหรือไม่",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        quest_trans_model.deleteAllData({company_table_uuid : company_table_uuid}).then((response) => {
          if (response) {
            Swal.fire({
              title: "ล้างข้อมูลสำเร็จ",
              icon: "success",
              timer: 2000,
            }).then((v) => {
              window.location.reload();
              setData({
                name_service: "",
                room: "",
              });
            });
          }
        });
      }
    });
  };

  return {
    page,
    rowsPerPage,
    age,
    handleChangePage,
    handleChangeRowsPerPage,
    handleChange,
    playAudio,
    data,
    setvalue,
    examRoom,
    confirmCreate,
    quest,
    addQueue,
    maxQueue,
    clear_data,
    handleEditClick,
    selectedById,
    isShowEdit,
    setSelectedById,
    setIsShowEdit
  };
};

export default useQueuehooks;
