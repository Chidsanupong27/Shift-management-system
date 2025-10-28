import React from "react";
import useDutyStore from "../../store/useDutyStore";

const PersonelList = () => {
//zustand

//Fetching everything
// const kaika = useDutyStore()
// console.log(kaika)

//fecth Selected
const personnel = useDutyStore((state) =>state.personnel)
console.log(personnel)

  return <div className="w-80 bg-white overflow-y-auto">PersonelList</div>;
};

export default PersonelList;
