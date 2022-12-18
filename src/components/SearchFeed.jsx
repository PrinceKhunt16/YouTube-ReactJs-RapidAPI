import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Videos, Loader } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  if(videos === null) return <Loader />

  return (
    <>
      <Stack className="feed">
        <Stack className="search-videos" sx={{ flexDirection: { sx: "column", md: "column" } }}>
          <Videos videos={videos} />
        </Stack>
      </Stack>
    </>
  )
}