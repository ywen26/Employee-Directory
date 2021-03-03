import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";

const Staff = () => {
  const [list, setList] = useState([]);
  const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState("");
  
  useEffect(() => {
    API.getEmployeesList()
      .then(res => {
        setEmployees([...res.data.results]);
        setList([...res.data.results]);
      })
      .catch(err => console.log(err));
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

  const handleInputChange = (event) => {
    setEmployees(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const value = event.target.value;
    let filterName = list.filter((search) => 
      `${search.name.first} ${search.name.last}`.toLowerCase().includes(
          document.querySelector("#name").value.toLowerCase()
      )
    );
    setEmployees([...filterName]);
  }
      
    
  return (
    <div>
      <SearchForm 
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        // employees={list}
      />
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