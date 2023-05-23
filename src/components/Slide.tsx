import { ReactNode } from "react";

type Video = {
  type: "youtube";
  id: string;
};

export default function Slide({
  children,
  picture,
  video,
  forceBackgroundImage,
}: {
  children: ReactNode;
  picture?: string;
  video?: Video;
  forceBackgroundImage?: boolean;
}) {
  return (
    <div
      className="slide"
      style={
        picture || video
          ? {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              background:
                (video || forceBackgroundImage) && picture
                  ? `url(${picture})`
                  : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          padding: "1em",
          margin: "1em",
          borderRadius: "1em",
        }}
      >
        {children}
      </div>
      {video && video.type === "youtube" ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            border: "none",
            borderRadius: "1em",
            opacity:
              document.fullscreenElement &&
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              document.fullscreenElement !== document.documentElement
                ? 1
                : 0.5,
            filter:
              document.fullscreenElement &&
              document.fullscreenElement !== document.documentElement
                ? ""
                : "grayscale(80%)",
          }}
        ></iframe>
      ) : (
        picture &&
        !forceBackgroundImage && (
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
        )
      )}
    </div>
  );
}
