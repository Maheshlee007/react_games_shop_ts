import React, { useState } from "react";

const Expandable = (props: any) => {
  const [expand, setExpand] = useState(10);
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure atque voluptates veniam minima repellendus praesentium a rem quis aliquam ea asperiores illum esse suscipit nisi eius, ex animi ipsa aliquid, sed quasi dolore harum. Odio rem incidunt dicta error ab a consequatur ea iusto doloribus ut voluptatem, earum iste nostrum.";
  return (
    <div>
      <strong>Expandable Text</strong>
      {text.slice(0, expand)}...
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setExpand(expand === 10 ? text.length : 10)}
      >
        {expand === 10 ? "More" : "Less"}
      </button>
    </div>
  );
};

export default Expandable;
