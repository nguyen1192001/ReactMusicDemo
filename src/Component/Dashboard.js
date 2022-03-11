import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeStatePlayMusicAction } from "../Redux/action/Sing"


function Dashboard() {
  const displayAsing = useSelector((state) => state.listSing.aSing)
  const listSingMap = useSelector((state) => state.listSing.listSing)

  const dispatch = useDispatch()
  let stateSingEmpty = false
  if (Object.keys(displayAsing).length === 0) {
    stateSingEmpty = true
  }

  const renderNoData = () => {
    return (
      <div className="dashboard">
        {/* Header */}
        <header>
          <h4>Một bài hát rất hay đang phát:</h4>
          <h2>{listSingMap.length !== 0 ? listSingMap[0].name : ""}</h2>
        </header>
        {/* CD */}
        <div className="cd">
          <div className="cd-thumb" style={{ backgroundImage: `url("${listSingMap.length !== 0 ? listSingMap[0].image : ""}")` }}>
          </div>
        </div>
        {/* Control */}
        <div className="control">

          <div className="btn btn-toggle-play" onClick={playAudio}>
            {
              isChangeStatePlayMusic === true ? (<i className="fas fa-play icon-play" />) :
                (<i className="fas fa-pause icon-pause" />)
            }
          </div>
        </div>
        <input id="progress" className="progress" type="range" defaultValue={0} step={1} min={0} max={100} />
        {/* <audio id="audio" src /> */}
        <audio className="audio-element">
          <source src="http://streaming.tdiradio.com:8000/house.mp3"></source>
          {/* <source src={listSingMap.length !== 0 ? listSingMap[0].path : ""}></source> */}
        </audio>
      </div>

    )
  }



  const playAudio = () => {
    dispatch(changeStatePlayMusicAction())
    const audioEl = document.querySelector(".audio-element")
    const cdThumb = document.querySelector(".cd-thumb")
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });

    if(isChangeStatePlayMusic){
      audioEl.play()
      cdThumbAnimate.play()
    }else{
      audioEl.pause()
      cdThumbAnimate.cancel()
    }

    // isChangeStatePlayMusic ? cdThumbAnimate.pause() &&  : cdThumbAnimate.play() && 
   
    console.log(cdThumbAnimate)
  }

  const isChangeStatePlayMusic = useSelector((state) => state.listSing.isChangeStatePlayMusic)

  return (
    <>
      {
        stateSingEmpty ? renderNoData() :
          <div className="dashboard">
            {/* Header */}
            <header>
              <h4>Một bài hát rất hay đang phát :</h4>
              <h2>{displayAsing.name}</h2>
            </header>
            {/* CD */}
            <div className="cd">
              <div className="cd-thumb" style={{ backgroundImage: `url("${displayAsing.image}")` }}>
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
              <source src="http://streaming.tdiradio.com:8000/house.mp3"></source>
              {/* <source src={displayAsing.path}></source> */}
            </audio>
            {/* để d thì onclick ăn còn bỏ biến đường dẫn vẫn đổi mà đéo ăn là sao????? */}
          </div>
      }
    </>
  )
}
export default Dashboard