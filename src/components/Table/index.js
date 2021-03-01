import React from "react";

function Table({ employees }) {
    
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="col" style={{width:"10%"}}>Image</th>
            <th className="col" style={{width:"15%"}}>Name</th>
            <th className="col" style={{width:"15%"}}>Phone</th>
            <th className="col" style={{width:"20%"}}>Email</th>
            <th className="col" style={{width:"15%"}}>Location</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.login.uuid}>
              <td className="align-middle">
                <img src={employee.picture.medium} alt={`${employee.name.first} ${employee.name.last}`} />
              </td>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default Table;