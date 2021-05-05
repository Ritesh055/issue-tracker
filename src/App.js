import React, {useState, useEffect} from "react";
import AddIssue from './components/AddIssue/AddIssue';
import CurrentIssue from './components/CurrentIssue/CurrentIssue';

import './App.css';

function App() {

  const [addIssue, setAddIssue] = useState(false);

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="grey-card-container">
          {addIssue ? <AddIssue/> : <CurrentIssue/>}
      </div>  
      <div className="view-selection-div">
        <button class="view-button">Current Issues</button>
        <button class="view-button active-button">Add Issue</button>
      </div>

    </div>
  );
}

export default App;
