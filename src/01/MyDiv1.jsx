import MyDiv2 from "./MyDiv2";


export default function MyDiv1() {

    const div_1="div1";
    const div_2="div2";
    const div_3="div3";

  return (
    
    <div className="w-2/3 h-2/3 flex flex-col p-5 justify-center items-center bg-red-300 text-black ">
      <div className="w-full h-10 flex justify-start items-center" >
       MyDiv1
      </div>
      <MyDiv2 />
    </div>
  )
}
