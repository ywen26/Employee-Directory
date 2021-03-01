import React from "react";

function SearchForm(props) {
  return (
    <form className="mt-4 ml-4">
      <div className="form-group">
        <label className="pl-1" htmlFor="name">Search by Name:</label>
        <div className="form-inline">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employeesname"
            list="names"
            type="text"
            className="form-control mr-sm-2"
            placeholder="Name"
            id="name"
          />
        {/* <datalist id="names">
          {props.employees.map(employee => (
            <option value={employee.name.first} key={employee} />
          ))}
        </datalist> */}
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;