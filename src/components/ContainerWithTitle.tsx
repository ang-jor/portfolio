import React from "react";

export interface ContainerProps {
  content: string | React.ReactElement;
  title: string;
}

const Container = (props: ContainerProps) => {
  return (
    <div className="container-with-title">
      <h2>{props.title}</h2>
      {typeof props.content === "string" ? (
        <p>{props.content}</p>
      ) : (
        props.content
      )}
    </div>
  );
};

export default Container;
