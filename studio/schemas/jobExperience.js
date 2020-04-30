export default {
  name: "jobExperience",
  title: "Job Experience",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "startedAt",
      title: "Started At",
      type: "date",
    },
    {
      name: "endedAt",
      title: "Ended At",
      type: "date",
    },
    {
      name: "currrentPosition",
      title: "Current Position",
      type: "boolean",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "markdown",
      options: {
        minRows: 10,
      },
    },
    {
      name: "volunteer",
      title: "Volunteer?",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "reference", to: { type: "technology" } }],
    },
  ],
  preview: {
    select: {
      title: "companyName",
    },
  },
};
