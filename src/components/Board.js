import React from 'react'
import Rows from './Rows'

function Board(props){
  var rows=[];
  for(var i=5;i>=0;i--){
    rows.push(<Rows key = {i} row = {i} cells = {props.cells[i]} handleClick = {props.handleClick} />);
  }
  return(
    <div>
    {rows}
    </div>
  )
}

export default Board;
