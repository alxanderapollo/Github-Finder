import React from "react"
//React.component because its class based component rather than a function based one 
export class  Navbar extends React.Component {
    //default props, the user can set their own props for icon and title
    static defaultProps = {
        icon : "fab fa-github", 
        title: "Github Finder"
    }
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                {/* creates a github icon with nav bar look at docs  */}
                <i className={this.props.icon}/> {this.props.title}           
                </h1>
            </nav>
        )
    }
    }
export default  Navbar