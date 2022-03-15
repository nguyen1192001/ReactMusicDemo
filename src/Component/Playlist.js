import React, { useEffect , useRef } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getListSing, getSing } from "../Redux/action/Sing"

function Playlist() {
    const dispatch = useDispatch()

    const listSingMap = useSelector((state) => state.listSing.listSing)
    console.log("listsingmap",listSingMap)
    const fetchListSong = async () => {
        const response = await axios.get("https://6225c6446c0e3966205b14df.mockapi.io/sing")
        dispatch(getListSing(response.data))
    }
    useEffect(() => {
        fetchListSong()
    }, [])

    const fetchSing = async (idSing) =>{
        const response = await axios.get("https://6225c6446c0e3966205b14df.mockapi.io/sing" + "/" + idSing)
        dispatch(getSing(response.data))
    }
    const selectSong = (idSing) =>{
        fetchSing(idSing)

    }
    const renderSong = listSingMap.map(item => {

        return (
            <div className="song" onClick={()=>{selectSong(item.id)}}>
                <div className="thumb" style={{ backgroundImage: `url("${item.image}")`}}>
                </div>
                <div className="body">
                    <h3 className="title">{item.name}</h3>
                    <p className="author">{item.singer}</p>
                </div>
                <div className="option">
                    <i className="fas fa-ellipsis-h" />
                </div>
            </div>
        )
    })


    return (
        <div className="playlist">
            {renderSong}
        </div>
    )
}
export default Playlist