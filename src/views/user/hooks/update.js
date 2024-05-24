import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { UserModel } from "../../../models";

const usermodel = new UserModel();

const useUserupdateHooks = (id) => {
  console.log('first', id)
  const [user, setUser] = useState({
    username: "",
    password: "",
    role_table_uuid: "",
  });

  const [data, setData] = useState({
    username: "",
    password: "",
    role_table_uuid: ""
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await usermodel.getUserTableById({ primaryKey: id });
      console.log('result', result)
      setUser(result);
      setLoading(false);
    };
    fetchdata();
  }, []);
  const confirmupdate = () => {
    console.log('dddd')
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลหรือไม่",
      text: "",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then((result) => {
      if (result.isConfirmed) {
        usermodel.editUserTable({user_table_uuid: id, username: user.username, password: user.password ,role_table_uuid :user.role_table_uuid})
          .then((response) => {
            if (response.user_table_uuid) {
              Swal.fire({
                title: "สำเร็จ",
                icon: "success",
                timer: 2000,
              }).then((v) => {
                window.location.href = '/user';
              });
            }
          });
      }
    });
  };

  const setvalue = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return {
    user,
    loading,
    confirmupdate,
    setvalue,
  };
};

export default useUserupdateHooks;
