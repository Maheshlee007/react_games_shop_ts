import { Children, MouseEvent, ReactNode } from "react";

import { useState } from "react";

interface Props {
  children: string | ReactNode;
  alert: boolean;
  onAlert: () => void;
}

function Message({ children, alert, onAlert }: Props) {
  // console.log(children);

  return (
    <>
      <h1 className="text-primary">Hello World</h1>;
      {alert && (
        <div
          className="alert alert-danger alert-dismissible fade show container m-2"
          role="alert"
        >
          {children}
          <button
            className="btn-close"
            onClick={onAlert}
            data-bs-dismiss="alert-dismissible"
          />
        </div>
      )}
      <button className="btn btn-primary" onClick={onAlert}>
        {alert ? "close alert" : "show alert"}
      </button>
    </>
  );
}

export default Message;
