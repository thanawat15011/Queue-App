import { useState, useEffect } from "react";
import { TestModel, Devicemodel } from "../../../models";
const device = new Devicemodel();

const useHistoryhooks = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var data = await device.getAll();
        setHistory(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
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

  return {
    history,
    loading,
    device_status,
  };
};

export default useHistoryhooks;
