import React from "react";

export interface ContainerProps {
  content: string | React.ReactElement;
}

const Container = (props: ContainerProps) => {
  return (
    <div className="container">
      {typeof props.content === "string" ? (
        <p>{props.content}</p>
      ) : (
        props.content
      )}
    </div>
  );
};

export default Container;
