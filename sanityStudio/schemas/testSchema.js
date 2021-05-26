export default {
  name: "testSchema",
  title: "testSchema",
  type: "document",
  fields: [
    {
      name: "video",
      title: "Video",
      type: "firebase.media",
      options: {
        accept: "video/*",
        storeOriginalFilename: true,
      },
    },
    {
      name: "audio",
      title: "audio",
      description:
        "Doesn't store filename when uploading. Has a custom validation function that will error out to test validation.",
      type: "firebase.media",
      options: {
        accept: "audio/*",
        storeOriginalFilename: false,
      },
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value) {
            return "Invalid!";
          }
          return true;
        }).warning(),
    },
    {
      name: "mp4",
      title: "mp4",
      type: "firebase.media",
      options: {
        accept: ".mp4",
      },
    },
    {
      name: "m4a",
      title: "m4a",
      type: "firebase.media",
      options: {
        accept: ".m4a",
      },
    },
  ],
};
