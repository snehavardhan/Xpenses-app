import React from "react";
import "../styles.css";

class DisplayItems extends React.Component {
  constructor(props) {
    super(props);
    this.createTable = this.createTable.bind(this);
  }

  createTable = i => {
    return (
      <table className="table" style={{ marginBottom: 0 }}>
        <tbody>
          <tr className="table-active">
            <td>{i.date}</td>
            <td>{i.category}</td>
            <td>{i.description}</td>
            <td>{i.amount}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  render() {
    const xpenseItems = this.props.entries;
    const list = xpenseItems.map(this.createTable);
    return (
      <div>
        <hr />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" className="td-center">
                Date
              </th>
              <th scope="col" className="td-center">
                Category
              </th>
              <th scope="col" className="td-center">
                Description
              </th>
              <th scope="col">Dollars</th>
            </tr>
          </thead>
        </table>
        {list}
      </div>
    );
  }
}

export default DisplayItems;
