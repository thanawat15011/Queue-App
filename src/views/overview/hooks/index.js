import React, { useState,useRef, useEffect } from "react";
import { QuestTransModel,QuestModel } from "../../../models";
import AudioFile from "../../../sound/untitled_YppUX89.mp3";
import Swal from "sweetalert2";
import io from 'socket.io-client';
import GROBAL from "../../../GLOBAL";
import axios from "axios";
import { ClassSharp } from "@mui/icons-material";
const socket = io.connect(`${GROBAL.BASE_SERVER.IO}`);
const quest_trans_model = new QuestTransModel();
const quest_model = new QuestModel();
const synth = window.speechSynthesis;
const useQuestTranshooks = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [questtrans, setQuestTrans] = useState([]);
  const [audioSrc, setAudioSrc] = useState(null);
  const [fetchCount, setFetchCount] = useState(0);
    const [hasFetchedData, setHasFetchedData] = useState(false);
  const [hasReadThaiTextBeenCalled, setHasReadThaiTextBeenCalled] = useState(false);
  const [subscribed, setSubscribed] = useState(0);
  const handleAddedAndDeletedQueueRef = useRef();
  const fecthdata = () => {
    quest_trans_model.getQuestTransRealTime().then((response) => {
      setQuestTrans(response.data);
    });
  }
  
  useEffect(() => {
    fecthdata();
    const handleAddedAndDeletedQueue = (data) => {
      const storedCompanyId = localStorage.getItem("company_table_uuid");
      if (data.data.company_table_uuid == storedCompanyId) {
        readThaiText(data);
        fecthdata();
      }
    };
    socket.on('addedAndDeletedQueue', handleAddedAndDeletedQueue);
    return () => {
      socket.off('addedAndDeletedQueue', handleAddedAndDeletedQueue);
    };
  }, []);

  useEffect(() => {
    const socket = io.connect(`${GROBAL.BASE_SERVER.IO}`);
    return () => {
      socket.disconnect();
    };
  }, []); 

  const readThaiText = async (textData) => {
    // const synth = window.speechSynthesis; 
    const cleanedTextThaiServiceRecipet = textData.data.service_recipet.replace(/Mr\.|Ms\.|Mrs\.|Miss\.|Miss\s|Dr\./g, '').trim();
    const cancelToken = axios.CancelToken.source();
    const  {data}  = await axios.post(
      "https://translation.googleapis.com/language/translate/v2?key=AIzaSyAI_hlgHF0IJhVekYbu97vHaYFJcNxv6kE",
      {
        q: cleanedTextThaiServiceRecipet,
        target: "th"
      },
      { cancelToken: cancelToken.token }
    );
    const textThaiServiceRecipet = data.data.translations[0].translatedText
    const textToRead = `ขอเชิญคุณ ${textThaiServiceRecipet}, คิวที่ ${textData.data.quest}, ห้อง: ${textData.data.exam_room_name}`;
    const response = await quest_trans_model.synthesize({text:textToRead})
    const audio = `data:audio/mp3;base64,${response.audioContent}`
    setAudioSrc(audio)
    // Speech.speak({ text: textToRead });
    // const utterance = new SpeechSynthesisUtterance(textToRead);
    // utterance.lang = 'th-TH';
    // utterance.rate = 0.5;
    // synth.speak(utterance);
    setSubscribed((prevSubscribed) => prevSubscribed + 1);
  }

  const [audio] = useState(new Audio(AudioFile));

  const playAudio = () => {
    audio.play();
  };

  return {
    page,
    rowsPerPage,
    questtrans,
    audioSrc,
    setAudioSrc
  };
};

export default useQuestTranshooks;
