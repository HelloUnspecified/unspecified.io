export default {
  name: "speaking",
  title: "Speaking",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "events",
      title: "Events Presented At",
      type: "array",
      of: [{ type: "speakingEvent" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
