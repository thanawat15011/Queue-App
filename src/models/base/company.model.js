import { BaseFetch } from "../main-model"
export default class CompanyModel extends BaseFetch {
  getCompanyBy = (data) =>
    this.authFetch({
      url: "company/getCompanyBy",
      method: "POST",
      body: JSON.stringify(data),
    })

  getCompanyById = (data) =>
    this.authFetch({
      url: "company/getCompanyById",
      method: "POST",
      body: JSON.stringify(data),
    })

  insertCompany = (data) =>
    this.authFetch({
      url: "company/insertCompany",
      method: "POST",
      body: JSON.stringify(data),
    })
  updateCompany = (data) =>
    this.authFetch({
      url: "company/updateCompany",
      method: "POST",
      body: JSON.stringify(data),
    })
}
