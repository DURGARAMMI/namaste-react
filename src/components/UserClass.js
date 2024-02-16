import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            // name: props.name
            count: 0,
            // count2: 2,
        };
    }
    render() {
        const { count, count2 } = this.state;
        const { name, location } = this.props;
        return (
            <div className="user-card">
                {/* <h2>Count :  {this.state.count}</h2> */}
                <h2>Count :  {count}</h2>
                {/* <h2>Count2 :  {count2}</h2> */}
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h3>Contact: @turito.com</h3>
                <h4>This is Class Based Component</h4>
            </div>
        );
    }
}
export default UserClass