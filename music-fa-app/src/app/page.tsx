import Image from "next/image";
import {Genres} from "../../constants/genres";
import Card from "@/components/Card";

export default function Home() {
  const keys = Object.keys(Genres)
  return (
    <div className="card-wrapper">
      {keys.map((genre,index)=>(
          <Card genre={genre}/>
      ))}
    </div>
  );
}
