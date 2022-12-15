import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../utils/youtube.svg"

export default function Navbar() {
  return (
    <div>
      <Stack direction="row" alignItems="center" p={2} px={4} sx={{ position:  "sticky", background: '#fff', top: 0, justifyContent: "space-between" }}>
        <Stack direction="row" gap={3}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="logo" width={90} />
          </Link>
        </Stack>
      </Stack>
    </div>
  )
}