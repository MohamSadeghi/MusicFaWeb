'use client'

import {useState} from "react";

export function Player({musics}) {
    const [index,setIndex] = useState(1)
    const [play,setPlay] = useState(false)

    const handler = () => {
       var audio = document.getElementById("audio") as HTMLAudioElement
        if(audio.paused){
            setPlay(true);
            audio.play();
        }
        else {
            audio.pause();
            setPlay(false);
        }
    }

    return(
        <div className="player-wrapper">
            <audio id="audio" autoPlay={play} src={musics[index]}>
            </audio>
            <button onClick={handler}>{play ? "PAUSE" : "PLAY"}</button>
        </div>
    )
}