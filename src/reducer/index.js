import { updateMedicines } from "./medicine";
import { combineReducers } from "redux";
import { addMedicine } from "./medicineData";
import { CounterData } from "./counter";
import doctorData from "./doctorsData";

export const rootReducer = combineReducers({
	updateMedicines,
	addMedicine,
	doctorData,
	CounterData
	
})