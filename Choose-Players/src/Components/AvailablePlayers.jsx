import {use} from 'react'
import PlayerCard from './PlayerCard';



const AvailablePlayers = ({playersPromise,handleSelection,selectedPlayers}) => { 
    const players = use(playersPromise);

    // console.log(players);
    
    return (
        <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mb-14'>
            {
                players.map(player => {
                    /* to determine if a player is already selected, if true, the button will get disabled in the PlayerCard component, it is passed there as prop */
                    const selected = selectedPlayers.some(p => p.name === player.name); //true/false

                    /* checking if this 'player' exists in the 'selectedPlayer' array, if true, 'selected' will be 'true' for this player and then button will be impact accordingly in the PlayerCard component*/

                    return <PlayerCard key={player.name} player={player} handleSelection={handleSelection} selected={selected}></PlayerCard>
                })
            }
        </div>
    );
};

export default AvailablePlayers;