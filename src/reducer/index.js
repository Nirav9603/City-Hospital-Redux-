import { updateMedicines } from "./medicine";
import { combineReducers } from "redux";
import { addMedicine } from "./medicineData";

export const rootReducer = combineReducers({
	updateMedicines,
	addMedicine
})