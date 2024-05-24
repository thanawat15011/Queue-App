import { useState, useEffect } from "react";
import { Devicemodel, DeviceHistoryModel } from "../../../models";

const device = new Devicemodel();
const history = new DeviceHistoryModel();

const useShowHistoryHooks = (id) => {
  const [attributes, setAttributes] = useState({
    device_name: "",
    device_id: "",
    device_ip: "",
    device_rssi: "",
    device_mac: "",
  });

  const [voltage, setVoltage] = useState({
    labels: Array(10).fill(""),
    datasets: [
      {
        label: "batterry voltage",
        data: Array(10).fill(""),
        fill: false,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.1,
      },
    ],
  });

  const setvoltage_data = (date, val) => {
    setVoltage((prev) => {
      return {
        ...prev,
        labels: [...prev.labels.slice(1), date],
        datasets: [
          {
            ...prev.datasets[0],
            data: [...prev.datasets[0].data.slice(1), val],
          },
        ],
      };
    });
  };

  useEffect(() => {
    const fetchdevice = async () => {
      const data = await device.getOne({ id: id });
      setAttributes(data);
    };
    fetchdevice();

    const fetchdata = async () => {
      const result = await history.getSomeone({ id: id, datalenght: 10 });
      result.reverse();
      result.map((val) => {
        setvoltage_data(
          new Date(val.createdAt).toLocaleTimeString(),
          val.batt_voltage
        );
      });
    };

    const fetchupdate_temp = async () => {
      // const res = await fetch(`${url}/device/${id}`);
      // const result = await res.json();
      const result = await device.getOne({ id: id });
      setvoltage_data(new Date().toLocaleTimeString(), result.batt_voltage);
    };

    fetchdata();
    const updateintervel = setInterval(() => {
      fetchupdate_temp();
    }, 60000);
    return () => clearInterval(updateintervel);
  }, []);

  const device_status = (date) => {
    const current_date = new Date(),
      crr_month = "" + (current_date.getMonth() + 1),
      crr_day = "" + current_date.getDate(),
      crr_year = current_date.getFullYear(),
      crr_hour = current_date.getHours(),
      crr_min = current_date.getMinutes();

    const rec_date = new Date(date),
      rec_month = "" + (rec_date.getMonth() + 1),
      rec_day = "" + rec_date.getDate(),
      rec_year = rec_date.getFullYear(),
      rec_hour = rec_date.getHours(),
      rec_min = rec_date.getMinutes();

    if (crr_day == rec_day && crr_month == rec_month && crr_year == rec_year) {
      if (crr_hour - rec_hour >= 1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  return { attributes, voltage, device_status };
};

export default useShowHistoryHooks;
