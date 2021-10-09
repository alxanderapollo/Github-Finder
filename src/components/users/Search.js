import React, { Component } from "react";

export class search extends Component {
  //this state will hold the text, that will be inputted by the user
  state = {
    text: "",
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
    console.log(this.state.text);
  };
  
  render() {
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
      </div>
    );
  }
}

export default search;
