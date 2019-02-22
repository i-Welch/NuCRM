import React, { Component } from "react";
import PieGraphCard from "./GraphCards/PieGraphCard.js";
import "../css/InventoryTab.css";
import HbarChart from "./GraphCards/hBarChartCard.js";
import InventorySheet from "./GraphCards/InvSpreadSheet";

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
          Photo: "(No Photos)",
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
          Photo: "(No Photos)",
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
          Photo: "(No Photos)",
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
          Photo: "(No Photos)",
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
          Photo: "(No Photos)",
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
          Photo: "(No Photos)",
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
        <InventorySheet rows={this.state.data} editing={this.state.editing} />
      </div>
    );
  }
}

export default InventoryTab;
