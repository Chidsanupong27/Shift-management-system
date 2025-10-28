import { create } from "zustand"
import { api } from "../lib/api"


const dutyStore = (set) => ({
    //fn body
        personnel:[],
        locations:[],
        assignments:[],
        selectedLoccationId:null,
      
        fetchAll:async () => {
            try {
                const personnel = await api.get("/personnel")
                set({
                    personnel:personnel,
                })
            } catch (error) {
                console.log(error)
            }
        },

    })

const useDutyStore = create(dutyStore)

export default useDutyStore