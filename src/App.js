import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {
  // state = {
  //   sailors: [
  //     {
  //       name: "Usagi Tsukino",
  //       id: 0
  //     },
  //     {
  //       name: "Ami Mizuno",
  //       id: 1
  //     },
  //     {
  //       name: "Rei Hino",
  //       id: 2
  //     },
  //     {
  //       name: "Makoto Kino",
  //       id: 3
  //     },
  //     {
  //       name: "Minako Aino",
  //       id: 4
  //     },
  //     {
  //       name: "Haruka Tenō",
  //       id: 5
  //     },
  //     {
  //       name: "Michiru Kaiō",
  //       id: 6
  //     },
  //     {
  //       name: "Hotaru Tomoe",
  //       id: 7
  //     },
  //     {
  //       name: "Setsuna Meiō",
  //       id: 8
  //     },
  //     {
  //       name: "Mamoru Chiba",
  //       id: 9
  //     },
  //     {
  //       name: "Seiya Kō",
  //       id: 10
  //     },
  //     {
  //       name: "Taiki Kō",
  //       id: 11
  //     },
  //     {
  //       name: "Yaten Kō",
  //       id: 12
  //     }
  //   ],

  // };
  state = {
    users: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  handleSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const { users, searchField } = this.state;

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Robot users</h1>
        <SearchBox
          placeholder="search users"
          handleChange={this.handleSearchChange}
        />
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
