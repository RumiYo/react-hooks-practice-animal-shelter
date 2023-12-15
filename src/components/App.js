import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(selectedFilter){
    setFilters({ type: selectedFilter })
  } 

  function onFindPetsClick(selectedFilter){
    if(selectedFilter==="all"){
      fetch("http://localhost:3001/pets")
      .then( r => r.json() )
      .then( data => setPets(data) )
    }else{
        fetch(`http://localhost:3001/pets?type=${selectedFilter}`)
        .then( r => r.json() )
        .then( data => setPets(data) )
    }
  }

  function onAdoptPet(selectedPetID){
    const updatedList = pets.map( pet => {
      if(pet.id===selectedPetID){
        const updatedPet = {...pet, isAdopted: true }
        return updatedPet;
      }else{
        return pet;
      }
    })
    setPets(updatedList);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={filters} onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;