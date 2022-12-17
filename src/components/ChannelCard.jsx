import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

export default function ChannelCard({ channelDetail, marginTop }) {
  console.log(channelDetail)
  return (
    <Box
      sx={{
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: 'auto',
        marginTop,
        background: '#11111110'
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '150px', width: '150px', mb: 1 }}
          />
          <Typography sx={{ fontSize: '18px', fontWeight: 400, color: 'black' }}>
            {channelDetail?.snippet?.title}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}
