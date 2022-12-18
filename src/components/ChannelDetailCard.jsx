import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demoProfilePicture } from '../utils/constants'
import { getSubs } from '../utils/utils'

export default function ChannelDetailCard({ channelDetail }) {  
  return (
    <Box>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#000', p: 0, paddingTop: '20px' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '150px', width: '150px', border: '1px solid #e3e3e3', margin: 'auto' }}
        />
        <Typography fontSize="30px" fontFamily="Roboto" color="#0f0f0f" fontWeight="400" sx={{ marginTop: '10px' }}>
          {channelDetail?.snippet?.title}{' '}
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '14px', fontWeight: 400, color: '#606060' }}>
            {getSubs(channelDetail?.statistics?.subscriberCount)} Subscribers
          </Typography>
        )}
      </CardContent>
    </Box>
  )
}
