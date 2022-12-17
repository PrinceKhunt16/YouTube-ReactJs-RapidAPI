import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      className="sidebar-stack"
      direction="coloum"
      sx={{
        overflowY: "auto",
      }}
      gap="10px"
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#000",
            color: category.name === selectedCategory && "#fff",
          }}
          key={category.name}
        >
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.9" }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}
