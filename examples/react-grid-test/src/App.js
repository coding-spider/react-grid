import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ReactGrid from "react-grid/build/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Id",
          dataKey: "id"
        },
        {
          name: "First Name",
          dataKey: "first_name"
        },
        {
          name: "Last Name",
          dataKey: "last_name"
        },
        {
          name: "Email",
          dataKey: "email"
        },
        {
          name: "Gender",
          dataKey: "gender"
        },
        {
          name: "IP Address",
          dataKey: "ip_address"
        }
      ],
      data: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: [
          {
            id: 1,
            first_name: "Rowena",
            last_name: "Frankland",
            email: "rfrankland0@yale.edu",
            gender: "Female",
            ip_address: "93.253.12.78"
          },
          {
            id: 2,
            first_name: "Merle",
            last_name: "Cutchie",
            email: "mcutchie1@google.nl",
            gender: "Female",
            ip_address: "150.230.41.146"
          },
          {
            id: 3,
            first_name: "Avictor",
            last_name: "Chantrell",
            email: "achantrell2@ask.com",
            gender: "Male",
            ip_address: "250.19.92.193"
          },
          {
            id: 4,
            first_name: "Way",
            last_name: "Adolf",
            email: "wadolf3@merriam-webster.com",
            gender: "Male",
            ip_address: "51.150.159.19"
          },
          {
            id: 5,
            first_name: "Viviana",
            last_name: "Kinnar",
            email: "vkinnar4@tiny.cc",
            gender: "Female",
            ip_address: "171.161.138.253"
          },
          {
            id: 6,
            first_name: "Joanie",
            last_name: "Gooble",
            email: "jgooble5@ftc.gov",
            gender: "Female",
            ip_address: "203.125.14.8"
          },
          {
            id: 7,
            first_name: "Guendolen",
            last_name: "Semaine",
            email: "gsemaine6@exblog.jp",
            gender: "Female",
            ip_address: "110.6.37.78"
          },
          {
            id: 8,
            first_name: "Boonie",
            last_name: "Ibarra",
            email: "bibarra7@nature.com",
            gender: "Male",
            ip_address: "206.128.222.116"
          },
          {
            id: 9,
            first_name: "Krisha",
            last_name: "Lythgoe",
            email: "klythgoe8@miitbeian.gov.cn",
            gender: "Male",
            ip_address: "52.230.23.104"
          },
          {
            id: 10,
            first_name: "Kristina",
            last_name: "Arnal",
            email: "karnal9@reference.com",
            gender: "Female",
            ip_address: "99.43.125.42"
          }
        ]
      });
    }, 2000);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactGrid data={this.state.data} columns={this.state.columns} />
      </div>
    );
  }
}

export default App;
