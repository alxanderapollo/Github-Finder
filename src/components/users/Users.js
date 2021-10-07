import React, { Component } from "react";
import UserItem from "./UserItem";
class Users extends React.Component {
//   state = {
//     // array of users that will come from the api
//     users: [
//       {
//         id: "1",
//         login: "mojombo",
//         avatar_Url: "https://avatars0.githubusercontent.com/u/1?v=4",
//         html_url: "https://github.com/mojombo/",
//       },
//       {
//         id: "2",
//         login: "defunkt",
//         avatar_Url: "https://avatars0.githubusercontent.com/u/2?v=4",
//         html_url: "https://github.com/defunkt/",
//       },
//       {
//         id: "3",
//         login: "pjhyett",
//         avatar_Url: "https://avatars0.githubusercontent.com/u/3?v=4",
//         html_url: "https://github.com/pjhyett/",
//       },
//     ],
//   };
  render() {
    return (
      <div style={userStyle}>
        {/* want to map through each user in the state array */}
        {/* must have a key in this case we can use ID */}
        {this.props.users.map((user) => (
          // pass in the user id as a key, and the entire user.
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: " repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
