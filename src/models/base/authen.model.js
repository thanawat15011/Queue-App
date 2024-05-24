import { BaseFetch } from "../main-model"
export default class AuthenModel extends BaseFetch {
    checkUserAccount = (data) =>
    this.authFetch({
      url: "api/auth/",
      method: "POST",
      body: JSON.stringify(data),
    })

    login = (data) =>
    this.authFetch({
      url: "api/auth/login",
      method: "POST",
      body: JSON.stringify(data),
    })

    refreshToken = (data) =>
    this.authFetch({
      url: "api/auth/getRefreshToken",
      method: "POST",
      body: JSON.stringify(data),
    })

    register = (data) =>
    this.authFetch({
      url: "api/auth/register",
      method: "POST",
      body: JSON.stringify(data),
    })
    
  
}
