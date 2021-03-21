import "./Echo.css";

export default function Echo({ resultantArray }) {
  var resultantString = "";
  resultantArray.map((child, index) => {
    if (index > 0) {
      resultantString += child + " ";
    }
  });
  return (
    <div className="echoHolder">
      {resultantString.length > 1 && resultantString != " " ? (
        resultantString
      ) : (
        <p className="usage">
          'echo' needs another argument<br></br>Usage : echo [argument]
        </p>
      )}
    </div>
  );
}
