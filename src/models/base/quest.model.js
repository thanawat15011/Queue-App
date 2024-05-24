import { BaseFetch } from "../main-model";
export default class QuestTransModel extends BaseFetch {

    getQuestBy = (data) =>
    this.authFetch({
      url: "quest/getQuestBy",
      method: "POST",
      body: JSON.stringify(data),
    });
    getQuestById = (data) =>
    this.authFetch({
      url: "quest/getQuestById",
      method: "POST",
      body: JSON.stringify(data),
    });

    insertQuest = (data) => {
      return this.authFetch({
        url: "quest/insertQuest",
        method: "POST",
        body: JSON.stringify(data),
      })
    }
    updateQuestById = (data) => {
      return this.directFetch({
        url: "quest/updateQuestById",
        method: "POST",
        body: JSON.stringify(data),
      });
    }
    deleteQuestById = (data) => {
        return this.directFetch({
          url: "quest/deleteQuestById",
          method: "POST",
          body: JSON.stringify(data),
        });
      }
      updateServiceRecipetTHById = (data) => {
        return this.directFetch({
          url: "quest/updateServiceRecipetTHById",
          method: "POST",
          body: JSON.stringify(data),
        });
      }
}
