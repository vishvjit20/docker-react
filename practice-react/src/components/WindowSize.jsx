import useWindow from "../hooks/use-window";

const WindowSize = () => {
  const { width, height } = useWindow();
  return (
    <div>
      <div>Window width : {width}</div>
      <div>Window height : {height}</div>
    </div>
  );
};

export default WindowSize;
