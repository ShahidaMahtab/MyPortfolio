import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EngineeringIcon from "@mui/icons-material/Engineering";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
const drawerWidth = 240;
const navigation = [
  { name: "Home", to: "/", icons: <HomeRoundedIcon /> },
  { name: "About", to: "/about", icons: <PersonRoundedIcon /> },
  { name: "Projects", to: "/projects", icons: <FolderRoundedIcon /> },
  { name: "Blog", to: "/blog", icons: <LibraryBooksIcon /> },
  { name: "Contact", to: "/contact", icons: <EmailRoundedIcon /> },
];
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const DrawerComponent = (
    <div style={{ background: "#202020", minHeight: "100vh" }}>
      <Toolbar />

      <Box className="flex place-content-end mr-5">
        <IconButton
          color="secondary"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none", mb: 3 } }}
        >
          <CancelPresentationRoundedIcon />
        </IconButton>
      </Box>
      <Button fontWeight="bold" sx={{ color: "white", display: "block" }}>
        Shahida Binta Mahtab
      </Button>
      <List sx={{ background: "#202020" }}>
        <ListItem>
          <ListItemText>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block text-white font-bold  hover:text-purple-800"
              >
                <Button color="inherit">
                  <span className="mr-4"> {item.icons}</span>
                  {item.name}
                </Button>
              </Link>
            ))}
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "#202020" }}>
      <AppBar
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            background: "#202020",
          },
          ml: { sm: `${drawerWidth}px`, boxShadow: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          background: "#202020",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {DrawerComponent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {DrawerComponent}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
