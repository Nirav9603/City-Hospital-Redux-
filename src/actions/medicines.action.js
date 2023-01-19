import { ADDMEDICINE, DELETEMEDICINE, EDITMEDICINE } from "../Constent"

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
