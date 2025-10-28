import React from "react";
import useDutyStore from "../../store/useDutyStore";

const PersonelList = () => {
//zustand

//Fetching everything
// const kaika = useDutyStore()
// console.log(kaika)

//fecth Selected
const kaika = useDutyStore((state) =>state.kaika)
console.log(kaika)

  return <div className="w-80 bg-white overflow-y-auto">PersonelList</div>;
};

export default PersonelList;
