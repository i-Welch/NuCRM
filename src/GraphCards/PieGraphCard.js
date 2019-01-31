import React from 'react';
import {PieChart,Pie,Cell} from 'recharts';
import './GraphCard.css'

const PieGraphCard = (props) => (
    <div className="graphcard">
        <PieChart width={300} height={300}>
            <Pie 
            data={props.data} 
            cx="50%"
            cy="50%" 
            innerRadius={50} 
            outerRadius={120} 
            fill="#82ca9d" 
            animationDuration={1000} 
            animationBegin={50}
            animationEasing={"ease"}
            paddingAngle={1}
            >
            {
            props.data.filter(obj => obj.value > 0).map((entry, index, color) => <Cell fill={entry.color}></Cell>)
            }
            </Pie>
       </PieChart>
       <div className='label'>
       {props.data.filter(obj => obj.value > 0).map((entry) => 
       (<div className='p'>
            <p className='labels'>{entry.name}</p> 
            <div style={{background : entry.color, height: '.5em', width: '.5em', marginTop: '.4em', marginLeft: 'auto'}}></div></div>))}
       </div>
    </div>
);

export default PieGraphCard;