const FIELDS = [
  {
    name: "video",
    title: "Video",
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
    options: {
      accept: ".mp4",
    },
  },
  {
    name: "m4a",
    title: "m4a",
    options: {
      accept: ".m4a",
    },
  },
]

export default {
  name: "testSchema",
  title: "testSchema",
  type: "document",
  fields: [
    {
      name: 's3',
      title: 'Stored in S3',
      type: 'object',
      fields: FIELDS.map(field => ({
        ...field,
        type: 's3-dam.media'
      }))
    },
    {
      name: 'firebase',
      title: 'Stored in Firebase',
      type: 'object',
      fields: FIELDS.map(field => ({
        ...field,
        type: 'firebase-dam.media'
      }))
    },
  ],
};
