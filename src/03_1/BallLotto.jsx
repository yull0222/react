
export default function BallLotto({x}) {
   

    //십의 자리 숫자에 따라 공 색깔 다르게 둠둠
    const n={
        'b0': 'bg-red-100',
        'b1': 'bg-red-200',
        'b2': 'bg-red-300',
        'b3': 'bg-red-400',
        'b4': 'bg-red-500'

    }

   



  return (
    <div className={`w-16 h-16 p-5 mx-2  inline-flex items-center justify-center text-2xl rounded-full 
                ${n["b"+Math.floor(x/10)] }`}>
                    {x}
      
    </div>
  )
}
