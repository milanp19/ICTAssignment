import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee_form" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}
