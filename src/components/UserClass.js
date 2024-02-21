import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            // name: props.name
            count: 0,
            // count2: 2,
            userInfo: {
                name: "Dummy User",
                location: "Default"
            }
        };
        console.log("Child Constructor")
    }

    async componentDidMount() {
        console.log("Child Mounted")
        const usersData = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await usersData.json()

        this.setState({
            userInfo: json
        })

        console.log(json);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate called")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount called")
    }
    render() {

        // const { count, count2 } = this.state;
        // const { name, location } = this.props;
        console.log("Child Render....")
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h2>Count :  {this.state.count}</h2> */}
                {/* <h2>Count :  {count}</h2> */}
                {/* <button onClick={() => {
                    // this.state.count = this.state.count + 1;     Never UPDATE state variable directly.
                    // this.setState({ count: this.state.count + 1 });
                    //this object will contain the updated value of the state variable.

                }}>Count Increase</button> */}
                {/* <h2>Count2 :  {count2}</h2> */}
                {/* <h1>Name: {name}</h1> */}
                <img src={avatar_url} />
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>

                <h3>Contact: @turito.com</h3>
                <h4>This is Class Based Component</h4>
            </div>
        );
    }
}
export default UserClass