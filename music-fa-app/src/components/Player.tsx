'use client'

import {useState} from "react";
import {PauseCircle, PlayCircle, SkipBack, SkipForward} from "lucide";
import {Icons} from "@/components/icons";

export function Player({musics}) {
    const [index, setIndex] = useState(1)
    const [play, setPlay] = useState(false)

    const handler = () => {
        var audio = document.getElementById("audio") as HTMLAudioElement
        if (audio.paused) {
            setPlay(true);
            audio.play();
        } else {
            audio.pause();
            setPlay(false);
        }
    }

    return (
        <div className="player-wrapper">
            <audio id="audio" autoPlay={play} src={musics[index]}>
            </audio>
            <div className="music-name">{musics[index].slice(8, -4)}</div>
            <div className="row-wrapper">
                <div onClick={() => (setIndex(index !== 0 ? index - 1 : musics.length - 1))}>
                    <Icons.previous width="40" height="40" strokeWidth="2"/>
                </div>
                <div onClick={handler}>{play ? <Icons.pause strokeWidth="2" width="40" height="40"/>
                    : <Icons.play strokeWidth="2" width="40" height="40"/>
                   }</div>
                <div onClick={() => (setIndex(index !== musics.length - 1 ? index + 1 : 0))}>
                    <Icons.next strokeWidth="2" width="40" height="40"/>
                </div>
            </div>
        </div>
    )
}