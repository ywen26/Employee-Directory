/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";

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

  const sortByName = () => {
      const name = employees.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
      setEmployees([...name]);
  }

  const sortByPhone = () => {
    const phone = employees.sort((a, b) => (a.phone > b.phone ? 1 : -1));
    setEmployees([...phone]);
  }

  const sortByEmail = () => {
    const email = employees.sort((a, b) => (a.email > b.email ? 1 : -1));
    setEmployees([...email]);
  }

  const sortByLocation = () => {
    const location = employees.sort((a, b) => (a.location.city > b.location.city ? 1 : -1));
    setEmployees([...location]);
}


  
    
      return (
        <div>
          <SearchForm />
          <Container style={{ minHeight: "80%" }}>
            <Table 
              employees={employees}
              sortByName={sortByName} 
              sortByPhone={sortByPhone}
              sortByEmail={sortByEmail}
              sortByLocation={sortByLocation}
            />
          </Container>
        </div>
      );
}

export default Staff;