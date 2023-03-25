import { Route, Routes } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeTable from "./pages/EmployeeTable";

function App() {
  return (
    <>
      {/* <EmployeeTable /> */}
      <Routes>
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/addEmployee/add" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
        <Route path="/deleteEmployee/:id" element={<DeleteEmployee />} />
      </Routes>
    </>
  );
}

export default App;
