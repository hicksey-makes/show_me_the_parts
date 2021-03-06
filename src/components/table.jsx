import React, {useEffect, useState} from 'react';

function TableMaker() {
  const [partAtts, setPartAtts] = useState([]);

  useEffect(() => {
      fetch("https://fairestdb.p.rapidapi.com/part/rideHeightAtts", {
    	"method": "GET",
    	"headers": {
        "content-type": "application/json",
        "accept": "application/json",
    		"x-rapidapi-host": "fairestdb.p.rapidapi.com",
    		"x-rapidapi-key": "23680a36f3msh74c57401435d3cfp151b19jsndc9f0c9b453e"
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
    // console.log(partAtts);
  }

  function renderTable() {
    return partAtts.map((attribute, index) => {
      const { _id, name, value } = attribute;
      return (
        <tr key={_id} className="mono">
          <td className="contrast">{name}</td><td className="contrast">{value}</td>
        </tr>
      )
    });
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
          {renderTable()}
        </tbody>
      </table>
    </div>
  );



}

export default TableMaker;
