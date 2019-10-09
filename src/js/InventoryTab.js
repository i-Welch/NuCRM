import React, { Component } from "react";
import PieGraphCard from "./GraphCards/PieGraphCard.js";
import "../css/InventoryTab.css";
import HbarChart from "./GraphCards/hBarChartCard.js";
import GenericSheets from "./GraphCards/GenericSheets";

const data02 = [
  { name: "Acura", Sales: 300, color: "#9E999F" },
  { name: "Aston Martin", Sales: 300, color: "#156E48" },
  { name: "Audi", Sales: 300, color: "#E21D38" },
  { name: "Bentley", Sales: 300, color: "#DBE4EB" },
  { name: "BMW", Sales: 300, color: "#009ADA" },
  { name: "Bugatti", Sales: 300, color: "#BE0030" },
  { name: "Buick", Sales: 300, color: "#9A9A9A" },
  { name: "Cadillac", Sales: 300, color: "#97140C" },
  { name: "Chevrolet", Sales: 300, color: "#D1AD57" }
];

class InventoryTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: 1,
      data: [
        {
          id: 0,
          Stock: "45252236",
          Year: "15",
          Make: "Chevrolet",
          Model: "Cruze",
          Trim: "LT",
          VIN: 20906748,
          Age: 2,
          WebPrice: 5000,
          LotPrice: 5000
        },
        {
          id: 1,
          Stock: "45252236",
          Year: "15",
          Make: "Chevrolet",
          Model: "Cruze",
          Trim: "LT",
          VIN: 20906748,
          Age: 2,
          WebPrice: 5000,
          LotPrice: 5000
        },
        {
          id: 2,
          Stock: "45252236",
          Year: "15",
          Make: "Chevrolet",
          Model: "Cruze",
          Trim: "LT",
          VIN: 20906748,
          Age: 2,
          WebPrice: 5000,
          LotPrice: 5000
        },
        {
          id: 3,
          Stock: "45252236",
          Year: "15",
          Make: "Chevrolet",
          Model: "Cruze",
          Trim: "LT",
          VIN: 20906748,
          Age: 2,
          WebPrice: 5000,
          LotPrice: 5000
        },
        {
          id: 4,
          Stock: "45252236",
          Year: "15",
          Make: "Chevrolet",
          Model: "Cruze",
          Trim: "LT",
          VIN: 20906748,
          Age: 2,
          WebPrice: 5000,
          LotPrice: 5000
        },
        {
          id: 5,
          Stock: "45252236",
          Year: "15",
          Make: "Chevrolet",
          Model: "Cruze",
          Trim: "LT",
          VIN: 20906748,
          Age: 2,
          WebPrice: 5000,
          LotPrice: 5000
        }
      ]
    };
  }
  handleSave(obj) {
    let temp = this.state.data.slice(0);
    temp[this.state.data.findIndex(o => o.id === obj.id)] = obj;
    this.setState({ data: temp, editing: null });
  }
  handleAdd(obj) {
    if (!(this.state.data.findIndex(entry => entry.id === obj.id) !== -1)) {
      let temp = this.state.data.slice(0);
      temp.push(obj);
      this.setState({ data: temp, editing: null });
    } else {
      alert("No Duplicate Entries");
    }
  }
  render() {
    return (
      <div>
        <div className="invtab">
          <PieGraphCard data={data02} />
          <PieGraphCard data={data02} />
          <HbarChart data={data02} />
          <PieGraphCard data={data02} />
          <HbarChart data={data02} />
          <PieGraphCard data={data02} />
          <HbarChart data={data02} />
        </div>
        <GenericSheets
          rows={this.state.data}
          editing={this.state.editing}
          handleSave={obj => this.handleSave(obj)}
          handleEdit={num => this.setState({ editing: num })}
          handleDel={num =>
            this.setState({
              data: this.state.data.filter(obj => obj.id !== num)
            })
          }
          handleAdd={obj => this.handleAdd(obj)}
        />
      </div>
    );
  }
}

export default InventoryTab;
