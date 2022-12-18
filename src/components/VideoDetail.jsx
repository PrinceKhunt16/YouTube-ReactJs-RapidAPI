import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { Videos, Loader } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { getSubs } from "../utils/utils"

export default function VideoDetails() {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle, description }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <>
      {videoDetail && videos &&
        <Box className="video-page">
          <div className="video-reletedvideos">
            <Box flex={1} className="div-one">
              <Box sx={{ width: '100%' }}>
                <ReactPlayer className="react-player" url={`https://www/youtube.com/watch?v=${id}`} controls />
                <h2 className="video-title">{title}</h2>
                <Stack direction="row" justifyContent="space-between" sx={{ color: "#000" }} py={1} >
                  <Link to={`/channel/${channelId}`}>
                    <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#000" >
                      {channelTitle}
                    </Typography>
                  </Link>
                  <Stack direction="row" gap="20px" alignItems="center">
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {getSubs(viewCount)} views
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {getSubs(likeCount)} likes
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {description}
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Box className="div-two">
              <Videos videos={videos} />
            </Box>
          </div>
        </Box>
      }
    </>
  )
}
