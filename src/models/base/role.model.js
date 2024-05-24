import { BaseFetch } from "../main-model";
export default class RoleModel extends BaseFetch {

    getRoleTableList = (data) =>
    this.authFetch({
      url: "api/roleTable/getRoleTableList",
      method: "POST",
      body: JSON.stringify(data),
    });

    getRoleTableById = (data) =>
    this.authFetch({
      url: "api/roleTable/getRoleTableById",
      method: "POST",
      body: JSON.stringify(data),
    });

    createRoleTable = (data) =>
    this.authFetch({
      url: "api/roleTable/createRoleTable",
      method: "POST",
      body: JSON.stringify(data),
    });

    editRoleTable = (data) =>
    this.authFetch({
      url: "api/roleTable/editRoleTable",
      method: "POST",
      body: JSON.stringify(data),
    });

    deleteRoleTable = (data) =>
    this.authFetch({
      url: "api/roleTable/deleteRoleTable",
      method: "POST",
      body: JSON.stringify(data),
    });

    getRoleDropdown = (data) =>
    this.authFetch({
      url: "api/roleTable/getRoleDropdown",
      method: "POST",
      body: JSON.stringify(data),
    });



}
