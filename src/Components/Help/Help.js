import "./Help.css";

export default function Help() {
  return (
    <div>
      <p>All of the accessible commands</p>
      <div className="helpHolder">
        <p className="helpCommandName">Profile:</p>
        <p className="helpCommandDesc">
          Get a list of links to access my profile
        </p>
      </div>
      <div className="helpHolder">
        <p className="helpCommandName">Education:</p>
        <p className="helpCommandDesc">Get my educational History</p>
      </div>
      <div className="helpHolder">
        <p className="helpCommandName">Clear or Clrscr:</p>
        <p className="helpCommandDesc">Clear Screen</p>
      </div>
      <div className="helpHolder">
        <p className="helpCommandName">Echo [string]:</p>
        <p className="helpCommandDesc">Prints the string in a new line</p>
      </div>
    </div>
  );
}
