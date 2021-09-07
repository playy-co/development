import React from "react";
import blogPost from "../../schemas/blog.post";
import CircleMaskedImage from "./CircleMaskedImage";

import css from "./BlogPostImageSquare.module.css";

export const blogPostImageSquareLayout = {
  name: "blogPostImage",
  title: "Blog post (square)",
  // Start defining the form editors will fill to change the final image
  fields: [
    ...(blogPost?.fields || [])
      .filter((field) => field.name !== "ogImage")
      .map((field) => {
        if (field.name === "image") {
          return {
            ...field,
            unsupportedError:
              "We get this image automatically from the chosen main post image. Close this dialog and change it in the document to reflect it here.",
          };
        }
        return field;
      }),
  ],
  prepare: (document) => {
    return {
      title: document.title,
      alphabet: document.alphabet,
      number: document.number,
      image: document.image,
    };
  },
  dimensions: {
    width: 1080,
    height: 1080,
  },
  component: ({ title, alphabet = "Missing", number = 1, image }) => {
    /* @TODO: format number */
    const formattedNum = number;
    console.log({ css });
    return (
      <div className={css.root}>
        <div className={css.logo}>Playy©</div>

        <div className={css.maskWrapper}>
          <h1 className={css.title}>
            {alphabet[0]}/{formattedNum}
          </h1>
          <img src="https://picsum.photos/500/800" className={css.maskImage} />
          <img src="/static/post-image-mask.png" className={css.mask} />
        </div>
        <p>
          {alphabet} {formattedNum}
          <div>{title}</div>
        </p>
      </div>
    );
  },
};
