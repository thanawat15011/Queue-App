import React, { useRef, useEffect } from "react"
import { Card, CardContent } from "@mui/material"
import abj from "../../assets/image/abg.png"
export default function StickyHeadTable() {
  const videoRef = useRef()

  // useEffect(() => {
  //   const video = videoRef.current
  //   video.loop = true
  // }, [])
  return (
    <Card >
    <CardContent>
      <div style={{ position: "relative", paddingBottom: "100%", height: 0, overflow: "hidden" }}>
        <img src={abj} alt="Your Image" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
      </div>
    </CardContent>
    </Card>
  )
}
