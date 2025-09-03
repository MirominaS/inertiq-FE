import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = ({minWidth = 120,label,handleChange,options,value}) => {
  return (
    <div>
      <Box sx={{ minWidth:{minWidth}}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
            onChange={handleChange}
          >
            {options.map(option => <MenuItem value = {option.value} > {option.label}</MenuItem> )}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Dropdown;
