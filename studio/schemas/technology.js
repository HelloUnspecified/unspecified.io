export default {
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "displayOnLanding",
      title: "Display on Landing",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
  initialValue: {
    displayOnLanding: true,
  },
};
