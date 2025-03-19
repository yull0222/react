//import MyListData from "./02/MyListData";
import MyClock from "./04/MyClock";
//import './App.css';
import { GrFavorite } from "react-icons/gr";

//import MyDiv1 from './01/MyDiv1';
function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex items-center justify-between h-20 p-10 text-xl font-bold bg-slate-100'>
        <p>리액트 기초</p>
        <p><GrFavorite /></p>
        
        
      </header> 
      
      <main className='flex items-center justify-center w-full overflow-y-auto grow'>
        <MyClock/>
      </main>
      <footer className='flex items-center justify-center'>
        LEE YURI

      </footer>
    </div>
  
  )
}

export default App;
