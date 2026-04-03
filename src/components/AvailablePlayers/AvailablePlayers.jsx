import React, { use } from 'react';
import userImg from "../../assets/Group.png"
import reportImg from "../../assets/report.png"

const AvailablePlayers = ({ playersPromise }) => {

    const playerData = use(playersPromise)
    console.log(playerData)
    return (
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

            {
                playerData.map(player => <div className="card bg-base-100 w-100 shadow-sm p-4">
                    <figure>
                        <img className="w-full"
                            src={player["player-image"]}
                            alt="" />
                    </figure>
                    <div className="mt-3">
                        <div className="flex gap-3">
                            <img src={userImg} alt="" w-12px h-12px />
                            <h2 className="text-xl font-semibold ">{player["player-name"]}</h2>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="flex gap-3">
                                <h2><img src={reportImg} alt="" /></h2>
                                <h2 className="text-"> Country</h2>
                            </div>
                            <button class="btn btn-soft rounded-xl">{player["playing-role"]}</button>

                        </div>
                        <h2 className="text-xl font-bold">Rating</h2>
                        <div className="text-xl  flex justify-between mt-2">
                            <h2 className="font-bold">{player["bating-style"]}</h2>
                            <h2 className="">{player["bowling-style"]}</h2>
                        </div>
                        <div className="flex justify-between mt-2">
                            <h2 className="text-xl font-bold">Price: {player.price}</h2>
                            <button className="btn rounded-xl">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }


            {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img className="w-full"
                        src="https://i.ibb.co.com/9kdrR5RM/download-jpg9.jpg"
                        alt="" />
                </figure>
                <div className="mt-3">
                    <div className="flex gap-3">
                        <img src={userImg} alt="" w-12px h-12px />
                        <h2 className="text-xl font-semibold ">Virat kohli</h2>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex gap-3">
                            <h2><img src={reportImg} alt="" /></h2>
                            <h2 className="text-"> Country</h2>
                        </div>
                        <button class="btn btn-soft rounded-xl">All-Rounder</button>

                    </div>
                    <h2 className="text-xl font-bold">Rating</h2>
                    <div className="text-xl  flex justify-between mt-2">
                        <h2 className="font-bold">Bating-style</h2>
                        <h2 className="">Bowling-style</h2>
                    </div>
                    <div className="flex justify-between mt-2">
                        <h2 className="text-xl font-bold">Price:</h2>
                        <button className="btn rounded-xl">Choose Player</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AvailablePlayers;