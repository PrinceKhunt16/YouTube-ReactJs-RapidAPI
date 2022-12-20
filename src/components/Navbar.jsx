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
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0e9IUDTB5m1cAxkvDphiaANlfQuVOvi_Vw&usqp=CAU'} alt="logo" width={40} height={40} style={{ borderRadius: '50%', marginLeft: 'auto', objectFit: 'cover' }} />
      </Link>
    </Stack>
  )
}