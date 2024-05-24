import React, { useState, useEffect } from "react";
import { Button, Dropdown, Dialog, Toast, InputText } from "primereact";
import { ExamRoomModel, QuestModel } from "../../../models";
import { Row, Col, Loading } from "../../../component/customComponent";
import { Select, MenuItem } from "@mui/material"
const exam_room_model = new ExamRoomModel();
const quest_model = new QuestModel();
const EditDialog = ({ onshow, onClose, id }) => {
  const company_table_uuid = localStorage.getItem("company_table_uuid");
  const [state, setState] = useState({
    header: "แก้ไขข้อมูล",
    quest_table_uuid: "",
    exam_room_table_uuid: "",
    service_recipet: "",
    quest: null,
    loading: true,
    check_ins: 0,
  });
  const [examRoom, setExamRoom] = useState([]);
  const [questAll, setQuestAll] = useState([]);
  const [dataLast, setDataLast] = useState([])
  useEffect(() => {
    if (onshow) {
      fetchData();
    }
  }, [onshow, id]);

  const fetchData = async () => {
    console.log('id', id)
    const quest_data = await quest_model.getQuestById({ quest_table_uuid: id });
    console.log('quest_data', quest_data)
    const exam_room = await exam_room_model.getExamRoomBy()
    setExamRoom(exam_room.data);

    const quest_all = await quest_model.getQuestBy()
    const filterData = quest_all.data.filter((row) => {
      return row.quest_table_uuid != id
    })
    setQuestAll(filterData)
    setDataLast(quest_data.data[0])

    const { quest_table_uuid, service_recipet, exam_room_table_uuid, quest } = quest_data.data[0] || {};
      console.log('quest', quest)
    setState((prevState) => ({
      ...prevState,
      header: "แก้ไขข้อมูล",
      quest_table_uuid,
      exam_room_table_uuid,
      service_recipet,
      quest,
      //   check_ins: quest.data.length > 0 ? 1 : 0,
      loading: false,
    }));
  };
  const checkSubmit = () => {
    if (state.service_recipet === "" || state.exam_room_table_uuid === undefined || state.quest === undefined) {
      showToast(
        "warn",
        "โปรดกรอกข้อมูลให้ครบถ้วน",
        "กรุณากรอกข้อมูลสถานให้บริการ"
      );
      return false;
    } else {
      return true;
    }
  };

  const checkQueue = () => {
    let matchFound = true; 
    for (let i = 0; i < questAll.length; i++) {
      const row = questAll[i];
      if (row.quest == state.quest) {
        showToast(
          "warn",
          "คิวนี้มีอยู่แล้ว",
          "กรุณากรอกข้อมูลสถานให้บริการ"
        );
        matchFound = false; 
        break; 
      }
    }
  
    return matchFound; 
  };
  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 });
  };

  const handleClose = () => 
  onClose(setState({
    quest:dataLast.quest ? dataLast.quest : null,
    exam_room_table_uuid:dataLast.exam_room_table_uuid ? dataLast.exam_room_table_uuid : null,
    quest_table_uuid: dataLast.quest_table_uuid ? dataLast.quest_table_uuid : null
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const value_to_use = {
      quest_table_uuid: state.quest_table_uuid,
      service_recipet: state.service_recipet,
      exam_room_table_uuid: state.exam_room_table_uuid,
      quest: state.quest
    };

    if (checkSubmit()&&checkQueue()) {
      const res = await quest_model.updateQuestById(value_to_use);

      if (res.require) {
        showToast("success", "บันทึกข้อมูลสำเร็จ", "บันทึกข้อมูลสำเร็จ");
        handleClose();
        window.location.reload();
        setState((prevState) => ({
          ...prevState,
          quest_table_uuid: "",
          exam_room_table_uuid: "",
        }));
      } else {
        showToast("warn", "เกิดข้อผิดพลาด", "กรุณาตรวจสอบก่อนบันทึกข้อมูล");
      }
    }
  };

  const toast = React.createRef();

  return (
    <>
      <Toast ref={toast} />
      <Dialog
        className="z-auto"
        header={state.header}
        visible={onshow}
        style={{ width: "85vh", height: "58vh" }}
        onHide={handleClose}
        draggable={false}
        footer={() => (
          <>
            <Button
              severity="primary"
              className={"m-1"}
              label="บันทึก"
              onClick={(e) => handleSubmit(e)}
            />
            <Button
              severity="secondary"
              className={"m-1"}
              label="ยกเลิก"
              onClick={handleClose}
            />
          </>
        )}
      >
        <Row>
          <Col md={12}>
            <label htmlFor="service_recipet">ชื่อผู้รับบริการ</label>
            <br />
            <InputText
              className="p-inputtext-sm w-full"
              value={state?.service_recipet || ""}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  service_recipet: e.target.value,
                }))
              }
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <label htmlFor="exam_room_name">ห้องตรวจ</label>
            <br />
            <Select
              className="p-inputtext-sm w-full"
              size="small"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  exam_room_table_uuid: e.target.value,
                }))
              }
              name="room"
              value={state?.exam_room_table_uuid || ""}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {examRoom.map((val, key) => {
                return (
                  <MenuItem
                    key={val.exam_room_table_uuid}
                    value={val.exam_room_table_uuid}
                  >
                    {val.exam_room_name}
                  </MenuItem>
                );
              })}
            </Select>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <label htmlFor="quest">ลำดับคิวที่</label>
            <br />
            <InputText
              className="p-inputtext-sm w-full"
              value={state?.quest || ""}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  quest: e.target.value,
                }))
              }
              type="number"
            />
          </Col>
        </Row>

        {/* <hr className="opacity-50" /> */}
      </Dialog>
    </>
  );
};
export default EditDialog;
