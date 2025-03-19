import MyListData1 from './MyListData1.json'
import MyListItem from './MyListItem'
export default function MyListData() {
    const tags =MyListData1.map(item => 
        <MyListItem 
        key={item.title}
        title={item.title} img={item.imgUrl} content ={item.content}/>
    )
  return (

    
    
    <div className='grid w-10/12 grid-cols-2 gap-4'>
        {tags}
    </div>
  )
}
