import { BaseFetch } from "../main-model"
export default class userModel extends BaseFetch {
  checkLogin = (data) =>
    this.authFetch({
      url: "user/checkLogin",
      method: "POST",
      body: JSON.stringify(data),
    })

    getUserBy = (data) =>
    this.authFetch({
      url: "user/getuserBy",
      method: "POST",
      body: JSON.stringify(data),
    })
}
