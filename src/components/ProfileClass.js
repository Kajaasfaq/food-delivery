import React from "react"

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    componentDidMount(){
        // the best place to make an api calls 
    }
    
    render() {
        const {count} = this.state;
        return (
            <>
               <h1> form class components name:{this.props.name}</h1>
               <h1 onClick={() => { this.setState({
                    count : 1,
               });
               }}>counts : {count}</h1>
            </>
        )
    }
}

export default Profile