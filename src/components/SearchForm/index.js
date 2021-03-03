import React from "react";

function SearchForm(props) {
//   const { employees } = props;
  return (
    <form className="mt-4 ml-4" onChange={props.handleFormSubmit}>
      <div className="form-group">
        <label className="pl-1" htmlFor="name">Search by Name:</label>
        <div className="form-inline">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employees"
            list="names"
            type="text"
            className="form-control mr-sm-2"
            placeholder="Name"
            id="name"
          />
        {/* <datalist id="names">
          {employees.map(employee => (
            <option value={`${employee.name.first} ${employee.name.last}`} key={employee.login.uuid} />
          ))}
        </datalist> */}
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;