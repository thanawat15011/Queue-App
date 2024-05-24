import React, { useState } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import useQueuehooks from "./hooks";
import ExamRoomDialog from "./component/exam_room.dialog";
import DeleteRoomDialog from "./component/delete_room.dialog";
import EditDialog from "./component/edit_room.dialog"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const rows = ["", "", "", "", ""];
function View() {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    isshow,
    setIsShow,
    company_table_uuid,
    setCompanyId,
    room,
    fetchData,
    setIsShowEdit,
    isshowedit,
    selectedRoomId,
    handleEditClick,
    handleDeleteClick,
    handleCancelDelete,
    handleConfirmDelete,
    isDeleteConfirmationOpen,
  } = useQueuehooks();
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5" gutterBottom>
              ข้อมูลห้อง
            </Typography>
            <Card>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <div className="flex flex-row-reverse flex-wrap p-3">
                  <Button
                    className=""
                    variant="outlined"
                    onClick={() => setIsShow(true)}
                  >
                    เพิ่มข้อมูล
                  </Button>
                </div>
                <TableContainer sx={{ maxHeight: "500px", overflowY: "auto" }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ minWidth: 10 }}>ลำดับ</TableCell>
                        <TableCell sx={{ minWidth: 40 }}>ห้อง</TableCell>
                        <TableCell sx={{ minWidth: 40 }}>จัดการ</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {room
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.exam_room_table_uuid}
                          >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.exam_room_name}</TableCell>
                            <TableCell>
                              <IconButton
                                onClick={() =>
                                  handleEditClick(row.exam_room_table_uuid)
                                }
                              >
                                <EditIcon style={{ color: "orange" }} />
                              </IconButton>
                              <IconButton
                                onClick={() =>
                                  handleDeleteClick(row.exam_room_table_uuid)
                                }
                              >
                                <DeleteIcon style={{ color: "red" }} />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25,100]}
                  component="div"
                  count={room.length}
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
      <ExamRoomDialog
        onshow={isshow}
        id={selectedRoomId}
        onClose={() => {
          setIsShow(false);
          fetchData();
        }}
      />



      <EditDialog
        onshow={isshowedit}
        id={selectedRoomId}
        onClose={() => {
          setIsShowEdit(false);
          fetchData();
        }}
      />

      {isDeleteConfirmationOpen && (
        <Dialog open={isDeleteConfirmationOpen} onClose={handleCancelDelete}>
          <DialogTitle>ยืนยันการลบ</DialogTitle>
          <DialogContent>ต้องการลบข้อมูลห้องใช่หรือไม่?</DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete}>ยกเลิก</Button>
            <Button
              onClick={handleConfirmDelete}
              variant="contained"
              color="error"
            >
              ลบ
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
export default View;
