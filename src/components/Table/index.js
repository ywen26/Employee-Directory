/* eslint-disable no-undef */
import React from "react";

function Table(props) {
    const { employees } = props;
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="col" style={{width:"10%"}}>Image</th>
            <th className="col" style={{width:"15%"}} onClick={props.sortByName}>Name</th>
            <th className="col" style={{width:"15%"}} onClick={props.sortByPhone}>Phone</th>
            <th className="col" style={{width:"20%"}} onClick={props.sortByEmail}>Email</th>
            <th className="col" style={{width:"15%"}} onClick={props.sortByLocation}>Location</th>
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