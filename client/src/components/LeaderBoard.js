import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rank from './Rank'
import { API_ROOT } from '../../src/apiRoot'

const LeaderBoard = () => {

  const [board, setBoard] = useState([]);

  useEffect(() => {
    async function getBoard() {
      let data = await axios.get(`${API_ROOT}/api/user_points`)
      if (data) {
        setBoard(cleanUpResponse(data.data.data))
      }
    }
    getBoard();
  }, [setBoard]);

  function cleanUpResponse(data) {
    return Object.entries(data).sort((a,b) => b[1]-a[1])
  }


  return (
    <div>
      <h4>Leader Board!</h4>
      {board.map(position => <Rank key={position} rank={board.indexOf(position)} position={position}/>)}
    </div>
  )
}

export default LeaderBoard;