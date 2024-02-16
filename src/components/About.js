import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      {/* <User name={"This is Functional Component!"} /> */}
      <UserClass name={"This is Class Component!"} location={"Hyderabad Class"} />
    </div>
  );
};

export default About;
