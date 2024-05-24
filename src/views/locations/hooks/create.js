import { useState, useEffect } from "react";
import ProvinceModel from "../../../models/base/province.model";
import SubDistrictModel from "../../../models/base/subDistrict.model";
import DistrictModel from "../../../models/base/district.model";
import Swal from "sweetalert2";
import { UserModel } from "../../../models";

const provinces = new ProvinceModel();
const dist = new DistrictModel();
const subdist = new SubDistrictModel();
const user = new UserModel();

const useCreateLocationHooks = () => {
  const [province, setProvince] = useState([]);
    const [distrinct, setDistrinct] = useState([]);
    const [subdistrinct, setSubdistrinct] = useState([]);

  const [data, setData] = useState({
    province_id: "",
    district_id: "",
    subdistrict_id: ""
  });
  const [loading, setLoading] = useState(true);

  const setvalue = (e) => {
    console.log('e.target', e.target.value)
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    provinces.getProvinceDropDown().then((response) => {
      setProvince(response);
    });
    dist.getDistrictDropDown().then((response) => {
        setDistrinct(response);
    })
    subdist.getSubDistrictDropDown().then((response) => {
        setSubdistrinct(response);
        setLoading(false)
    })
  }, []);
  
  const confirmcreate = () => {
    if ( !data.address_info || !data.province_table_uuid || !data.district_table_uuid || !data.sub_district_table_id || !data.district_table_id)  {
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

export default useCreateLocationHooks;
