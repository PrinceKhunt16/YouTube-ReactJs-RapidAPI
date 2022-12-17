import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

export default function ChannelCard({ channelDetail, marginTop }) {
  console.log(channelDetail)
  return (
    <Box>
      <Box
        sx={{
          boxShadow: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          borderRadius: '10px',
          margin: 'auto',
          marginTop,
          background: '#11111110'
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <div className='channel-card'>
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{ borderRadius: '50%', height: '150px', width: '150px' }}
            />
          </div>
        </Link>
      </Box>
      <Typography sx={{ fontSize: '16px', fontWeight: 400, color: 'black', marginTop: '10px' }}>
        {channelDetail?.snippet?.title}
      </Typography>
    </Box>
  )
}
