import { BaseFetch } from "../main-model";
export default class QuestTransModel extends BaseFetch {

    getQuestTransBy = (data) =>
    this.authFetch({
      url: "quest-trans/getQuestTransBy",
      method: "POST",
      body: JSON.stringify(data),
    });
    getQuestTransById = (data) =>
    this.authFetch({
      url: "quest-trans/getQuestTransById",
      method: "POST",
      body: JSON.stringify(data),
    });

    insertQuestTrans = (data) => {
      return this.authFetch({
        url: "quest-trans/insertQuestTrans",
        method: "POST",
        body: JSON.stringify(data),
      })
    }
    updateQuestTransById = (data) => {
      return this.directFetch({
        url: "quest-trans/updateQuestTransById",
        method: "POST",
        body: JSON.stringify(data),
      });
    }
    deleteQuestTransById = (data) => {
        return this.directFetch({
          url: "quest-trans/deleteQuestTransById",
          method: "POST",
          body: JSON.stringify(data),
        });
      }

      insertQuestTransAndDelete = (data) => {
        return this.directFetch({
          url: "quest-trans/insertQuestTransAndDelete",
          method: "POST",
          body: JSON.stringify(data),
        });
      }

      getQuestTransRealTime = (data) => {
        return this.directFetch({
          url: "quest-trans/getQuestTrans-real-time",
          method: "POST",
          body: JSON.stringify(data),
        });
      }

      deleteAllData = (data) => {
        return this.directFetch({
          url: "quest-trans/deleteAllData",
          method: "POST",
          body: JSON.stringify(data),
        });
      }

      synthesize= (data) => {
        return this.directFetch({
          url: "quest-trans/synthesize",
          method: "POST",
          body: JSON.stringify(data),
        });
      }

}
