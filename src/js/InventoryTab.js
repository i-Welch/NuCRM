import React, {Component} from 'react';
import PieGraphCard from './GraphCards/PieGraphCard.js';
import '../css/InventoryTab.css';
import HbarChart from './GraphCards/hBarChartCard.js';
import InventorySheet from './GraphCards/InvSpreadSheet';

const data02 = [{name: 'Acura',          Sales: 300,      color: '#9E999F'},
                {name: 'Aston Martin',   Sales: 300,      color: '#156E48'},
                {name: 'Audi',           Sales: 300,      color: '#E21D38'},
                {name: 'Bentley',        Sales: 300,      color: '#DBE4EB'},
                {name: 'BMW',            Sales: 300,      color: '#009ADA'},
                {name: 'Bugatti',        Sales: 300,      color: '#BE0030'},
                {name: 'Buick',          Sales: 300,      color: '#9A9A9A'},
                {name: 'Cadillac',       Sales: 300,      color: '#97140C'},
                {name: 'Chevrolet',      Sales: 300,      color: '#D1AD57'}]

const data = [
    {Photo: "(No Photos)", Stock: "45252236", Year: "15", Make: "Chevrolet", Model: "Cruze", Trim: "LT", VIN: 20906748, Age: 2, WebPrice: 5000, LotPrice: 5000},
    {Photo: "(No Photos)", Stock: "45252236", Year: "15", Make: "Chevrolet", Model: "Cruze", Trim: "LT", VIN: 20906748, Age: 2, WebPrice: 5000, LotPrice: 5000},
    {Photo: "(No Photos)", Stock: "45252236", Year: "15", Make: "Chevrolet", Model: "Cruze", Trim: "LT", VIN: 20906748, Age: 2, WebPrice: 5000, LotPrice: 5000},
    {Photo: "(No Photos)", Stock: "45252236", Year: "15", Make: "Chevrolet", Model: "Cruze", Trim: "LT", VIN: 20906748, Age: 2, WebPrice: 5000, LotPrice: 5000},
    {Photo: "(No Photos)", Stock: "45252236", Year: "15", Make: "Chevrolet", Model: "Cruze", Trim: "LT", VIN: 20906748, Age: 2, WebPrice: 5000, LotPrice: 5000},
    {Photo: "(No Photos)", Stock: "45252236", Year: "15", Make: "Chevrolet", Model: "Cruze", Trim: "LT", VIN: 20906748, Age: 2, WebPrice: 5000, LotPrice: 5000}
    
]               

class InventoryTab extends Component{    
    render(){
        return(
            <div>
            <div className='invtab'>
                <PieGraphCard data={data02}></PieGraphCard>
                <PieGraphCard data={data02}></PieGraphCard>
                <HbarChart data={data02}></HbarChart>
                <PieGraphCard data={data02}></PieGraphCard>
                <HbarChart data={data02}></HbarChart>
                <PieGraphCard data={data02}></PieGraphCard>
                <HbarChart data={data02}></HbarChart>
            </div>
            <InventorySheet rows={data}></InventorySheet>
            </div>
        );
    }
}

export default InventoryTab;