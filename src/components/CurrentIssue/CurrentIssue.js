import React, {useState, useEffect} from "react";

import './CurrentIssue.css'

function CurrentIssue() {

  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="current-issues">
      <div className="indv-issue">
        <div>
            <p className="close-issue">Close Issue</p>
            <p>
              Assigned<span>Username</span>
            </p>
            <p>
              Priority<span>High</span>
            </p>
            <p>Description</p>
            <p className="description-text">
            src\App.js
              Line 1:26:  'useEffect' is defined but never used             
              Line 9:20:  'setAddIssue' is assigned a value but never used  
            src\components\AddIssue\AddIssue.js
              Line 1:26:  'useEffect' is defined but never used             
              Line 8:20:  'setAddIssue' is assigned a value but never used   
            </p>
        </div>
        <hr/>
      </div>

      <div className="indv-issue">
        <div>
            <p className="close-issue">Close Issue</p>
            <p>
              Assigned<span>Username</span>
            </p>
            <p>
              Priority<span>High</span>
            </p>
            <p>Description</p>
            <p className="description-text">
            src\App.js
              Line 1:26:  'useEffect' is defined but never used             
              Line 9:20:  'setAddIssue' is assigned a value but never used  
            src\components\AddIssue\AddIssue.js
              Line 1:26:  'useEffect' is defined but never used             
              Line 8:20:  'setAddIssue' is assigned a value but never used   
            </p>
        </div>
        <hr/>
      </div>

      <div className="indv-issue">
        <div>
            <p className="close-issue">Close Issue</p>
            <p>
              Assigned<span>Username</span>
            </p>
            <p>
              Priority<span>High</span>
            </p>
            <p>Description</p>
            <p className="description-text">
            src\App.js
              Line 1:26:  'useEffect' is defined but never used             
              Line 9:20:  'setAddIssue' is assigned a value but never used  
            src\components\AddIssue\AddIssue.js
              Line 1:26:  'useEffect' is defined but never used             
              Line 8:20:  'setAddIssue' is assigned a value but never used   
            </p>
        </div>
        <hr/>
      </div>
   </div>
  );
}

export default CurrentIssue;
