export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "companyUrl",
      title: "Company URL",
      type: "url",
    },
    {
      name: "quote",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
