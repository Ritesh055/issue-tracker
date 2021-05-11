import React, {useState, useEffect} from "react";
import "./AddIssue.css"

function AddIssue() {

  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="add-issue">
        <form>
            <label>
                Description
                <input type="text" placeholder="Description of Issue..."/>
            </label>
            <label>
                Assign To
                <select name ="forDev" id="forDev">
                    <option value="" disabled selected hidden> </option>                    
                    <option value="Ritesh">Ritesh</option>
                    <option value="Raj">Raj</option>
                    <option value="Mohammad">Mohammad</option>
                    <option value="Andrew">Andrew</option>
                    <option value="Colby">Colby</option>
                </select>
            </label>
            <label>
                Priority
                <select name ="priority" id="priority" >
                    <option value="" disabled selected hidden> </option>                
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Extremely Important">Extremely Important </option>
                </select>
            </label>
            <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default AddIssue;
