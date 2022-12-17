import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <Card sx={{ width: { xs: '100%' }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <div className='thumnail'> 
          <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" />
        </div>
      </Link>
      <CardContent sx={{ height: '45px', padding: '0px', paddingTop: '10px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography fontSize={16} lineHeight={1.4} fontWeight={400} color="#0f0f0f">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography fontSize={14} fontWeight={400} color="#606060">
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
