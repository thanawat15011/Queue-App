import { BaseFetch } from "../main-model"
export default class AddressModel extends BaseFetch {
    getAddressTableList = (data) =>
    this.authFetch({
      url: "api/addressTable/getAddressTableList",
      method: "POST",
      body: JSON.stringify(data),
    })

    getAddressTableById = (data) =>
    this.authFetch({
      url: "api/addressTable/getAddressTableById",
      method: "POST",
      body: JSON.stringify(data),
    })

    deleteAddressTable = (data) => 
     this.authFetch({
      url: "api/addressTable/deleteAddressTable",
      method: "POST",
      body: JSON.stringify(data),
    })

    editAddressTable = (data) => 
    this.authFetch({
     url: "api/addressTable/editAddressTable",
     method: "POST",
     body: JSON.stringify(data),
   })

    
}
