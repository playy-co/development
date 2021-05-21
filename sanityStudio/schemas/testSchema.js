export default {
  name: 'testSchema',
  title: 'testSchema',
  type: 'document',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'firebase.media',
      options: {
        accept: 'video/*',
        storeOriginalFilename: true
      }
    },
    {
      name: 'audio',
      title: 'audio',
      description: 'Doesn\'t store filename',
      type: 'firebase.media',
      options: {
        accept: 'audio/*',
        storeOriginalFilename: false
      }
    },
    {
      name: 'mp4',
      title: 'mp4',
      type: 'firebase.media',
      options: {
        accept: '.mp4',
      }
    },
    {
      name: 'm4a',
      title: 'm4a',
      type: 'firebase.media',
      options: {
        accept: '.m4a',
      }
    },
  ],
}