import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Sidebar, Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [selectedCategory])

  return (
    <>
      <Stack className="feed" >
        <Box className="sidebar">
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Box>
        <Stack className="videos" sx={{ flexDirection: { sx: "column", md: "column" } }}>
          <Videos videos={videos} />
        </Stack>
      </Stack>
    </>
  )
}