import MyDiv2 from "./MyDiv2";


export default function MyDiv1() {

    const div_1="div1";
    const div_2="div2";
    const div_3="div3";

  return (
    
    <div className="flex flex-col items-center justify-center w-2/3 p-5 text-black bg-red-300 h-2/3 ">
      <div className="flex items-center justify-start w-full h-10" >
       {div_1}
      </div>
      <MyDiv2 dn1={div_2} dn2={div_2} dn3={div_3}/>
    </div>
  )
}
