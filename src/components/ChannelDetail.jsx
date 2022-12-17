import { Box } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelDetailCard from "./ChannelDetailCard";
import Videos from "./Videos";

export default function ChannelDetail() {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  return (
    <Box className="channel-video-list">
      <Box>
        <ChannelDetailCard channelDetail={channelDetail} />
      </Box>
      <Videos videos={videos} />
    </Box>
  )
}