import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <FormControl>
        <FormLabel>Radio buttons</FormLabel>
        <RadioGroup value={value} onChange={handleChange}>
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="2-4" value="2-4" />
          <FormControlLabel control={<Radio />} label="4-6" value="4-6" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MuiRadioButton;
