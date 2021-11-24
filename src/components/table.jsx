import React, {useEffect, useState} from 'react';

function TableMaker() {
  const [partAtts, setPartAtts] = useState([]);

  useEffect(() => {
    fetch("https://fairestdb.p.rapidapi.com/part/carpartAttributes", {
	     "method": "GET",
	      "headers": {
		        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
		        "x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e",
            "Content-Type": "application/json",
            "accept": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
	      // console.log(data);
        setPartAtts(data);
    })
    .catch(err => {
	      console.error(err);
    });

  }, []);
  if (partAtts) {
    console.log(partAtts);
  }
  return  (
    <div className="comp-space container">
      <h2 className="section-head">PARTS ATTRIBUTES</h2>
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
          }
        </tbody>
      </table>
    </div>
  );



}

export default TableMaker;
