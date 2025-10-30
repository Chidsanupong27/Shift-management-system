import React, { useEffect, useState } from "react";
import PersonelList from "./components/people/PersonelList";
import Header from "./components/layout/Header";
import MapView from "./components/map/MapView";
import LocationList from "./components/locations/LocationList";
import axios from "axios";
import useDutyStore from "./store/useDutyStore";

const App = () => {
//js

const [adding,setAdding] = useState(false)
const [pending , setPending] = useState(null)

const fetchAll = useDutyStore((state)=> state.fetchAll)


useEffect(()=>{
  fetchAll()
},[])

const onPick = (lat,lng) => {
 setPending({
  lat:lat,
  lng:lng,
 })
//  setPending({lat,lng}) // for short hand obj
}


console.log(pending)


  return (
    <div className="flex h-screen bg-green-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header  adding={adding} setAdding={setAdding}/>

        <div className="flex flex-1 overflow-hidden">
          <MapView  adding={adding} onPick={onPick}/>
          <LocationList />
        </div>
      </div>
    </div>
  );
};

export default App;
