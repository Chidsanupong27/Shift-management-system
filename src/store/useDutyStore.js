import { create } from "zustand"


const dutyStore = () => ({
    //fn body
        personnel:[],
        locations:[],
        assignments:[],
        selectedLoccationId:null,
        kaika:"tam",
        jukkru: ()=> console.log("jukkru")
    })

const useDutyStore = create(dutyStore)

export default useDutyStore