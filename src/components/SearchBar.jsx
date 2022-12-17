import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper } from '@mui/material';
import Search from '../utils/search.png'

export default function SearchFeed() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      className="search-form"
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        height: 40,
        display: 'flex',
        boxShadow: 'none'
      }}
    >
      <input
        className='search-bar'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='search-image' type='submit' aria-label='Search'>
        <img src={Search} height="18px" alt="" />
      </button>
    </Paper>
  )
}