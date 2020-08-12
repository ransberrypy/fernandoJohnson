import React, { Component } from 'react'

export class Fernando extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Fernando",
            clicked: false
        }
        this.bringSurname = this.bringSurname.bind(this)
    }

    bringSurname(){
        this.setState({name:"Fernando Johnson", clicked:true})
    }
    render() {
        let styled;
        if (this.state.clicked){
            styled = 'red'
        }else{
            styled = ''
        }
        return (
            <div>
                <h3 style={{backgroundColor:styled}}> {this.state.name}</h3>
                <button onClick={this.bringSurname}>Bring fullname</button>
            </div>
        )
    }
}

export default Fernando
