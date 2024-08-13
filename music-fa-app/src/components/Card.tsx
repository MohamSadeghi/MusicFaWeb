'use client'
import {Genres} from "../../constants/genres";
import Image from "next/image";

type CardProp = {
    genre : string;
}

export default function Card({genre}:CardProp){
    return(
        <div className="card">
            <div className="title">{Genres[genre].title}</div>
            <Image className="image-hover" src={Genres[genre].src} alt={`${genre}-icon`} width={400} height={400}/>
            <div className="description">{Genres[genre].description}</div>
        </div>
    )
}