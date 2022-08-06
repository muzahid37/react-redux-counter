import { DECRIMENT, INCRIMENT, RESET } from "../constants/counterConstant"

export const incrimentCounter=()=>{
    return{
        type:INCRIMENT,
    }
}
export const decrimentCounter=()=>{
    return{
        type:DECRIMENT,
    }
}
export const reset=()=>{
    return{
        type:RESET,
    }
}