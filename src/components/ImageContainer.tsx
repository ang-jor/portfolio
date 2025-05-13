import React from "react";

export interface ContainerProps {
  content: React.ReactElement;
}

const Container = (props: ContainerProps) => {
  return <div className="img-container">{props.content}</div>;
};

export default Container;
