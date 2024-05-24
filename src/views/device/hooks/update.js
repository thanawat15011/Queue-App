import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Devicemodel } from "../../../models";

const devicemodel = new Devicemodel();

const useDeviceupdateHooks = (id) => {
  const [device, setDevice] = useState({
    device_name: "",
    device_id: "",
    device_ip: "",
    device_rssi: "",
    device_mac: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await devicemodel.getOne({ id: id });
      setDevice(result);
      setLoading(false);
    };
    fetchdata();
  }, []);

  const confirmupdate = () => {
    Swal.fire({
      title: "คุณต้องการบันทึกข้อมูลหรือไม่",
      text: "",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then((result) => {
      if (result.isConfirmed) {
        devicemodel.Devupdate({ id: id, data: { device_name: device.device_name } })
          .then((response) => {
            if (response.id) {
              Swal.fire({
                title: "สำเร็จ",
                icon: "success",
                timer: 2000,
              });
            }
          });
      }
    });
  };

  const setdata = (e) => {
    const { name, value } = e.target;

    setDevice((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return {
    device,
    loading,
    confirmupdate,
    setdata,
  };
};

export default useDeviceupdateHooks;
