import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const MuiCheckbox = () => {
  const [isTnCAccepted, setIsTnCAccepted] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTnCAccepted(e.target.checked);
  };
  const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    const index = values.findIndex((value) => value === e.target.value);
    if (index === -1) {
      setValues([...values, e.target.value]);
    } else {
      const clonedValues = [...values];
      const filteredValues = clonedValues.filter(
        (value) => value !== e.target.value
      );
      setValues(filteredValues);
    }
  };
  return (
    <div>
      <FormControl>
        <FormLabel>MUI check box</FormLabel>
        {/* <FormControlLabel
          control={<Checkbox checked={isTnCAccepted} onChange={handleChange} />}
          label='I accept terms and conditions'
        /> */}
        <FormGroup onChange={handleChangeValues}>
          <FormControlLabel control={<Checkbox value="html" />} label="HTML" />
          <FormControlLabel control={<Checkbox value="css" />} label="CSS" />
          <FormControlLabel
            control={<Checkbox value="javascript" />}
            label="Javascript"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default MuiCheckbox;
