import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log("constructor");
        this.state={
            count: 0,
            count2: 1
        };
        
    }
    componentDidMount(){
        // console.log("Mounted");
        // it is used for API calls 
    }
    render(){
        const {name,location}=this.props;
        const {count,count2}=this.state;
        // console.log("Render");
        return(
            <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                 this.setState({
                    count:this.state.count+1
                })
            }
               
        }>click to update the count value</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Context: @Hemanth@0018</h4>
        </div>
        )
        
    }
}
export default UserClass;