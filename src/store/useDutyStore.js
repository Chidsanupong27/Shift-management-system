import { create } from "zustand"
import { api } from "../lib/api"



const dutyStore = (set,get) => ({
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

        addLocation:async (lat,lng,name) => {
            try {
               const res = await api.post('/locations',
               {
                name:name,
                lat:Number(lat),
                lng:Number(lng),
                maxCapacity:5,
               }
            )

            await get().fetchAll()

            } catch (error) {
                console.log("Add location Err",error)
            }
        }

    })

const useDutyStore = create(dutyStore)

export default useDutyStore