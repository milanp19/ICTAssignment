import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h2">Employee Dashboard</Typography>
      <TableContainer sx={{ textAlign: "center" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <h1>Id</h1>
              </TableCell>
              <TableCell align="center">
                <h1>Name</h1>
              </TableCell>
              <TableCell align="center">
                <h1>Email</h1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
