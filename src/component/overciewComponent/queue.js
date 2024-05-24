import React, {useEffect} from "react"
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material"
import useQuestTranshooks from "../../views/overview/hooks"
import io from 'socket.io-client';
import GROBAL from "../../GLOBAL";
import axios from "axios";

const columns = [
  { id: "name", label: "ชื่อผู้รับบริการ", minWidth: 170 },
  { id: "queue", label: "คิวที่", minWidth: 170 },
  { id: "code", label: "ห้องตรวจ", minWidth: 100 },
]

export default function Queue() {
  const [age, setAge] = React.useState("")

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(8)
  const [translatedTexts, setTranslatedTexts] = React.useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  const borderAdjust = (index) => {
    if (index == 0) {
      return "10px 0 0 10px"
    } else {
      return "0 10px 10px 0 "
    }
  }
  const cellStyle = (column,index) => ({
    minWidth: column,
    color: "white",
    backgroundColor: "#112639",
    fontWeight: column>0?"bold":'',
    fontSize: 34,
    borderRadius: borderAdjust(index),
    border: "1px solid white",
    textAlign: "center",
  })
  const { questtrans,audioSrc,setAudioSrc } = useQuestTranshooks()
  useEffect(() => {
    const socket = io.connect(`${GROBAL.BASE_SERVER.IO}`);
    return () => {
      socket.disconnect();
    };
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const translatedData = await Promise.all(
          questtrans.map(row => translateText(row.service_recipet))
        );
        setTranslatedTexts(translatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [questtrans]);

  const translateText = async (text) => {
    try {
      const cleanedTextThaiServiceRecipet = text.replace(/Mr\.|Ms\.|Mrs\.|Miss\.|Miss\s|Dr\./g, '').trim();
      const cancelToken = axios.CancelToken.source();
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyAI_hlgHF0IJhVekYbu97vHaYFJcNxv6kE",
        {
          q: cleanedTextThaiServiceRecipet,
          target: "th"
        },
        { cancelToken: cancelToken.token }
      );
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Error translating text:', error);
      return '';
    }
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <TableContainer sx={{ maxHeight: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={column.id} align={column.align} style={cellStyle(column.minWidth,index)}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
      {questtrans.map((row, index) => (
        <TableRow key={row.quest_table_uuid}>
          <TableCell style={cellStyle(0, 0)}>{translatedTexts[index]}</TableCell>
          <TableCell style={cellStyle(0, 0)}>{row.quest}</TableCell>
          <TableCell style={cellStyle(0, 1)}>{row.exam_room_name}</TableCell>
        </TableRow>
      ))}
    </TableBody>
            {audioSrc && (
              <audio  src={audioSrc} autoPlay onEnded={() => setAudioSrc(null)} />
            )}
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}
