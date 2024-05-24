import { BaseFetch } from "../main-model";
export default class DeviceHistoryModel extends BaseFetch {
  getAll = async (data) => {
    return await this.directFetch({
      url: `api/deviceTable/device`,
      method: "GET",
    });
  };

  getSomeone = async (data) => {
    return await this.directFetch({
      url: `api/deviceHistoryTable/${data.id}/${data.datalenght}`,
      method: "GET",
    });
  };
}
