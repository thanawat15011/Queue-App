import { BaseFetch } from "../main-model";
export default class SubDistrictModel extends BaseFetch {
  getSubDistrictDropDown = (data) =>
    this.authFetch({
      url: "api/subDistrictTable/getSubDistrictDropDown",
      method: "POST",
      body: JSON.stringify(data),
    });

  getSubDistrictDropdownByDistrict = (data) =>
    this.authFetch({
      url: "api/subDistrictTable/getSubDistrictDropdownByDistrict",
      method: "POST",
      body: JSON.stringify(data),
    });

  getDropdownZipCode = (data) =>
    this.authFetch({
      url: "api/subDistrictTable/getDropdownZipCode",
      method: "POST",
      body: JSON.stringify(data),
    });

}
