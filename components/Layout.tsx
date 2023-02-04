import { CssBaseline } from "@mui/material";
import Navbar from "./Navbar";

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
