/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Container from "../components/Container";
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
          <Container style={{ minHeight: "80%" }}>
            <Table employees={employees}
            //   image={this.state.employees.picture.large}
            //   firstName={this.state.employees.name.first} 
            //   lastName ={this.state.employees.name.last}
            //   phone={this.state.employees.phone}
            //   email={this.state.employees.email}
            //   nationality={this.state.employees.nat}
            />
          </Container>
        </div>
      );
}

export default Staff;