export default {
  name: "person",
  title: "Person",
  fieldsets: [{ name: "social", title: "Social media handles" }],
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "title",
      title: "Title",
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
    {
      name: "bio",
      title: "Bio",
      type: "markdown",
      options: {
        minRows: 20,
      },
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: "jobExperience" }],
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "education" }],
    },
    {
      name: "speaking",
      title: "Speaking",
      type: "array",
      of: [{ type: "speaking" }],
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
    {
      name: "listingOrder",
      title: "Listing Order",
      type: "number",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string",
      fieldset: "social",
    },
    {
      name: "github",
      title: "Github",
      type: "string",
      fieldset: "social",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
      fieldset: "social",
    },
    {
      name: "linkedIn",
      title: "LinkedIn",
      type: "string",
      fieldset: "social",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "string",
      fieldset: "social",
    },
    {
      name: "profileImages",
      title: "Profile Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
