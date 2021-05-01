import "../App.css";
import { useEffect, useRef } from "react";
export default function RenderComponent({
  component,
  prependText,
  input,
  scroll,
}) {
  const scrollRef = useRef();
  useEffect(() => {
    if (scrollRef.current !== undefined)
      scrollRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
  }, []);

  return (
    <div className="commandDisplay" ref={scroll ? scrollRef : null}>
      <p>
        {prependText}
        {input}
        {component}
      </p>
    </div>
  );
}
