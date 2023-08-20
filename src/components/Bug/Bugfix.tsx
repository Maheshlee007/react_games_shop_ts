import React, { useState } from "react";
import produce from "immer";

const BugFix = () => {
  const bugsobj = [
    { id: 1, status: { stat: false }, name: "Bug1" },
    { id: 2, status: { stat: false }, name: "Bug2" },
    { id: 3, status: { stat: false }, name: "Bug3" },
  ];
  const [bugs, setbugs] = useState(bugsobj);

  const handleBug = () => {
    console.log("bug handle");
    setbugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.status.stat = true;
      })
    );
  };

  return (
    <div>
      <strong>mutating state using Immer 9.0.19</strong>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.name} status {bug.status.stat ? "fixed" : "working on it"}
        </p>
      ))}
      <button className="btn btn-secondary" onClick={handleBug}>
        Click Me
      </button>
    </div>
  );
};

export default BugFix;
