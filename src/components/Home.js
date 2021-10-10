import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApiDataAction } from "../Redux/Action";
export default function Home() {
  const dispatch = useDispatch();
  const dataFromReducer = useSelector((state) => state.Reducer.tasks);

  console.log("dataFromReducer :>> ", dataFromReducer.launch_failure_details);
  const [myData, setmyData] = useState([...dataFromReducer]);
  console.log("myData :>> ", myData);
  useEffect(() => {
    dispatch(GetApiDataAction());
  }, []);
  const searchtext = useSelector((state) => state.Reducer.searchText);

  return (
    <div>
      <table className="table table-striped table-light">
        <thead>
          <tr>
            <th scope="col">Flight Number</th>
            <th scope="col">Flight Name</th>
            <th scope="col">Launching Year</th>
            <th scope="col">Rocket Name</th>
            <th scope="col">Status </th>
          </tr>
        </thead>
        {dataFromReducer
          .filter((fitem) =>
            fitem.rocket.rocket_name
              .toLowerCase()
              .includes(searchtext.toLowerCase())
          )
          .map((item) => (
            <tbody>
              <tr>
                <th scope="row">{item.flight_number}</th>
                <th scope="row">{item.mission_name}</th>
                <th scope="row">{item.launch_year}</th>
                <th scope="row">{item.rocket.rocket_name}</th>
                <th scope="row">{item.launch_success}</th>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
