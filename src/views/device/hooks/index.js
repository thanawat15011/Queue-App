import { useState, useEffect } from "react";
import { Devicemodel } from "../../../models";
import Swal from "sweetalert2";

const devicemodel = new Devicemodel();

const useDeviceHooks = () => {
  const [device, setDevice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await devicemodel.getAll();
      result.reverse();
      setDevice(result);
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
        const result = await devicemodel.fakedelete({ id: id });
        if (result.device_type == 0) {
          Swal.fire({
            title: "สำเร็จ",
            icon: "success",
            timer: 2000,
          });
        }
      }
    });
  };

  return {
    device,
    loading,
    confirmdelete,
  };
};

export default useDeviceHooks;
