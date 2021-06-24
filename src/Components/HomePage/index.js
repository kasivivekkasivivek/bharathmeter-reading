import "./index.css";
import PageHeader from "../PageHeader";
import DigitalBill from "../DigitalBill";
import { Component } from "react";

class HomePage extends Component {
  state = {
    filter: "",
    userDetails: [
      {
        connectionType: "LT-CAT1",
        consumerAddress: "7- MARUTI NGR",
        consumerAddress1: "MARUTI NAGAR (SUL)",
        consumerName: "A Ramu",
        meterNo: "19275561",
        phase: "1",
        prevReadingDate: "2021-06-07",
        section: "247-CHAMPAPET",
        serviceNumber: "211600479",
        uidNo: "102492091",
        enrolled: "yes",
      },
      {
        connectionType: "LT-CAT1",
        consumerAddress: "8- MARUTI NGR",
        consumerAddress1: "MARUTI NAGAR (SUL)",
        consumerName: "B laxman",
        meterNo: "18275561",
        phase: "1",
        prevReadingDate: "2021-06-08",
        section: "247-CHAMPAPET",
        serviceNumber: "211600489",
        uidNo: "102492291",
        enrolled: "No",
      },
    ],
  };

  handleOnChange = (event) => {
    this.setState({ filter: event.target.value });
  };
  renderSearchComponents = () => {
    return (
      <div className="search-container">
        <input
          type="search"
          className="search-bar"
          onChange={this.handleOnChange}
        />
      </div>
    );
  };
  render() {
    const { filter, userDetails } = this.state;
    const lowerCasedFilter = filter.toLowerCase();
    const filteredData = userDetails.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(lowerCasedFilter)
      );
    });
    return (
      <div className="app-homePage-container">
        <PageHeader />
        {this.renderSearchComponents()}
        <DigitalBill userDetails={filteredData} />
      </div>
    );
  }
}

export default HomePage;
