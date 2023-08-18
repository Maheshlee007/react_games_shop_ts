import { MouseEvent } from "react";

function Message() {
  // console.log("hi");
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1 className="text-primary">Hello World</h1>;
      <ul className="list-group pointer">
        {["lorem10", "jsfvksdjv", "Dsdffdsbvf"].map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Message;
