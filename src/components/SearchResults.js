import React, { Component } from "react";
import Male from "../assets/male@2x.png";
import Female from "../assets/female@2x.png";

class SearchResuts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    const People =
      data &&
      data.results.map(person => {
        return (
          <tr key={person.name}>
            <td>{person.gender === "male" ? <img src = {Male} /> : <img src = {Female} />}</td>
            <td>{person.name}</td>
            <td>{person.birth_year}</td>
            <td>{person.height}</td>
            <td>{person.mass}</td>
          </tr>
        );
      });

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table className="table table-dark text-center col-md-8">
          <thead>
            <tr>
              <th>Gender</th>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Height</th>
              <th>Mass</th>
            </tr>
          </thead>
          <tbody>{People}</tbody>
        </table>
      </div>
    );
  }
}

export default SearchResuts;
