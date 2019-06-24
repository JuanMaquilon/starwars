import React from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        background: "#000",
        color: "#fff",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100%"
        }}
      >
        <SearchBox/>
      </div>
    </div>
  );
}

export default App;
