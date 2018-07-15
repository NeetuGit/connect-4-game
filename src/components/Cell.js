import React from 'react'
import Circle from './Circle'

function Cell(props){
    var style = {
        height:50,
        width:50,
        border:"1px solid black",
        backgroundColor:"#6ae8fc"
    }

    return (
        <div style = {style} onClick = {() => props.handleClick(props.row,props.col)}>
        <Circle cell = {props.cell}/>
    </div>
    )
}

export default Cell;
