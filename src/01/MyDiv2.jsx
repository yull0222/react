import MyDiv3 from "./MyDiv3"

export default function MyDiv2({dn1, dn2, dn3}) {
  return (
    <div className="flex-col items-center justify-center w-3/4 p-5 m-10 text-black bg-red-200 h-3/4">
      <div className="flex flex-col items-start justify-start w-full ">
        {`{dn1}>{dn2}`}
      </div>
      <MyDiv3 d1={dn1} d2={dn2} d3={dn3}/>
    </div>
  )
}
