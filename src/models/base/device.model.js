import { BaseFetch } from "../main-model";
export default class Devicemodel extends BaseFetch {
  getAll = async (data) => {
    return await this.directFetch({
      url: `api/deviceTable/device`,
      method: "GET",
    });
  };

  getOne = async (data) => {
    return await this.directFetch({
      url: `api/deviceTable/device/${data.id}`,
      method: "GET",
    });
  };

  Devupdate = async (data) => {
    return await this.directFetch({
      url: `api/deviceTable/device/${data.id}`,
      method: "PUT",
      body: JSON.stringify(data.data),
    });
  };

  fakedelete = async (data) => {
    return await this.directFetch({
      url: `api/deviceTable/device/${data.id}`,
      method: "DELETE",
    });
  };
  
  getViewbydistrick = async (data) => {
    return  await this.directFetch({
      url: "api/deviceTable/getViewbydistrick",
      method: "GET"
    });
  }
}
