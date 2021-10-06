import React from "react"

class  UserItem extends React.Component {
    //states are basically objects, and require a constructor to be initialized
    state = {
        id:'id',
        login: 'mojombo',
        avatar_Url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo/'
    }
     render() {
         //to get rid of using this key word, we can destructre the object
         // so that we can use specific attributes
         const {login,avatar_Url,html_url} = this.state
        return (
            <div className="card text-center">
              <img src={avatar_Url} alt="" className="round-img" style={{width:'60px'}} />
              <h3>{login}</h3>

              <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
              </div>
            </div>
        );
    }
}


export default UserItem
