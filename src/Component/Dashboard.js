import React, { useState , useRef } from "react"
import { useDispatch, useSelector  } from "react-redux"

import { changeStatePlayMusicAction } from "../Redux/action/Sing"


function Dashboard() {
  const displayAsing = useSelector((state) => state.listSing.aSing)
  const listSingMap = useSelector((state) => state.listSing.listSing)
  const refAudio = useRef();

  const dispatch = useDispatch()
  let stateSingEmpty = false
  if (Object.keys(displayAsing).length === 0) {
    stateSingEmpty = true
  }

  const playAudio = () => {
    dispatch(changeStatePlayMusicAction())
    const audioEl = document.querySelector(".audio-element")

    console.log("audio >>>>>>>>>>.",audioEl)
    const cdThumb = document.querySelector(".cd-thumb")

    // console.log("ref audio",refAudio.current)
    // refAudio.current.load();
    // refAudio.current.play();

    // refAudio.current.src ='http://streaming.tdiradio.com:8000/house.mp3'

     
    audioEl.load()
    if(isChangeStatePlayMusic){

      
      let playPromise = audioEl.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
        console.log("success")
        console.log("src affter set ",audioEl.currentSrc.length)
    }).catch(error => {
      console.log("error",error)
    });
  }
      cdThumb.classList.add('loopInfinity')
      
    }else{
      
      audioEl.pause()
      cdThumb.classList.remove('loopInfinity')
    }
   
   
  }

  const isChangeStatePlayMusic = useSelector((state) => state.listSing.isChangeStatePlayMusic)

  return (
    <>
      {
          <div className="dashboard">
            {/* Header */}
            <header>
              <h4>Một bài hát rất hay đang phát :</h4>
              <h2>{stateSingEmpty ? listSingMap.length !== 0 ? listSingMap[0].name : "" : displayAsing.name}</h2>
            </header>
            {/* CD */}
            <div className="cd">
              <div className="cd-thumb" style={{ backgroundImage: `url("${ stateSingEmpty? listSingMap.length !== 0 ? listSingMap[0].image : "": displayAsing.image}")` }}>
              </div>
            </div>
            {/* Control */}
            <div className="control">
              <div className="btn btn-toggle-play" onClick={() => { playAudio() }}>
                {
                  isChangeStatePlayMusic ? (<i className="fas fa-play icon-play" />) :
                    (<i className="fas fa-pause icon-pause" />)
                }
              </div>
            </div>
            <input id="progress" className="progress" type="range" defaultValue={0} step={1} min={0} max={100} />

            <audio className="audio-element">
              {/* <source src="http://streaming.tdiradio.com:8000/house.mp3"></source> */}
              <source src={ stateSingEmpty? listSingMap.length !== 0 ? listSingMap[0].path : "":  displayAsing.path}></source>
            </audio>
          </div>
      }
    </>
  )
}
export default Dashboard