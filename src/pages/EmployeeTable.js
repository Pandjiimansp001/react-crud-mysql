import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

import API from "../axios/Api";

import "../styles/employeeTable.css";

const EmployeeTable = () => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    employee: [],
  });

  useEffect(() => {
    // API.get("viewdata.php").then((response) => {
    //   setEmployeeData(response.data);
    // });
    const response = API.get("viewdata.php");
    const json = response.json();
    const { results } = json;
    setEmployeeData(results);
  }, []);

  const addHandler = () => {
    navigate("/addEmployee/add");
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure to do this ?")) {
      await API.delete("deleteEmployee.php?id=" + id).then(() => {
        alert("Delete successfully!");
        window.location.reload();
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="table__container">
          <span className="table__title">Employee Data</span>
          <Button className="btn__add" variant="secondary" onClick={addHandler}>
            Add
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(employeeData).map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td className="table__btn">
                    <Link to={"/editEmployee/" + item.id}>
                      <Button variant="primary">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteHandler(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
