import { create } from "zustand";
import { api } from "../lib/api";

const dutyStore = (set, get) => ({
  //fn body
  personnel: [],
  locations: [],
  assignments: [],
  selectedLoccationId: null,

  fetchAll: async () => {
    try {
    //   const personnel = await api.get("/personnel");
    //   const locations = await api.get("/locations");
    //   const assignments = await api.get("/locationPersonnel")

      const [personnel,locations,assignments] = await Promise.all([
            api.get("/personnel"),
            api.get("/locations"),
            api.get("/locationPersonnel")
      ])

    //   console.log('Kaika',kaika[0])



      set({
        personnel: personnel,
        locations: locations,
        assignments: assignments,
      });
    } catch (error) {
      console.log(error);
    }
  },

  addLocation: async (lat, lng, name) => {
    try {
      const res = await api.post("/locations", {
        name: name,
        lat: Number(lat),
        lng: Number(lng),
        maxCapacity: 5,
      });

      await get().fetchAll();
    } catch (error) {
      console.log("Add location Err", error);
    }
  },

  assignPerson: async (personId, LocationId) => {
    try {
      console.log(personId, LocationId);
      const res = await api.post("locationPersonnel/", {
        personId: personId,
        LocationId: LocationId,
      });
    } catch (error) {
      console.log(error);
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
