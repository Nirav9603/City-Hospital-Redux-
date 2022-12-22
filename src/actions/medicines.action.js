import { ADDMEDICINE, DECREMENT, DELETEMEDICINE, EDITMEDICINE, INCREMENT } from "../Constent"

export const increment = () => {
    return{
        type: INCREMENT
    }
}

export const decrement = () => {
    return{
        type: DECREMENT
    }
}

export const AddMedicine = (data) => {
    return{
        type: ADDMEDICINE,
        payload: data
    }
}

export const DeleteMedicine = (data) => {
    return{
        type: DELETEMEDICINE,
        payload: data
    }
}

export const EditMedicine = (data) => {
    return{
        type: EDITMEDICINE,
        payload: data
    }
}
