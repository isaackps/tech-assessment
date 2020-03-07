import React from 'react';

const movieTiles = (props) => {
  // const synopsisShort = { __html: props.synopsisShort };
  // const synopsis = { __html: props.synopsis };

  return (
    <div className="tile">
      <div className="title">{ props.title }</div>
      <div className="image">{ props.image }</div>
      {/* <div className="year">{ props.year }</div> */}
      {/* <div className="genre">{ props.genre }</div> */}
      { /* <div dangerouslySetInnerHTML={ synopsis } /> */ }
      {/* <div className="synopsisShort" dangerouslySetInnerHTML={ synopsisShort } 
      /> */}
    </div>
  );
};


export default movieTiles;
