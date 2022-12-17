import { Box, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import { VideoCard, ChannelCard } from "./"

export default function Videos({ videos }) {
  const videosList = useRef()
  
  useEffect(() => {
    videosList.current.scrollIntoView()
  }, [])

  return (
    <div className="videos-list" ref={videosList}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </div>
  )
}
