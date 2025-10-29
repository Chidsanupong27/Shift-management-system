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
                const locations = await api.get('locations')
                set({
                    personnel:personnel,
                    locations:locations
                })
            } catch (error) {
                console.log(error)
            }
        },

    })

const useDutyStore = create(dutyStore)

export default useDutyStore