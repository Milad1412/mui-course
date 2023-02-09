import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <h1 className="text-3xl pb-5">The menu</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Drawer>
    </div>
  );
};

export default MuiDrawer;
