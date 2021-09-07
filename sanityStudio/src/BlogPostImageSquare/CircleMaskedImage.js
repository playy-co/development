import React from "react";

const CircleMaskedImage = ({ image, backgroundColor }) => {
  if (!image) {
    return null;
  }
  return (
    <div
      style={{
        position: "relative",
        width: "65%",
        height: "65%",
        margin: "96px auto 90px",
        overflow: 'hidden',
      }}
    >
      <img
        src="https://picsum.photos/500/800"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          objectFit: "cover",
        }}
      />
      <img
        src="/static/post-image-mask.png"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          objectFit: "cover",
        }}
      />
      {/* <svg
        style={{
          position: "relative",
          zIndex: 2,
          display: "block",
        }}
        viewBox="0 0 573 574"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M573 0H0v574h573V0zM326.8 42a40 40 0 11-80 0 40 40 0 0180 0zm81 72a40 40 0 100-80 40 40 0 000 80zm-144 66a40 40 0 11-80 0 40 40 0 0180 0zm125 0a40 40 0 11-80 0 40 40 0 0180 0zm19 146a40 40 0 100-80 40 40 0 000 80zm-22 66a40 40 0 11-80 0 40 40 0 0180 0zm-162 40a40 40 0 100-80 40 40 0 000 80zm-19-146a40 40 0 11-80 0 40 40 0 0180 0zm261-100.5a40 40 0 1069.7-39.3 40 40 0 00-69.7 39.3zm85.8 137.6a40 40 0 11-39.3-69.6 40 40 0 0139.3 69.6zm-86 67a40 40 0 1069.3 39.8 40 40 0 00-69.4-39.9zm-74.8 143.8a40 40 0 1140-69.3 40 40 0 01-40 69.3zM285.2 494a40 40 0 10-.7 80 40 40 0 00.7-80zm-162 5.7a40 40 0 1180 .6 40 40 0 01-80-.6zm-15.5-108.5a40 40 0 10-69.3 40 40 40 0 0069.3-40zm-87-136.8a40 40 0 1140 69.3 40 40 0 01-40-69.3zm88-72.3a40 40 0 10-68.7-41 40 40 0 0068.7 41zm77-142.7a40 40 0 11-41 68.7 40 40 0 0141-68.7z"
          fill={backgroundColor}
        />
      </svg> */}
    </div>
  );
};

export default CircleMaskedImage;
