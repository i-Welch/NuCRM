import React, {Component} from 'react';
import PieGraphCard from './GraphCards/PieGraphCard.js';
import './InventoryTab.css';

const data02 = [{name: 'Acura',          value: 300,      color: '#9E999F'},
                {name: 'Aston Martin',   value: 300,      color: '#156E48'},
                {name: 'Audi',           value: 300,      color: '#E21D38'},
                {name: 'Bentley',        value: 300,      color: '#DBE4EB'},
                {name: 'BMW',            value: 300,      color: '#009ADA'},
                {name: 'Bugatti',        value: 300,      color: '#BE0030'},
                {name: 'Buick',          value: 300,      color: '#9A9A9A'},
                {name: 'Cadillac',       value: 300,      color: '#97140C'},
                {name: 'Chevrolet',      value: 300,      color: '#D1AD57'},
                {name: 'Chrysler',       value: 300,      color: '#B8B9BD'},
                {name: 'Dodge',          value: 300,      color: '#EF2E24'},
                {name: 'Ferrari',        value: 300,      color: '#FEF200'},
                {name: 'Fiat',           value: 300,      color: '#A70230'},
                {name: 'GM',             value: 300,      color: '#004377'},
                {name: 'GMC',            value: 300,      color: '#0E3E92'},
                {name: 'Honda',          value: 300,      color: '#C9011D'},
                {name: 'Hyundai',        value: 300,      color: '#D81813'},
                {name: 'Infiniti',       value: 300,      color: '#223F81'},
                {name: 'Jaguar',         value: 300,      color: '#A5A5A5'},
                {name: 'Jeep',           value: 300,      color: '#1D3128'},
                {name: 'Kia',            value: 300,      color: '#485F2B'},
                {name: 'Lamborghini',    value: 300,      color: '#C41230'},
                {name: 'Land Rover',     value: 300,      color: '#9A6800'},
                {name: 'Lexus',          value: 300,      color: '#016452'},
                {name: 'Mazda',          value: 300,      color: '#D6DBDD'},
                {name: 'Mclaren',        value: 300,      color: '#0080C5'},
                {name: 'Mercedes',       value: 300,      color: '#EF1C25'},
                {name: 'Nissan',         value: 300,      color: '#FFFFFF'},
                {name: 'Porsche',        value: 300,      color: '#A7002C'},
                {name: 'Rolls Royce',    value: 300,      color: '#00498F'},
                {name: 'Saab',           value: 300,      color: '#00285D'},
                {name: 'Subaru',         value: 300,      color: '#004890'},
                {name: 'Tesla',          value: 300,      color: '#E31937'},
                {name: 'Toyota',         value: 300,      color: '#D90123'},
                {name: 'Volkswagen',     value: 300,      color: '#004181'},
                {name: 'Volvo',          value: 300,      color: '#0D3896'},]

class InventoryTab extends Component{    
    render(){
        return(
            <div className='invtab'>
                <PieGraphCard data={data02}></PieGraphCard>
                <PieGraphCard data={data02}></PieGraphCard>
            </div>
        );
    }
}

export default InventoryTab;