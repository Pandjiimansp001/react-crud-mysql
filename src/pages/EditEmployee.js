import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import API from "../axios/Api";

const EditEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [empData, setEmpData] = useState({
    id: "",
    name: "",
    job: "",
  });

  useEffect(() => {
    API.get("getemployee.php?id=" + id).then((response) => {
      setEmpData(response.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const json = JSON.stringify(empData);

    await API.put("editemployee.php", json).then(() => {
      alert("Data successfully edited!");
      navigate("/");
    });

    setEmpData("");
  };

  return (
    <>
      <div className="container">
        <span className="form__title">Edit Employee</span>
        <Form className="form__employee" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your name"
              name="name"
              value={empData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Job</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your job"
              name="job"
              value={empData.job}
              onChange={handleInputChange}
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

export default EditEmployee;
