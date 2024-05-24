import React, { useState } from "react"
import CampaignIcon from "@mui/icons-material/Campaign"
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  CardContent,
  CardActions,
  TablePagination,
  TableContainer,
  Paper,
  Grid,
  Typography,
  Card,
  Box,
  TextField,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import Sound from "react-sound"
import AudioFile from "../../sound/untitled_YppUX89.mp3"
import useQueuehooks from "./hooks"
import io from 'socket.io-client';
import GROBAL from "../../GLOBAL";
import EditDialog from "./component/edit.dialog";
// const socket = io.connect(`${GROBAL.BASE_SERVER.IO}`);
function createData(name, code, population, size) {
  const density = population / size
  return { name, code, population, size, density }
}

const borderAdjust = (index) => {
  if (index == 0) {
    return "10px 0 0 10px"
  } else if (index > 0 && index < 3) {
    return "0 0 0 0 "
  } else {
    return "0 10px 10px 0 "
  }
}
const cellStyle = () => ({
  color: "#1AA4E7",
  fontWeight: "bold",
  fontSize: 20,
})
const cell = () => ({
  color: "black",
  fontSize: 20,
})
function View() {
  const {
    page,
    rowsPerPage,
    age,
    handleChangePage,
    handleChangeRowsPerPage,
    handleChange,
    playAudio,
    data,
    setvalue,
    examRoom,
    confirmCreate,
    quest,
    ftExamRoomType,
    addQueue,
    queue,
    maxQueue,
    clear_data,
    handleEditClick,
    selectedById,
    isShowEdit,
    setSelectedById,
    setIsShowEdit
  } = useQueuehooks()
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5" gutterBottom>
              ลำดับการตรวจ
            </Typography>
            <Card>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{  maxHeight: "500px", overflowY: "auto"}}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={cellStyle()}>ชื่อลำดับการตรวจ</TableCell>
                        <TableCell style={cellStyle()}>คิวที่</TableCell>
                        <TableCell style={cellStyle()}>สถานะ</TableCell>
                        <TableCell style={cellStyle()}>เรียกคิว</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {quest.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.quest_table_uuid}>
                          <TableCell style={cell()}>{row.service_recipet}</TableCell>
                          <TableCell style={cell()}>{row.exam_room_name}</TableCell>
                          <TableCell style={cell()}>{row.status == 1? 'เรียกพบ': row.status == 2?'เรียกพบแล้ว' : 'รอ'}</TableCell>
                          <TableCell>
                            {
                              row.status == 2 ? (  
                              <IconButton
                                onClick={() =>
                                  handleEditClick(row.quest_table_uuid)
                                }
                              >
                                <EditIcon style={{ color: "orange" }} />
                              </IconButton>) : ""
                            }
                            <IconButton color="primary" onClick={() => addQueue(row.quest_table_uuid)}>
                              <CampaignIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={quest.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Card>
          </Grid>
        </Grid>
      </div>


      <EditDialog
        onshow={isShowEdit}
        id={selectedById}
        onClose={() => {
          setIsShowEdit(false);
          // fetchData();
        }}
      />
    </>
  )
}
export default View
