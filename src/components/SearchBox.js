import React, { Component } from "react";
import logo from "../assets/logo-star-wars.png";
import SearchResults from "./SearchResults";

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: null,
      results: null
    };
  }

  handleChange = e => {
    console.log("Name", e.target.name);
    console.log("Value", e.target.value);
    this.setState({
      searchText: e.target.value
    });
  };

  handleClick = () => {
    // DO THE FECTCH
    //
    console.log("TEXT TO BE SEARCHED --->", this.state.searchText);

    fetch(`https://swapi.co/api/people/?search=${this.state.searchText}`)
      .then(response => response.json())
      .then(data =>
        this.setState({ results: data }, () => {
          console.log("LOCAL STATE -->", this.state);
        })
      );
  };

  render() {
    const ShowTable =
      this.state.results !== null ? (
        <SearchResults data={this.state.results} />
      ) : null;

    return (
      <div>
        <div>
          <img src={logo} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px"
          }}
        >
          <div style={{ marginRight: 15 }}>
            <input
              className="form-control input-md"
              type="text"
              id="search"
              placeholder="character..."
              name="Search"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button
              type="button"
              onClick={this.handleClick}
              className="btn btn-primary"
            >
              Search
            </button>
          </div>
        </div>

        <div style={{ marginTop: 15 }}>{ShowTable}</div>

        <div style={{ display: "flex", justifyContent: "center"}}>
          <div>
            <button
              type="button"
              className="btn btn-primary"
            >
              Prev
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
