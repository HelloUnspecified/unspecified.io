export default {
  name: "speakingEvent",
  title: "Speaking Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "givenAt",
      title: "When Given",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
