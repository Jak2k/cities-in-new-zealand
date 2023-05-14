import { ReactNode } from "react";

export default function Slide({
  children,
  picture,
}: {
  children: ReactNode;
  picture?: string;
}) {
  return (
    <div
      className="slide"
      style={
        picture
          ? {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              margin: "2em",
            }
          : {}
      }
    >
      <div>{children}</div>
      {picture && (
        <div
          style={{
            width: "50%",
            height: "50%",
            backgroundImage: `url(${picture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "1em",
          }}
        ></div>
      )}
    </div>
  );
}
