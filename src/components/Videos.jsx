import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./"

export default function Videos({ videos }) {
  return (
    <div className="videos-list">
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </div>
  )
}
