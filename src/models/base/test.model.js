import { BaseFetch } from "../main-model"
export default class Testmodel extends BaseFetch {
    getHistory = async (data) => {
        return await this.authFetch({ 
            url: `api/deviceHistoryTable/${data.id}/${data.datalenght}`, 
            method: 'GET'
        });
    }
}