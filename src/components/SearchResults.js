import React, { Component } from "react";

class SearchResuts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    const People = data && data.results.map(person => {
      return (
        <tr key={person.name}>
          <th scope="row">{person.name}</th>
        </tr>
      );
    });

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>{People}</tbody>
      </table>
    );
  }
}

export default SearchResuts;
