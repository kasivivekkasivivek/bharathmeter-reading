import "./index.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Component } from "react";

class DigitalBill extends Component {
  getColor = (value) => {
    if (value === "yes") {
      return "green";
    } else {
      return "red";
    }
  };
  render() {
    const { userDetails } = this.props;
    console.log(userDetails);
    return (
      <div className="digital-bill-page">
        <div className="tables-data">
          <Table className="table-ele">
            <Thead className="thread-head">
              <Tr className="table-header-row">
                <Th>consumer Name</Th>
                <Th>Service Number</Th>
                <Th>USC Number</Th>
                <Th>Meter Number</Th>
                <Th>Section</Th>
                <Th>Enrolled</Th>
              </Tr>
            </Thead>
            {userDetails.map((eachUser) => {
              const statusColor = this.getColor(eachUser.enrolled);
              return (
                <Tbody>
                  <Tr className="table-data-row">
                    <Td className="tables-date">{eachUser.consumerName}</Td>
                    <Td className="tables-date">{eachUser.serviceNumber}</Td>
                    <Td className="tables-date">{eachUser.uidNo}</Td>
                    <Td className="tables-date">{eachUser.meterNo}</Td>
                    <Td className="tables-date">{eachUser.section}</Td>
                    <Td className={`tables-date ${statusColor}`}>
                      {eachUser.enrolled}
                    </Td>
                  </Tr>
                </Tbody>
              );
            })}
          </Table>
        </div>
      </div>
    );
  }
}

export default DigitalBill;
