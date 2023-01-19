import { DECREMENTCOUNTER, INCREMENTCOUNTER } from "../Constent"

const initState = 0


export const CounterData = (state=initState, action) => {
    if(action.type === INCREMENTCOUNTER){
        return state+1
    }
    else if(action.type === DECREMENTCOUNTER){
        return (
            state > 0 ? state - 1 : state
        )
    }
    return(
        state
    )
}