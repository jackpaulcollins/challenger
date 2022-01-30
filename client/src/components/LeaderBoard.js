import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rank from './Rank'

const LeaderBoard = () => {

  const [board, setBoard] = useState([]);

  useEffect(() => {
    getBoard();
  }, []);

  async function getBoard() {
    let data = await axios.get(`http://localhost:3001/api/user_points`)
    if (data) {
      setBoard(cleanUpResponse(data.data.data))
    }
  }

  function cleanUpResponse(data) {
    return Object.entries(data).sort((a,b) => b[1]-a[1])
  }


  return (
    <div>
      <h1>Leader Board!</h1>
      {board.map(position => <Rank key={position} rank={board.indexOf(position)} position={position}/>)}
    </div>
  )
}

export default LeaderBoard;