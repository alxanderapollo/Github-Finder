import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    users: [], //stores all the users that come back from res.date --> axios
    loading: false, //loading will be to tell the user when the data is coming in, so will be using a spinner in place that says "loading..," until the data comes in
  };

  //life cycle method
  //good for loading data - runs when the component mounts
  //in this case since will be making a http request right when the app loads
  //this life cycle will fire up the second our component renders and "mounts" on the screen
  //which is what we want
  //promise
  async componentDidMount() {
    //the first thing will do is get a loading to appear while the data isn't fetched
    //since we are updating a state object
    //the way to do that is with this.setState
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //want to put the users that come back from res.data into our state
    //within this app component

    //now that we have all our data and the data is no longer loading
    //using setState, reset the loading to false, and fill the users array with the data
    this.setState({ users: res.data, loading: false });
    // console.log(res.data)
  }
  render() {
    return (
      <div>
        {/* passing title as a prop and custom icon*/}
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
