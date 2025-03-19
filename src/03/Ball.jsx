

export default function Ball({n}) {
  
    const coln={
        'b0':'bg-red-200',
        'b1':'bg-red-300',
        'b2':'bg-red-400',
        'b3':'bg-blue-200',
        'b4':'bg-blue-400',
    }
  
    return (
    <div className={`inline-flex p-5 w-16 h-16 
                    mx-2 justify-center items-center rounded-full text-2xl font-bold
                    ${coln["b"+Math.floor(n/10)]} text-black`}>
      {n}
    </div>
  )
}
