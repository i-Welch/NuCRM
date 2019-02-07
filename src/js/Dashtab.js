import React, {Component} from 'react';
import '../css/dashtab.css';
import './GraphCards/EmpActivityCard.js'
import EmpActivity from './GraphCards/EmpActivityCard.js';
import NewLeads from './GraphCards/NewLeadCard';

const data = [
    {name: "Jeff", Ups: 5, Calls: 2, Emails: 10, Texts: 4, Tasks: 12, ODueTasks: 3, Sold: 1, LoginTime: "4:50pm"},
    {name: "Jeff", Ups: 5, Calls: 2, Emails: 10, Texts: 4, Tasks: 12, ODueTasks: 3, Sold: 1, LoginTime: "4:50pm"},
    {name: "Jeff", Ups: 5, Calls: 2, Emails: 10, Texts: 4, Tasks: 12, ODueTasks: 3, Sold: 1, LoginTime: "4:50pm"},
    {name: "Jeff", Ups: 5, Calls: 2, Emails: 10, Texts: 4, Tasks: 12, ODueTasks: 3, Sold: 1, LoginTime: "4:50pm"}
]

const data2 = [
    {Time: "5:20",Event: "Email",Customer: "Billy Joe",Rep: "Jeff Morison",Source: "Website"},
    {Time: "5:20",Event: "Email",Customer: "Billy Joe",Rep: "Jeff Morison",Source: "Website"},
    {Time: "5:20",Event: "Email",Customer: "Billy Joe",Rep: "Jeff Morison",Source: "Website"},
    {Time: "5:20",Event: "Email",Customer: "Billy Joe",Rep: "Jeff Morison",Source: "Website"}
]

class DashTab extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div className='dashtab'>
                <div>
                    <EmpActivity rows={data}></EmpActivity>
                </div>
                <div>
                    <NewLeads rows={data2}></NewLeads>
                </div>
            </div>
        );
    }
}

export default DashTab;