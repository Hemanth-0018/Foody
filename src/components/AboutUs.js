import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <div>
            LoggedIn User
            <UserContext.Consumer>
                {({loggedInUser})=>{
                    <h1 className=" font-bold">{loggedInUser}</h1>
                }}
            </UserContext.Consumer>
        </div>
        <User />
        <UserClass name={"Hemanth"} location={"Visakhapatnam"} />
      </div>
    );
  }
}

export default AboutUs;