import React, { Component } from "react";

export class User extends Component {
  componentDidMount() {
    // login param comes straight from app js /user/:login"
    //passed into getUser
    // then in that function makes a request with the param to get that users information
    //fills the user state with the reponse and then  we're passing  the user state back in to the user component
    // then we should have acces to all fo the users data
    //then we are passing the spinner
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    // all this stuff comes straight from the github api
    const {
      name,
      avatar_Url,
      location,
      bio,
      blog,
      login,
      html_url,
      folowers,
      following,
      public_repos,
      public_gists,
      hireables,
    } = this.props.user;

    const {loading} = this.props;
    return <div>{name}</div>;
  }
}

export default User;
