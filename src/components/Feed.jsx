import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  
  return (
    <Stack direction={'row'}>
      <Box className="sidebar" width={240}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
      <Stack sx={{ flexDirection: { sx: "column", md: "column" } }}>
        <Videos />
      </Stack>
    </Stack>
  )
}