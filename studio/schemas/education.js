export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "school",
      title: "School Name",
      type: "string",
    },
    {
      name: "received",
      title: "Degreee/Certification Received",
      type: "string",
    },
    {
      name: "receivedAt",
      title: "Received At",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "school",
    },
  },
};
