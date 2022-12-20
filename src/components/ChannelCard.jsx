import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

export default function ChannelCard({ channelDetail }) {
  return (
    <Box>
      <Box
        sx={{
          boxShadow: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '0px',
          width: '100%',
          borderRadius: '10px',
          margin: 'auto',
          background: '#11111110',
          position: 'relative',
          paddingTop: '56.25%'
        }}
      >
        <div className='channel-card-body'>
          <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <div className='channel-card'>
              <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{ borderRadius: '50%', height: '150px', width: '150px' }}
              />
            </div>
          </Link>
        </div>
      </Box>
      <Typography sx={{ fontSize: '16px', fontWeight: 400, color: 'black', marginTop: '10px' }}>
        {channelDetail?.snippet?.title}
      </Typography>
    </Box>
  )
}
