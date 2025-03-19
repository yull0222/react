import BallLotto from "./BallLotto"
import { useState } from "react"
import TailButton from "../UI/TailButton"
export default function Lotto1() {
    const[tags,setTags]=useState();
    const handOk=()=>{

    const arr=[]
    while(arr.length<7){
        let x=Math.floor(Math.random()*45)+1;
        if (!arr.includes(x)) arr.push(x);
    }
    let bonus=arr.splice(-1);
    arr.sort((a,b)=>a-b);

    let tm=arr.concat(bonus);
    
    tm=tm.map(item=> <BallLotto x={item} key={`b${item}`} />);
    tm.splice(6,0,<span className="mx-2 text-3xl" key="sp">+</span>);
    
    setTags(tm);




    }

    

    

  return (
    <div className="grid items-center justify-center w-full">
      <div>
        {tags}
      </div>
      <div className="flex items-center justify-center p-8">
        <TailButton caption='로또 번호 생성' coll='pink' handleClick={handOk}/>
        
      </div>
    </div>
  )
}
