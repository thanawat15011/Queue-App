import { BaseFetch } from "../main-model";
export default class NumQuestModel extends BaseFetch {

    getNumQuestBy = (data) =>
    this.authFetch({
      url: "num-quest/getNumQuestBy",
      method: "POST",
      body: JSON.stringify(data),
    });
    insertNumQuest = (data) =>
    this.authFetch({
      url: "num-quest/insertNumQuest",
      method: "POST",
      body: JSON.stringify(data),
    });


}
