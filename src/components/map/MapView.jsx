import React from "react";
import { MapContainer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";



const ClickToAdd = ({adding , onPick}) => {
  //fn body
const map = useMapEvents({
  click(e){
     {
      adding && onPick(e.latlng.lat, e.latlng.lng);
     }
  }
})
  return
}

const MapView = ({adding,onPick}) => {


  const center = [13,100]
  return (
    <div className="flex-1">
      <MapContainer
        className="h-full"
        center={center}
        zoom={7}
      >
       
       <Layers/>

        <ClickToAdd adding={adding} onPick={onPick}/>



      </MapContainer>
    </div>
  );
};

export default MapView;
