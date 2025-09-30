import React from 'react';

const SelectedPlayers = ({selectedPlayers,removeFromSelection}) => {
    const noSelection = <div className='w-[90%] h-[50vh] mx-auto mt-30'>
        <h1 className='text-2xl font-bold text-red-500'>-No Player Has Been Selected. Select Players to See The List Here-</h1>
    </div>

    return (
        <div className='w-[90%] mx-auto flex flex-col items-start mb-10'>
            {
                selectedPlayers.length === 0 ? noSelection : 
                selectedPlayers.map(player =>{
                    return (
                        <div className='flex justify-between items-center w-full mt-6 shadow-sm p-3'>
                            <div className='flex items-center'>
                                <img src={player.img} alt="" className='w-[100px] rounded-2xl' />
                                <div className='flex flex-col items-start ml-4'>
                                    <h1 className="text-xl font-bold">{player.name}</h1>
                                    <p className='mt-2'>{player.position}</p>
                                </div>
                            </div>
                            <div>
                                <span onClick={()=>removeFromSelection(player)} className='text-2xl font-bold cursor-pointer mr-6'>X</span>
                            </div>
                        </div> 
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;