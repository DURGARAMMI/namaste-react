const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold">Contact Us</h1>
      {/* <h2>This is Namaste React Web Series</h2> */}
      <form className="bg-slate-400 p-5 m-5 flex flex-col gap-2 text-white">
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Subject:
          <input type="text" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <button className="flex backdrop-blur-lg bg-slate-950 w-28 rounded-md p-2 text-center justify-center" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

//rafce - automatically generates the component.
