import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./App.css";
import { PropaneSharp } from '@mui/icons-material';

export default function BasicButton(props) {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Sign Up</Button> */}
      <Button type={props.type} onClick={props.onClick} variant="contained">{props.label}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}
