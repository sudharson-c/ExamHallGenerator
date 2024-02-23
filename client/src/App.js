import {useEffect, useState} from 'react';
import './App.css';
import { response } from 'express';
import axios from 'axios';
import fetch from 'node-fetch';



function App() {
  const [rows,setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('/api')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect only once when the component mounts
  
  

  return (
    <>
      <div class="container mt-5">
        <form action="" method="post">
            <div class="form-group">
                <label for="rows">Enter rows:</label>
                <input type="number" class="form-control" id="rows" name="rows" value= {rows} min="0" max="100" onChange={(e)=>setRows(e.target.value)} required />
            </div>

            <div class="form-group">
                <label for="columns">Columns:</label>
                <input type="number" class="form-control" id="columns" name="columns" value= {cols} min="0" max="100" onChange={(e)=>setCols(e.target.value)} required />
            </div>
            <br />
            <button type="submit" class="btn btn-primary" >Generate</button>
        </form>
      </div>
    </>
  );
}

export default App;
