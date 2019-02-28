import React from "react";
import "../css/TabPage.css";
import DashTab from "./Dashtab";
import InventoryTab from "./InventoryTab";
import LeadsTab from "./LeadsTab";
import CustomerTab from "./GraphCards/CustomerTab";

const TabPage = props => {
  switch (props.activeTab) {
    case 1:
      return <DashTab />;
    case 2:
      return <InventoryTab />;
    case 3:
      return <LeadsTab />;
    case 4:
      return <CustomerTab />;
    case 5:
      return <p>5</p>;
    default:
      return <p>error try reloading</p>;
  }
};

export default TabPage;
