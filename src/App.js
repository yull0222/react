
//import './App.css';
import { GrFavorite } from "react-icons/gr";
import MyDiv1 from './01/MyDiv1';
function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-100'>
        <p>리액트 기초</p>
        <p><GrFavorite /></p>
        
        
      </header> 
      
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        <MyDiv1 />
      </main>
      <footer className='flex justify-center  items-center'>
        LEE YURI

      </footer>
    </div>
  
  )
}

export default App;
