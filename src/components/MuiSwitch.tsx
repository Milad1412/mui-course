import { Switch, FormControlLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";

const MuiSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsOn(e.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={isOn} onChange={handleChange} />}
        label="show more"
      />
    </div>
  );
};

export default MuiSwitch;
