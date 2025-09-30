
import './App.css'
import Navbar from './Components/Navbar'
import AvailablePlayers from './Components/AvailablePlayers'
import Footer from './Components/Footer'
import { Suspense, useState } from 'react'
import SelectedPlayers from './Components/SelectedPlayers'

import { ToastContainer,toast,Bounce } from 'react-toastify';

const loadPlayers = async () =>{
        const response = await fetch('/players.json');
        return response.json(); 
    }

const playersPromise = loadPlayers();

function App() {

  const [active, setActive] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(100000);

  //show selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  //passed to other components using props
  const handleSelection = (player)=>{
    if(selectedPlayers.length === 6){
      toast("You've already selected 6 players");
      return;
    }

    if(player.market_value > availableBalance){
      toast("Available balance is not enough");
      return;
    }
    setAvailableBalance(availableBalance - player.market_value);

    const newPlayers = [...selectedPlayers,player];
    setSelectedPlayers(newPlayers);
  }

  const removeFromSelection = (playerToDelete) =>{
    // console.log("Player to be removed: ",playerName)
    const indexTodelete = selectedPlayers.findIndex(player => player.name === playerToDelete.name);

    selectedPlayers.splice(indexTodelete,1);
    const updatedSelection = [...selectedPlayers]
    setSelectedPlayers(updatedSelection);

    //adding the value back to the total available balance
    setAvailableBalance(availableBalance + playerToDelete.market_value);
  }
  

  return (
    <div className=''>
     
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto mt-5'>

        <h1 className='text-3xl font-bold mb-4 md:mb-0 mt-8 md:mt-0'>{active === true ? "Available Players" : `Selected Players (${selectedPlayers.length}/6) `}</h1>

        <div className='flex'>

          <button onClick={() => setActive(true)} className={`p-4 border border-gray-200 border-r-0 ${active === true ? "bg-[#E7FE29]" : "bg-[#ffffff]"} rounded-l-2xl text-lg font-bold cursor-pointer`}>Available</button>

          <button onClick={() => setActive(false)} className={`p-4 border border-gray-200 border-l-0 ${active === false ? "bg-[#E7FE29]" : "bg-[#ffffff]"} rounded-r-2xl text-black text-lg font-bold cursor-pointer`}>Selected <span>{`(${selectedPlayers.length})`}</span></button>

        </div>
      </div>
      
      <div className='text-center'>
        {
          active === true ? <Suspense fallback={<span className="loading loading-spinner text-info mt-7"></span>}>
          <AvailablePlayers playersPromise={playersPromise} handleSelection={handleSelection} selectedPlayers={selectedPlayers}></AvailablePlayers>
        </Suspense> : <SelectedPlayers selectedPlayers={selectedPlayers} removeFromSelection={removeFromSelection}></SelectedPlayers>
        }
        
        <button className='btn btn-base mb-6'><a href="#header">Back to Top ↥</a></button>
      </div>
      <Footer></Footer>
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />
    </div>
  )
}

export default App
