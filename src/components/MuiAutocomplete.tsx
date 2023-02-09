import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["html", "css", "javascript", "node.js", "react.js", "nest.js"];
const skillOptions = skills.map((skill, index) => ({
  id: index,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  return (
    <div className="w-72">
      {/* <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} />}
        value={value}
        onChange={(e: any, newValue: string | null) => setValue(newValue)}
        fullWidth
      /> */}
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} />}
        value={skill}
        onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
        fullWidth
      />
    </div>
  );
};

export default MuiAutocomplete;
