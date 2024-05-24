import React, { useState, useEffect } from "react"
import { CompanyModel } from "../../../models"
const company_model = new CompanyModel()
const useQueuehooks = () => {
  const [page, setPage] = useState(0)
  const [company, setCompany] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [isshow, setIsShow] = useState(false)

  const [company_table_uuid, setCompanyId] = useState("")
 
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let companyData = await company_model.getCompanyBy()
    setCompany(companyData.data)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    isshow,
    setIsShow,
    company_table_uuid,
    setCompanyId,
    company,
    fetchData,
  }
}

export default useQueuehooks
