import React from "react"
//React.component because its class based component rather than a function based one 
export class  Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                {/* creates a github icon with nav bar look at docs  */}
                <i className='fab fa-github'/> {this.props.title}           
                </h1>
            </nav>
        )
    }
    }
export default  Navbar