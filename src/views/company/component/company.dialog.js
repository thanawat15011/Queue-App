import React, { useState, useEffect } from "react"
import { Button, Dropdown, Dialog, Toast, InputText } from "primereact"
import { CompanyModel } from "../../../models"
import { Row, Col, Loading } from "../../../component/customComponent"

const company_model = new CompanyModel()
const CompanyDialog = ({ onshow, onClose, id }) => {
  const [state, setState] = useState({
    header: "เพิ่มอุปกรณ์",
    company_table_uuid: "",
    company_name: "",
    loading: true,
    check_ins: 0,
  })
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const company = await company_model.getCompanyById({ company_table_uuid: id })
    const { company_table_uuid, company_name } = company.data[0] || {}
    setState((prevState) => ({
      ...prevState,
      header: company.data.length > 0 ? "แก้ไขข้อมูล" : "เพิ่มอุปกรณ์",
      company_name,
      company_table_uuid,
      check_ins: company.data.length > 0 ? 1 : 0,
      loading: false,
    }))
  }

  const checkSubmit = () => {
    if (state.company_name === "" || state.company_name === undefined) {
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
      company_table_uuid: state.company_table_uuid,
      company_name: state.company_name,
    }

    if (checkSubmit()) {
      const res = state.check_ins === 0 ? await company_model.insertCompany(value_to_use) : await company_model.updateCompany(value_to_use)

      if (res.require) {
        showToast("success", "บันทึกข้อมูลสำเร็จ", "บันทึกข้อมูลสำเร็จ")
        handleClose()
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
            <label htmlFor="company_name">ชื่อสถานที่ให้บริการ</label>
            <br />
            <InputText
              className="p-inputtext-sm w-full"
              value={state.company_name || ""}
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  company_name: e.target.value,
                }))
              }
              placeholder="ชื่อสถานที่ให้บริการ.."
            />
          </Col>
        </Row>
        <hr className="opacity-50" />
      </Dialog>
    </>
  )
}
export default CompanyDialog
