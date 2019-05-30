import React from 'react';



const TableList = ({ meteors, pagination }) => {
  return (
    <div>
      <table>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Nametype</th>
            <th>Rec class</th>
            <th>Mass(g)</th>
            <th>Fall</th>
            <th>Year</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
      {
        meteors.map((user, i) => {
          return (
            <tr key={i}>
              <td>{meteors[i].name}</td>
              <td>{meteors[i].id}</td>
              <td>{meteors[i].nametype}</td>
              <td>{meteors[i].recclass}</td>
              <td>{meteors[i].mass}</td>
              <td>{meteors[i].fall}</td>
              <td>{meteors[i].year ? meteors[i].year.substring(0,10):""}</td>
              <td>{meteors[i].reclat}</td>
              <td>{meteors[i].reclong}</td>
            </tr>
          );
        })
      }
      </table>
    </div>
  );
}

export default TableList;