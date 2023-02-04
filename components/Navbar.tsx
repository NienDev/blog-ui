import { Facebook, Twitter, YouTube } from "@mui/icons-material";
import { AppBar, IconButton, Typography, Toolbar } from "@mui/material";
import Search from "./Search";

function Navbar() {
  return (
    <AppBar sx={{ position: "sticky", top: 0, padding: "0 4em" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 !important",
        }}
      >
        <Search />
        <Typography
          variant="h6"
          fontWeight="semibold"
          textTransform="uppercase"
          color="inherit"
        >
          Design
        </Typography>
        <ul>
          <li>
            <IconButton>
              <Twitter sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <YouTube sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <Facebook sx={{ color: "#fff" }} />
            </IconButton>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
