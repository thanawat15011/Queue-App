import { useState, useEffect } from "react";
import ProvinceModel from "../../../models/base/province.model";
import SubDistrictModel from "../../../models/base/subDistrict.model";
import DistrictModel from "../../../models/base/district.model";
import UserModel from "../../../models/base/user.model";
import Swal from "sweetalert2";

const provinces = new ProvinceModel();
const dist = new DistrictModel();
const subdist = new SubDistrictModel();
const user = new UserModel();

const useCreateUserHooks = () => {
  const [province, setProvince] = useState([]);
    const [distrinct, setDistrinct] = useState([]);
    const [subdistrinct, setSubdistrinct] = useState([]);

  const [data, setData] = useState({
    username: "",
    password: "",
    role_table_uuid: ""
  });
  const [loading, setLoading] = useState(true);

  const setvalue = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    provinces.getProvince().then((response) => {
      setProvince(response);
    });
    dist.getDistrict().then((response) => {
        setDistrinct(response);
    })
    subdist.getSubDistrictDropDown().then((response) => {
        setSubdistrinct(response);
        setLoading(false)
    })
  }, []);

  const confirmcreate = () => {
    if ( !data.username || !data.role_table_uuid || !data.password)  {
      Swal.fire({
        title: "เกิดข้อผิดพลาด!",
        text: "กรุณากรอกข้อมูล",
        icon: "warning",
      });
      return
    }
      
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลหรือไม่",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('data', data)
        user.createUserTable({  username: data.username, role_table_uuid: data.role_table_uuid, password: data.password  })
          .then((response) => {
            if (response) {
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

  return {
    data,
    province,
    distrinct,
    subdistrinct,
    loading,
    setvalue,
    confirmcreate
  };
};

export default useCreateUserHooks;
