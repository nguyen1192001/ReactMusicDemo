export const changeStatePlayMusicAction = () =>{
    return {
        type : "CHANGE_STATE_PLAY_MUSIC"
    }
}

export const getListSing = (sings)=>{
    return {
        type:"GET_SING",
        payload:sings
    }
}
export const getSing = (sing) =>{
    return {
        type:"GET_A_SING",
        payload:sing
    }
}