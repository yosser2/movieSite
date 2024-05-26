import React from 'react';
import'./Film.css';
import Series from './Series';
import movies from './Moviescontainer';


function Films({search}) {

    

    return (
    <div className='Film'style={{ display:'flex',justifyContent:'space-around',flexWrap:'wrap',padding:'35px', justifyContent:'space-between',gap:'10px',backgroundColor:"black",height:"1350px",}}>
    {movies.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase())?true:false).map((p)=> <Series serie ={p}/>)}
    </div>
    )
}


export default Films