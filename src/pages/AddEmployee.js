import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import API from "../axios/Api";

import "../styles/employeeForm.css";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const employeeData = { name, job };

  const json = JSON.stringify(employeeData);

  const submitHandler = async (e) => {
    e.preventDefault();
    await API.post("addemployee.php", json).then(() => {
      alert("Data successfully added!");
      navigate("/");
    });

    setName("");
    setJob("");
  };

  return (
    <>
      <div className="container">
        <span className="form__title">Add Employee</span>
        <Form className="form__employee" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Job</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit" className="submit__btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddEmployee;
