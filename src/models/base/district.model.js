import { BaseFetch } from "../main-model";
export default class DistrictModel extends BaseFetch {

    getDistrictDropDown = (data) =>
    this.authFetch({
      url: "api/districtTable/getDistrictDropDown",
      method: "POST",
      body: JSON.stringify(data),
    });
    getDistrictDropdownByProvince = (data) =>
    this.authFetch({
      url: "api/destrictTable/getDistrictDropdownByProvince",
      method: "POST",
      body: JSON.stringify(data),
    });

    getDistrict = () => {
      return this.authFetch({
        url: "api/districtTable/distirict",
        method: "GET"
      })
    }
    getDistrictkoratDropdown = () => {
      return this.directFetch({
        url: "api/districtTable/getDistrictkoratDropdown",
        method: "POST"
      });
    }

}
