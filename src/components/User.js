import { useState } from "react";
const User = (props) => {

    // User = ({name`}) - i can destructe in the way to access props as well...
    const [count] = useState("0")
    const [count2] = useState("1")
    return (
        <div className="user-card">
            <h2>count is=={count}</h2>
            <h2>count2 is=={count2}</h2>
            <h1>Name: {props.name}</h1>
            <h2>Location: Hyderabad</h2>
            <h3>Contact: @turito.com</h3>
            <h4>This is Functional Component</h4>
        </div>
    );
}

export default User;