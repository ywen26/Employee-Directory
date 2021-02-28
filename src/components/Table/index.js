import React from "react";

function Table(props) {
    const { employees } = props;
    return (
      <table>
        <caption>Our products</caption>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.medium} alt={employee.name.first + " " + employee.name.last} />
              </td>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.nat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default Table;