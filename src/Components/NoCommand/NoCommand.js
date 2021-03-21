import "./NoCommand.css";

export default function NoCommand({ commandName }) {
  return (
    <div className="noCommand">
      <p>
        '{commandName}' is not recognized as an internal or external command.
        Type help to get a list of commands available.
      </p>
    </div>
  );
}
