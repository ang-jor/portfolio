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
      {props.hasTitle && (
        <h2 className="scribble-title">
          {props.title}
          {/* <svg
            className="scribble-circle"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="100"
              cy="30"
              rx="94"
              ry="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg> */}
          <svg
            className="scribble-overlapping"
            width="876"
            height="512"
            viewBox="0 0 876 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M632.001 59.9511C629.105 59.2273 626.21 58.5034 594.316 57.4066C562.422 56.3099 501.617 54.8621 439.53 59.1834C340.921 66.0465 241.367 85.3387 151.695 128.115C102.062 151.791 60.619 190.625 30.6999 236.749C3.47583 278.719 2.8983 338.434 26.5103 381.171C95.585 506.194 294.757 506.296 412.593 499.413C564.727 490.528 816.757 428.902 862.65 254.967C889.824 151.976 757.545 75.3052 681.684 43.2803C608.03 12.187 524.41 9.5 445.551 9.5"
              stroke="black"
              stroke-width="19"
              stroke-linecap="round"
            />
          </svg>
        </h2>
      )}
      {typeof props.content === "string" ? (
        <p>{props.content}</p>
      ) : (
        props.content
      )}
    </div>
  );
};

export default Container;
