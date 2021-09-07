import React from 'react'

import DefaultSource from "part:@sanity/form-builder/input/image/asset-source-default";
import { MediaEditor } from "sanity-plugin-asset-source-ogimage";
import { blogPostImageSquareLayout } from "../src/BlogPostImageSquare/BlogPostImageSquare";

export default {
  name: "blog.post",
  title: "Blog post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alphabet",
      title: "Alphabet / section",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "number",
      title: "Post number in alphabet",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Main post image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ogImage",
      title: "Image for sharing in social media",
      type: "image",
      options: {
        sources: [
          DefaultSource,
          {
            name: "sharing-image",
            title: "Generate sharing image",
            component: (props) => (
              <MediaEditor
                // It's vital to forward props to MediaEditor
                {...props}
                // Our custom layouts
                layouts={[blogPostImageSquareLayout]}
                // See dialog section below
                dialog={{
                  title: "Create sharing image",
                }}
              />
            ),
            icon: () => <div>🎨</div>,
          },
        ],
      },
    },
  ],
};
