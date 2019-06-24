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
          <td>{person.name}</td>
          <td>{person.birth_year}</td>
          <td>{person.height}</td>
          <td>{person.mass}</td>
        </tr>
      );
    });

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th> 
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>{People}</tbody>
      </table>

    );
    
  }

}

export default SearchResuts;
