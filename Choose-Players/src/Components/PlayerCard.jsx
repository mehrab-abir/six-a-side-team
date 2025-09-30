
const PlayerCard = ({player,handleSelection,selected}) => {

    return (
            <div className='p-4 shadow-2xl rounded-2xl'>
                <img src={player.img} alt="" className='w-full h-64 object-cover'/>
                <div className='flex flex-row items-center mt-4'>
                    <i className="fa-solid fa-user mr-2"></i>
                    <p className='text-xl font-bold text-green-500'>{player.name}</p>
                </div>

                <div className='flex justify-between items-center mt-3'>
                    <p>
                        <i className="fa-solid fa-flag mr-2 text-gray-400"></i>
                        <span>{player.nationality}</span>
                    </p>

                    <button className='btn bg-[white] border border-gray-200 text-black'>{player.position}</button>
                </div>

                <div className='flex justify-between my-3'>
                    <p className='font-bold text-lg'>Age: {player.age}</p>            
                    <p className='text-lg font-bold'>Club: {player.club}</p>            
                </div>          

                <div className='flex justify-between items-center mt-4'>
                    <h3 className='text-lg font-bold'>Market Value: ${player.market_value}</h3>
                    <button disabled={selected} onClick={()=>{
                        handleSelection(player);
                        }} className="btn bg-green-700 [&:disabled]:!bg-green-300 [&:disabled]:!cursor-not-allowed text-white border-none">{selected === true ?"Selected" : "Choose Player"}</button>
                </div>            
                            
            </div>
    );
};

export default PlayerCard;