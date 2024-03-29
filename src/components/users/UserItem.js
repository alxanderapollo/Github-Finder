import React from "react";

import {Link} from "react-router-dom"
//import prop types for user item
import PropTypes from "prop-types";
//destructering the props instead of having this --->const {login,avatar_Url,html_url} = props.user;
// we can do the below instead
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //states are basically objects, and require a constructor to be initialized
  // state = {
  //     id:'id',
  //     login: 'mojombo',
  //     avatar_Url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //     html_url: 'https://github.com/mojombo/'
  // }

  //to get rid of using this key word, we can destructre the object
  // so that we can use specific attributes
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;
