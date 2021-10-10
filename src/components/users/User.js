import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from '../repos/Repos'
export class User extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // login param comes straight from app js /user/:login"
    //passed into getUser
    // then in that function makes a request with the param to get that users information
    //fills the user state with the reponse and then  we're passing  the user state back in to the user component
    // then we should have acces to all fo the users data
    //then we are passing the spinner
    this.props.getUser(this.props.match.params.login);

    //getuserRepos
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    // all this stuff comes straight from the github api
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      folowers,
      following,
      public_repos,
      public_gists,
      company,
      hireable,
      followers,
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        {/* not a real button but the styling makes it such */}
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        {/* check box if hireable */}
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        {/* card class with two columns - uses grid system */}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github profile
            </a>

            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
