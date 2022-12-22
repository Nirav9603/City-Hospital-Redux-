import { ADDMEDICINE, DELETEMEDICINE, EDITMEDICINE } from "../Constent";

const initState = [];

export const addMedicine = (state = initState, action) => {
    if (action.type === ADDMEDICINE) {
        const data = state
        data.push(action.payload)
        return data
    }

    if (action.type === DELETEMEDICINE) {
        const data = state.filter((i) => i.id !== action.payload)
        return data
    }

    if (action.type === EDITMEDICINE) {
        const data = state.map((i)=>{
            if(i.id === action.payload.id){
                i = action.payload
            }
            return i
        })
        return data
    }

    return state
}