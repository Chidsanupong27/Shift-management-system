import React, { useEffect } from "react";
import PersonelList from "./components/people/PersonelList";
import Header from "./components/layout/Header";
import MapView from "./components/map/MapView";
import LocationList from "./components/locations/LocationList";
import axios from "axios";
import useDutyStore from "./store/useDutyStore";

const App = () => {
//js
const fetchAll = useDutyStore((state)=> state.fetchAll)


useEffect(()=>{
  fetchAll()
},[])

  return (
    <div className="flex h-screen bg-green-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <MapView />
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
