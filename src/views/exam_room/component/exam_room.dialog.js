import React, { useState, useEffect } from "react"
import { Button, Dropdown, Dialog, Toast, InputText } from "primereact"
import { ExamRoomModel } from "../../../models"
import { Row, Col, Loading } from "../../../component/customComponent"

const exam_room_model = new ExamRoomModel()
const CompanyDialog = ({ onshow, onClose, id }) => {
  const company_table_uuid = localStorage.getItem('company_table_uuid')
  const [state, setState] = useState({
    header: "เพิ่มห้องตรวจ",
    exam_room_table_uuid: "",
    exam_room_name: "",
    loading: true,
    check_ins: 0,
  })
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const room = await exam_room_model.getExamRoomById({exam_room_table_uuid:id})
    const { exam_room_table_uuid, exam_room_name } = room.data[0] || {}
    setState((prevState) => ({
      ...prevState,
      header:"เพิ่มห้อง",
      exam_room_name,
      exam_room_table_uuid,
      check_ins: room.data.length > 0 ? 1 : 0,
      loading: false,
    }))
  }

  const checkSubmit = () => {
    if (state.exam_room_name === "" || state.exam_room_name === undefined) {
      showToast("warn", "โปรดกรอกข้อมูลให้ครบถ้วน", "กรุณากรอกข้อมูลสถานให้บริการ")
      return false
    } else {
      return true
    }
  }

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 })
  }

  const handleClose = () => onClose()

  const handleSubmit = async (e) => {
    e.preventDefault()

      const value_to_use = {
        company_table_uuid: company_table_uuid,
        exam_room_name: state.exam_room_name,
      }
    
   
    if (checkSubmit()) {
      const res =  await exam_room_model.insertExamRoom(value_to_use) 

      if (res.require) {
        showToast("success", "บันทึกข้อมูลสำเร็จ", "บันทึกข้อมูลสำเร็จ")
        handleClose()
        setState((prevState) => ({
          ...prevState,
          exam_room_name:"",
          exam_room_table_uuid:""
        }))
 
      } else {
        showToast("warn", "เกิดข้อผิดพลาด", "กรุณาตรวจสอบก่อนบันทึกข้อมูล")
      }
    }
  }

  const toast = React.createRef()

  return (
    <>
      <Toast ref={toast} />
      <Dialog
        className="z-auto"
        header={state.header}
        visible={onshow}
        style={{ width: "85vh", height: "48vh" }}
        onHide={handleClose}
        draggable={false}
        footer={() => (
          <>
            <Button severity="primary" className={"m-1"} label="บันทึก" onClick={(e) => handleSubmit(e)} />
            <Button severity="secondary" className={"m-1"} label="ยกเลิก" onClick={handleClose} />
          </>
        )}
      >
        <Row>
          <Col md={12}>
            <label htmlFor="exam_room_name">ชื่อห้อง</label>
            <br />
            <InputText
              className="p-inputtext-sm w-full"
              value={state.exam_room_name || ""}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  exam_room_name: e.target.value,
                }))
              }
              placeholder="ชื่อห้อง.."
            />
          </Col>
        </Row>
        <hr className="opacity-50" />
      </Dialog>
    </>
  )
}
export default CompanyDialog
