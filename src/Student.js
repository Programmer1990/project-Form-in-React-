
 
import React from "react"
export default class Student extends React.Component{
    render()
    {
    return( 
        <div>Hello {this.props.name}
        <h3>{this.props.email}</h3>
        
        
        </div>
    )


    }
}
    