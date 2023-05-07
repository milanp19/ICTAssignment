import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const EmployeeForm = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <TextField label="Name" />
      <br />
      <br />
      <TextField label="Designation" />
      <br />
      <br />
      <TextField label="Location" />
      <br />
      <br />
      <TextField label="Salary" />
      <br />
      <br />
      <Button variant="contained">Submit</Button>
    </div>
  );
};

export default EmployeeForm;
