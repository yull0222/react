//카드 만들기기
export default function MyListItem({title, img, content}) {
    let cnt=0;
    const handleClick=()=>{
        cnt=cnt+1;
        console.log('cnt=', cnt);
    }
  return (
    <div className="flex items-start justify-center w-full h-full p-2 border border-black">
      <div className="flex w-1/3 m-2 ">
        <img src={img} alt={title} />

      </div>
      <div className="flex flex-col justify-between w-2/3 h-full p-2 m-2">
        <div>
            <h1 className="text-xl"> {title} </h1>
            <p> {content}</p>
        </div>

        <div className="flex items-end justify-center">
            <span onClick={handleClick}>★</span>
            <span className="inline-flex mx-2"> 좋아요 </span>
            <span className="inline-flex mx-2"> {cnt}</span>
        </div>

      </div>
    </div>
  )
}
