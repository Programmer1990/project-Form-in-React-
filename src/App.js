import {useState} from 'react';
import './index.css';
import Student from './Student';

function App(){
  const [name,setName]=useState("");
  const [tnc, setTnc]=useState(false);
  const[interest,setInterest]=useState("");
 function getFormData(e)
 {
   console.warn(name,tnc,interest)
   e.preventDefault() // e stands for event, preventDefault stops form to submit.
 }
      return(
        <div className="App">
          
      
            <h1>Handle Form in React</h1>
          <form onSubmit={getFormData}>
            <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
              <option>Select options</option>
              <option>Marval</option>
              <option>DC</option>
            </select><br/><br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and conditions</span>
            <br/><br/>
            <button type="submit">Submit</button>
          </form>
          
      
           </div>
    );
   
}


    
     

export default App;
