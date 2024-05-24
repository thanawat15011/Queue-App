import { useState, useEffect } from "react";
import DistrictModel from "../../../models/base/district.model";
import UserModel from "../../../models/base/user.model";
import Swal from "sweetalert2";
import Devicemodel from "../../../models/base/device.model";

const dist = new DistrictModel();
const user = new UserModel();
const device_model = new Devicemodel();

const useLocationHooks = () => {
    const [distrinct, setDistrinct] = useState([]);
    const [device, setDevice] = useState([]);
    const [devicefilter, setDeviceFilter] = useState([]);

    const [data, setData] = useState({ district_id: "", });
    const [loading, setLoading] = useState(true);
    const [center, setCenter] = useState({
        lat: 14.973874,
        lng: 102.083665,
    });
    useEffect(() => {
        dist.getDistrictkoratDropdown().then((response) => {
            setDistrinct(response);
        })
        device_model.getViewbydistrick().then((response) => {
            setDevice(response);
            setDeviceFilter(response)
        })
    }, []);

    const setvalue = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
        if (value) {
            const filteredData = devicefilter.filter((site) => site.district_table_uuid === value);
            setDevice(filteredData);
            if (filteredData.length > 0) {
                setCenter({
                    lat: JSON.parse(filteredData[0].latitude),
                    lng: JSON.parse(filteredData[0].longitude),
                })
            } else {
                setCenter({
                    lat: 14.973874,
                    lng: 102.083665,
                })
            }
        }
    };



    const confirmcreate = () => {
        // if (!data.username || !data.role_table_uuid || !data.password) {
        //     Swal.fire({
        //         title: "เกิดข้อผิดพลาด!",
        //         text: "กรุณากรอกข้อมูล",
        //         icon: "warning",
        //     });
        //     return
        // }

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
                user.createUserTable({ username: data.username, role_table_uuid: data.role_table_uuid, password: data.password })
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

    // const confirmcreate = (data) => {

    // };


    return {
        data,
        distrinct,
        loading,
        setvalue,
        confirmcreate,
        device,
        center
    };
};

export default useLocationHooks;
