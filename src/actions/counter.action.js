import { DECREMENTCOUNTER, INCREMENTCOUNTER } from "../Constent"

export const incrementcounter = () => {
    return{
        type: INCREMENTCOUNTER
    }
}

export const decrementcounter = () => {
    return{
        type: DECREMENTCOUNTER
    }
}