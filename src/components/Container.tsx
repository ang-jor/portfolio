import React from "react";

export interface ContainerProps {
  content: string | React.ReactElement;
  hasTitle?: boolean;
  hasImage?: boolean;
  title?: string;
  bgColor?: string;
  className?: string;
}

const containerClass = (props: ContainerProps) => {
  if (props.hasTitle) {
    return "container-with-title";
  } else if (props.hasImage) {
    return "img-container";
  }
  return "container";
};

const Container = (props: ContainerProps) => {
  return (
    <div
      className={`${containerClass(props)} ${props.className || ""}`}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.hasTitle && <h2>{props.title}</h2>}
      {typeof props.content === "string" ? (
        <p>{props.content}</p>
      ) : (
        props.content
      )}
    </div>
  );
};

export default Container;
