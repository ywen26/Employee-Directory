/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
// import { render } from "react-dom";

const Staff = () => {
  const [list, setList] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    API.getEmployeesList()
      .then(res => {
        setEmployees([...res.data.results]);
      })
      .catch(err => setError(err));
  }, []);
  
    
      return (
        <div>
          <SearchForm />
          <Container style={{ minHeight: "80%" }}>
            <Table employees={employees} />
          </Container>
        </div>
      );
}

export default Staff;