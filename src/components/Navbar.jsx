import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../utils/youtube.svg"
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack className="navbar" direction="row" alignItems="center" sx={{ position: "sticky", background: '#fff', top: 0, justifyContent: "space-between", gap: '20px' }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" width={90} />
      </Link>
      <SearchBar />
      <Link className="user" to="/">
        <img src={'https://yt3.ggpht.com/np3PW_DV0Foms36_86pEIJfTfyuBzKQarY7rZJCyAafbuH-KliboGL54ljl8cPVFvJlMc5_k_fU=s88-c-k-c0x00ffffff-no-rj-mo'} alt="logo" width={40} height={40} style={{ borderRadius: '50%', marginLeft: 'auto' }} />
      </Link>
    </Stack>
  )
}