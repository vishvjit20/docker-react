import { useContext, useMemo, useRef } from "react";
import useIntersectionObserver from "../hooks/use-intersection-observer";
import context from "./ContextAPI";

const IntersectionElement = () => {
  const ref = useRef(null);

  const ctxValues = useContext(context);
  console.log(ctxValues);

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }),
    []
  );

  const intersectionObserverEntry = useIntersectionObserver(ref, options);
  console.log(intersectionObserverEntry?.isIntersecting);
  console.log(intersectionObserverEntry?.intersectionRatio);
  return (
    <div style={{ height: "200vh" }}>
      <div ref={ref} style={{ height: "50vh", background: "lightblue" }}>
        <h2> Intersection Observer</h2>
      </div>
    </div>
  );
};

export default IntersectionElement;
