import { Box } from "@mui/material";
import { useEffect } from "react";
import { VideoCard, ChannelCard, Loader } from "./"

export default function Videos({ videos }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [videos])

  if(!videos?.length) return <Loader />;

  return (
    <div className="videos-list">
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </div>
  )
}
