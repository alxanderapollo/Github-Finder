import "./App.css";
//going to be used to make click links render in a new tab
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import axios from "axios";
import React, { Fragment } from "react";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
//1. once the form is submitted it calls onSubmit() in the component
//.2 onsubmit calls on a prop function called search users (inside of the app Component) and passes in the text
//3. app js calls the functions search users which is inside of the app js
//4. finally that is what is console outputting our value

class App extends React.Component {
  state = {
    users: [], //stores all the users that come back from res.date --> axios
    user: {}, //for individual user
    loading: false, //loading will be to tell the user when the data is coming in, so will be using a spinner in place that says "loading..," until the data comes in
    alert: null,
    repos: [], //users repos
  };

  //life cycle method
  //good for loading data - runs when the component mounts
  //in this case since will be making a http request right when the app loads
  //this life cycle will fire up the second our component renders and "mounts" on the screen
  //which is what we want
  //promise
  // async componentDidMount() {
  //   //the first thing will do is get a loading to appear while the data isn't fetched
  //   //since we are updating a state object
  //   //the way to do that is with this.setState
  //   this.setState({ loading: true });

  //   //original users
  //   // const res = await axios.get(
  //   //   `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   // );
  //   // //want to put the users that come back from res.data into our state
  //   // //within this app component

  //   // //now that we have all our data and the data is no lo nger loading
  //   // //using setState, reset the loading to false, and fill the users array with the data
  //   // this.setState({ users: res.data, loading: false });
  //   // console.log(res.data)
  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });

    //update endpoint to include text -  q=${text}& diffrent from the above
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //want to put the users that come back from res.data into our state
    //within this app component

    //now that we have all our data and the data is no lo nger loading
    //using setState, reset the loading to false, and fill the users array with the data

    //what will need will exist in res.data.items rather than res.data because the end point is diffrent
    this.setState({ users: res.data.items, loading: false });
    // console.log(text)
  };

  //get users repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`    );
    this.setState({ repos: res.data, loading: false });
  };

  //Clear users from state
  //empties the array of passed users and resets loading to false
  clearUsers = () => this.setState({ users: [], loading: false });

  //setting setAlert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    //time out the alert otherwise it will stick to the screen indefinitly
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //get user github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };
  render() {
    //destructure state
    const { users, user, loading, repos } = this.state;
    return (
      <Router>
        <div>
          {/* passing title as a prop and custom icon*/}
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            {/* routes are wrapped around a switch so that it shows one at a time */}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    {/* adding props so it can pass values back up rather than down, AKA prop drilling */}
                    {/* Clear users is also being sent up from search into app */}
                    {/* Want to conditionally render the clear button, only if there are users on the screen otherwise not, */}
                    {/* show Clear is conditonal prop passed that checks for that */}
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              {/* sinlge component that will route to the about page */}
              <Route exact path="/about" component={About} />
              <Route
                exact
                path={"/user/:login"}
                render={(props) => (
                  <User
                    {...props}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
