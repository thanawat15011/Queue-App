import React, { useState } from "react"
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
import useQueuehooks from "./hooks"
import CompanyDialog from "./component/company.dialog"
const rows = ["", "", "", "", ""]
function View() {
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage, isshow, setIsShow, company_table_uuid, setCompanyId, company, fetchData } =
    useQueuehooks()
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5" gutterBottom>
              ตารางสถานที่
            </Typography>
            <Card>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <div className="flex flex-row-reverse flex-wrap p-3">
                  <Button className="" variant="outlined" onClick={() => setIsShow(true)}>
                    เพิ่มข้อมูล
                  </Button>
                </div>
                <TableContainer sx={{ maxHeight: "500px", overflowY: "auto" }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ minWidth: 10 }}>ลำดับ</TableCell>
                        <TableCell sx={{ minWidth: 40 }}>สถานที่</TableCell>
                        <TableCell sx={{ minWidth: 40 }}>จัดการ</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {company.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.company_table_uuid}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{row.company_name}</TableCell>
                          <TableCell>{row.quest}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
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
      <CompanyDialog
        onshow={isshow}
        id={company_table_uuid}
        onClose={() => {
          setIsShow(false)
          fetchData()
        }}
      />
    </>
  )
}
export default View
