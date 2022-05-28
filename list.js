// import axios from "axios"
import React from "react";
import Table from "react-bootstrap/Table";
const List = (props) => {
  return (
    <>
      <div>
        <Table className="datatable">
          <thead className="tablehead">
            <tr className="headrow">
              <th>No.</th>
              <th>Block </th>
              <th>Name </th>
              <th>Circle</th>
              <th>DeliveryStatus</th>
              <th>Division</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {props?.item?.map((item, index) => {
              // console.log(item);
              return (
                <tr key={index} className="bodyrow">
                  <td> {index + 1}</td>
                  <td> {item.Block}</td>
                  <td> {item.Name}</td>
                  <td> {item.Circle}</td>
                  <td> {item.DeliveryStatus}</td>
                  <td> {item.Division}</td>
                  <td> {item.Region}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        {/* -----------------------------weather api data--------------------------------
        <Table>
        <thead className = "headrow">
        <tr>
        <th>ID</th>
        <th>Main</th>
        <th>Description</th>
              <th>icon</th>
            </tr>
          </thead>
          <tbody>
            {props?.item?.map((item, index) => {
              // console.log(item);
              return (
                <tr key={index} className="bodyrow">
                  <td> {item.id}</td>
                  <td> {item.main}</td>
                  <td> {item.description}</td>
                  <td>
                    {" "}
                    <img
                      src={`http://openweathermap.org/img/w/${item.icon}.png`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table> */}
      </div>
    </>
  );
};
export default List;
