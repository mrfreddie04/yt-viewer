import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();    
    onFormSubmit(term);
  }

  return(
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit} >
        <div className="field">
          <label htmlFor="term">Video Search</label>
          <input className="ui input"
            type="text" 
            id="term"
            name="term"
            placeholder="Movie"
            value={term}
            onChange={onInputChange}
          ></input>
        </div> 
      </form>
    </div>
  );

} 

export default SearchBar;