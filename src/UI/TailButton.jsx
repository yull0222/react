
export default function TailButton({caption, coll, handleClick}) {

    
    const col ={
        'blue': 'bg-blue-200',
        'pink': 'bg-red-200',
        'fuchsia': 'bg-fuchsia-200'
    }

    const hov ={
        'blue': 'hover:bg-blue-400',
        'pink': 'hover:bg-red-400',
        'fuchsia': 'hover:bg-fuchsia-400'
    }
    
  return (
    <button className={`inline-flex items-center justify-center 
    px-5 py-3 mx-2 font-bold text-white rounded-md
    ${col[coll]} ${hov[coll]}`}
            onClick={handleClick}>
    {caption}

    </button>
  
  )
}
