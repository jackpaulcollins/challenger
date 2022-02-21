import React from 'react';

const Rank = props => {
  return (
    <div className="rank">
      {(props.rank + 1) + ".) " + props.position[0] + ", current points: " + props.position[1]}
    </div>
  )
}

export default Rank;