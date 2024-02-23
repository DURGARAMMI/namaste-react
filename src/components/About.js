import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react"
import ProximityAlert from "./User";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Mounted")
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div className="flex">
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="ml-2">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"This is Functional Component!"} /> */}
        {/* <UserClass name={"This is Class Component!"} location={"Hyderabad Class"} /> */}
        {/* <ProximityAlert coordinates1={{ lat: 18, lng: 79 }} /> */}


        {/* <UserClass name={"This is Class Component!"} location={"Hyderabad Class"} /> */}
        <UserClass name={"This is Class Component!"} location={"Hyderabad Class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User name={"This is Functional Component!"} /> */}
//       <UserClass name={"This is Class Component!"} location={"Hyderabad Class"} />
//     </div>
//   );
// };

export default About;
