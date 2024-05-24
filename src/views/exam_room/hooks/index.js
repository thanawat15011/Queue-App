import React, { useState, useEffect } from "react"
import { ExamRoomModel } from "../../../models"
import {  Toast } from "primereact"
const exam_room_model = new ExamRoomModel()
const useQueuehooks = () => {
  const toast = React.createRef()
  const [page, setPage] = useState(0)
  const [room, setRoom] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [isshow, setIsShow] = useState(false)
  const [isshowedit, setIsShowEdit] = useState(false)

  const [company_table_uuid, setCompanyId] = useState("")
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let roomData = await exam_room_model.getExamRoomBy()
    setRoom(roomData.data)
  }

  const handleEditClick = (roomId) => {
    setSelectedRoomId(roomId); 
    setIsShowEdit(true); 
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 })
  }

  const handleDeleteClick = (roomId) => {
    setSelectedRoomId(roomId);
    setIsDeleteConfirmationOpen(true);
  };

  
  const handleConfirmDelete = async() => {
    const res = await exam_room_model.deleteExamRoomById({exam_room_table_uuid:selectedRoomId}) 
      if (res) {
        // showToast("success", "ลบข้อมูลสำเร็จ", "ลบข้อมูลสำเร็จ")
        setIsDeleteConfirmationOpen(false);
      } else {
        // showToast("warn", "เกิดข้อผิดพลาด", "กรุณาตรวจสอบก่อนบันทึกข้อมูล")
        setIsDeleteConfirmationOpen(false);
      }
    fetchData(); 
  };

  const handleCancelDelete = () => {
    setIsDeleteConfirmationOpen(false);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    isshow,
    setIsShow,
    company_table_uuid,
    setCompanyId,
    room,
    fetchData,
    setIsShowEdit,
    isshowedit,
    selectedRoomId,
    handleEditClick,
    handleCancelDelete,
    handleConfirmDelete,
    isDeleteConfirmationOpen,
    handleDeleteClick
  }
}

export default useQueuehooks
