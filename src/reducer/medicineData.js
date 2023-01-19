import { ADDMEDICINE, DELETEMEDICINE, EDITMEDICINE } from "../Constent";

const initState = {
    data : []
};

export const addMedicine = (state = initState, action) => {
    if (action.type === ADDMEDICINE) {
        const data = state.data
        data.push(action.payload)
        return {...state, data}
    }

    if (action.type === DELETEMEDICINE) {
        const data = state.data.filter((i) => i.id !== action.payload)
        return {...state, data}
    }

    if (action.type === EDITMEDICINE) {
        const data = state.data.map((i)=>{
            if(i.id === action.payload.id){
                i = action.payload
            }
            return i 
        })
        return {...state, data}
    }

    return state
}