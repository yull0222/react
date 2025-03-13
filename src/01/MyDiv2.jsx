import MyDiv3 from "./MyDiv3"

export default function MyDiv2() {
  return (
    <div className="w-3/4 h-3/4 flex-col p-5 m-10  justify-center items-center bg-red-200 text-black">
      <div className="w-full  flex  flex-col justify-start items-start ">
        MyDiv2
      </div>
      <MyDiv3 />
    </div>
  )
}
