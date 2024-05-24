//import axios from "axios"
const GROBAL = {

  BASE_SERVER: {
    // URL: 'http://183.88.214.11:5005/',
    URL: 'http://127.0.0.1:6201/',

    IO : 'http://127.0.0.1:6201', // แค่ไม่มี /  

  },

  // -----------------------------------------------------------------------------------


  ACCESS_TOKEN: {
    'x-access-token': localStorage.getItem("x-access-token"),
  },
  PERMISSION: {
    'permission': localStorage.getItem("permission"),
    'temp_permission': localStorage.getItem("temp_permission")
  }
}

export default GROBAL