// import React from "react";
// import {
//   Grid,
//   Button,
//   Paper,
//   TextField,
//   Select,
//   MenuItem,
//   InputLabel,
//   Divider,
// } from "@mui/material";
// import useCreateLocationHooks from "./hooks/create";

// const Create = (props) => {
//   const { province, distrinct, subdistrinct, data, setvalue, confirmcreate } =
//     useCreateLocationHooks();
//     console.log('distrinct', distrinct)
//     console.log('subdistrinct', subdistrinct)
  
  
//     return (
//     <Paper style={{ padding: 10 }}>
//       <h3>เพิ่มข้อมูล</h3>
//       <Divider />
//       <Grid container spacing={2} p={2}>
//         <Grid item sm={3}>
//           <TextField name="address_info" label="ชื่อไซต์" fullWidth />
//         </Grid>
//         <Grid item sm={3}>
//           <TextField name="site_code" label="รหัสไซต์" fullWidth />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} p={2}>
//         <Grid item sm={3}>
//           <TextField name="address_info" label="ชื่อไซต์" fullWidth />
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} p={2}>
//         <Grid item sm={2}>
//           <InputLabel id="jangwad">จังหวัด</InputLabel>
//           <Select
//             labelId="jangwad"
//             name="province_id"
//             fullWidth
//             value={data.province_id}
//             onChange={setvalue}
//           >
//             {province.map((val, key) => {
//               return (
//                 <MenuItem key={val.value} value={val.value}>
//                   {val.label}
//                 </MenuItem>
//               );
//             })}
//           </Select>
//         </Grid>
//         <Grid item sm={2}>
//           <InputLabel id="amphor">อำเภอ</InputLabel>
//           <Select
//             labelId="amphor"
//             name="district_id"
//             fullWidth
//             value={data.district_id}
//             onChange={setvalue}
//           >
//             {distrinct
//               .filter((dist) => {
//                 return dist.province_id == data.province_id;
//               })
//               .map((val, key) => {
//                 return (
//                   <MenuItem key={val.value} value={val.value}>
//                     {val.label}
//                   </MenuItem>
//                 );
//               })}
//           </Select>
//         </Grid>
//         <Grid item sm={2}>
//           <InputLabel id="tambol">ตำบล</InputLabel>
//           <Select 
//           labelId="tambol"
//           name="subdistrict_id"
//            fullWidth 
//            value={data.subdistrict_id}
//             onChange={setvalue}
//             >
//             {subdistrinct
//               .filter((sub) => {
//                 return sub.district_id == data.district_id;
//               }) 
//               .map((val, key) => {
//                 return (
//                   <MenuItem key={val.value} value={val.value}>
//                     {val.label}
//                   </MenuItem>
//                 );
//               })}
//           </Select>
//         </Grid>
//       </Grid>
//       <Divider />
//       <div style={{ display: "flex", justifyContent: "end", marginTop: 5 }}>
//         <Button
//           variant="outlined"
//           color="error"
//           onClick={() => {
//             props.history.goBack();
//           }}
//         >
//           ยกเลิก
//         </Button>
//         &nbsp;
//         <Button variant="outlined" color="info" onClick={confirmcreate}>
//           เพิ่มข้อมูล
//         </Button>
//         <Checkbox {...label} defaultChecked />
//       <Checkbox {...label} />
//       <Checkbox {...label} disabled />
//       <Checkbox {...label} disabled checked />
//       </div>
//     </Paper>
//   );
// };

// export default Create;
