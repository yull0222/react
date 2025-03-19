import TailButton from "../UI/TailButton"
import Ball from "./Ball";
import { useState } from "react";
export default function Lotto() {
    const[tags, setTags]=useState();
    const handleOk=()=>{

        let arr=[];

        while(arr.length<7){
            let n= Math.floor(Math.random()*45)+1;

            if (!arr.includes(n)) arr.push(n);

        }
        let bonus=arr.splice(-1);
        arr.sort((a,b)=>a-b)

        let tm=arr.concat(bonus);

        //tm 배열의 각 숫자 요소를 <Ball> 컴포넌트로 변환하는 역할을 합니다.
        tm=tm.map(item=><Ball n={item} key={`b${item}`}/>);
        tm.splice(6,0,<span className="mx-2 text-3xl" key="sp">+</span>);
        setTags(tm);

    }
  return (
    <div className="inline-flex items-center justify-center w-full">

        <div>
            {tags}
        </div>
        <div className="p-10">
            <TailButton caption='로또번호생성'coll='fuchsia' handleClick={handleOk} />
        </div>
      
    </div>
  )
}
