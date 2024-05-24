import { BaseFetch } from "../main-model";
export default class ExamRoomModel extends BaseFetch {

    getExamRoomBy = (data) =>
    this.authFetch({
      url: "exam-room/getExamRoomBy",
      method: "POST",
      body: JSON.stringify(data),
    });
    getExamRoomById = (data) =>
    this.authFetch({
      url: "exam-room/getExamRoomById",
      method: "POST",
      body: JSON.stringify(data),
    });

    insertExamRoom = (data) => {
      return this.authFetch({
        url: "exam-room/insertExamRoom",
        method: "POST",
        body: JSON.stringify(data),

      })
    }
    updateExamRoomById = (data) => {
      return this.authFetch({
        url: "exam-room/updateExamRoomById",
        method: "POST",
        body: JSON.stringify(data),
      });
    }
    deleteExamRoomById = (data) => {
        return this.authFetch({
          url: "exam-room/deleteExamRoomById",
          method: "POST",
          body: JSON.stringify(data),
        });
      }

}
