import React from "react";

function SearchForm(props) {
  return (
    <form className="mt-4 ml-4 pb-3" onChange={props.handleFormSubmit}>
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
          <button type="submit" className="btn btn-success">
            Reload
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;