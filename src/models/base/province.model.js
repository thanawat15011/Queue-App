import { BaseFetch } from "../main-model";
export default class ProvinceModel extends BaseFetch {

    getProvinceDropDown = (data) =>
    this.authFetch({
      url: "api/provinceTable/getProvinceDropDown",
      method: "POST",
      body: JSON.stringify(data),
    });

    getProvince = () => {
      return this.directFetch({
        url: "api/provinceTable/province",
        method: "GET"
      })
    }

}
