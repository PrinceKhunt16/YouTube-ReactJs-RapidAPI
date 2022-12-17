import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper } from '@mui/material';
import Search from '../utils/search.png'

export default function SearchFeed() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      className="search-form"
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        boxShadow: 'inset 0 1px 2px #eee',
        pl: 2,
        height: 40,
        display: 'flex'
      }}
    >
      <input
        className='search-bar'
        placeholder='Search'
        // value=''
        onChange={() => {}}
      />
      <div className='search-image' type='submit' aria-label='Search'>
        <img src={Search} height="18px" alt="" />
      </div>
    </Paper>
  )
}