import { useState, useEffect } from "react";
import { UserModel, RoleModel } from "../../../models";
import Swal from "sweetalert2";


const usermodel = new UserModel();
const rolemodel = new RoleModel();


const useUserHooks = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState([])
  const [anchorEl, setAnchorEl] = useState(null);
  const [uuid, setUuid] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event,uuid) => {
    setAnchorEl(event.currentTarget);
    setUuid(uuid);
  };
  const getMenuId = (id) => {
    setUuid(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const fetchdata = async () => {
      const result = await usermodel.getUserTableList();
      result.reverse();
      const role_data = await rolemodel.getRoleTableList();
      role_data.reverse();
      setUser(result);
      setRole(role_data);
      setLoading(false);
    };
    fetchdata();
  }, []);

  const confirmdelete = (id) => {
    Swal.fire({
      title: "คุณต้องการลบข้อมูลหรือไม่",
      text: "",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await usermodel.deleteUserTable({ primaryKey: id });
        if (result) {
          Swal.fire({
            title: "สำเร็จ",
            icon: "success",
            timer: 10000,
          }).then((v) => {
            window.location.reload();
          });
        }
      }
    });
  };

  const ftRole = (rowData) => {
    let roleName = "";
    role.forEach((e) => {
      if (rowData.role_table_uuid == e.id) {
        roleName = e.name;
      }
    })
  }

  return {
    user,
    loading,
    confirmdelete,
    useEffect,
    role,
    ftRole,
    anchorEl,
    open,
    handleClick,
    handleClose,
    getMenuId,
    uuid
  };
};

export default useUserHooks;
