import "../App.css";
export default function RenderComponent({
  component,
  prependText,
  input,
  reference,
}) {
  console.log(reference);
  return (
    <div className="commandDisplay" ref={reference}>
      <p>
        {prependText}
        {input}
        {component}
      </p>
    </div>
  );
}
