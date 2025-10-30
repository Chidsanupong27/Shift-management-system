import React from "react";
import useDutyStore from "../../store/useDutyStore";
import { Users, Clock } from "lucide-react";

const PersonelList = () => {
  //zustand

  //Fetching everything
  // const kaika = useDutyStore()
  // console.log(kaika)

  //fecth Selected
  const personnel = useDutyStore((state) => state.personnel);
  // console.log(personnel);

  return (
    //อันนี้คือหัว header
    <div className="w-80 bg-white overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-2">
          <Users className="text-blue-500" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">
            รายชื่อเจ้าหน้าที่
          </h2>
        </div>
        <p className="text-sm text-gray-500">ลากไปยังจุดเพื่อเพิ่่มเข้าเวร</p>
      </div>



      <div className="p-2.5 space-y-2">
        {personnel.map((item) => {
          return (
            <div key={item.id}
              className="flex items-center gap-3 p-3
          bg-blue-100 border border-blue-300 rounded-lg 
          cursor-move hover:shadow-md hover:scale-104"
            >
              <div className="text-3xl">{item.avatar}</div>

              <div className="flex-1">
                <div className="font-semibold text-gray-800">{item.name}</div>
                <div className="text-xs text-gray-500">{item.position}</div>
              </div>

              <div className="text-gray-400">
                <Clock />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonelList;
