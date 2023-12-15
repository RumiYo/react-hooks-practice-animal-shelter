import React from "react";

function Filters({ filters, onChangeType, onFindPetsClick }) {

  function onFilterSelect(e){
    const filterValue = e.target.value
    onChangeType(filterValue)
  }

  function buttonClick(){
    console.log(filters.type)
    onFindPetsClick(filters.type)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={onFilterSelect}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={buttonClick} >Find pets</button>
      </div>
    </div>
  );
}

export default Filters;