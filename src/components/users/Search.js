import React, { Component } from "react";
import PropTypes from "prop-types";
export class Search extends Component {
  //this state will hold the text, that will be inputted by the user
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  //updates our piece of state that was entered inside of the search box
  //key interpolation
  //since name is a feild in the form, it takes name
  //and makes it = text, we can use name as key and it will equal the text
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //---> what we want to do is pass up this.state.text up to the app component
  //so that it can be used as a search param with the github api

  //for when the user submits
  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text);

    if (this.state.text === '')
      //alert message - and type warning which could be danger, success or red
      this.props.setAlert("Please enter something", "light");
    else {
      //function to pass up the query to app component
      this.props.searchUsers(this.state.text);
      //wipe the state with the the current query
      this.setState({ text: "" });
    }
  };

  render() {
    // deconstruct the props
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
        {/* showClear is prop that is passed as a bool, if its true, then render the button */}
        {/* otherwise dont render this is passed from the app component class */}
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
