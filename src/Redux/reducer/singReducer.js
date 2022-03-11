
const initialState = {
    listSing : [],
    aSing:{},
    isChangeStatePlayMusic : true
}
export const singReducer = (state = initialState , {type,payload})=>{
    switch (type) {
        case "GET_SING":
            [...state.listSing] = payload
            return {...state}
        case "GET_A_SING":
            return { ...state, aSing: payload }
        case "CHANGE_STATE_PLAY_MUSIC":
            return {...state,isChangeStatePlayMusic:!state.isChangeStatePlayMusic}
        default:
            return state
    }
}