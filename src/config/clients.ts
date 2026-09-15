/**
 * People and companies we've worked with (community work through re/Human).
 * Add a `quote` to any person and it renders as a testimonial automatically.
 */
export interface Person {
  name: string;
  company: string;
  img: string;
  quote?: string;
  role?: string;
}

export const PEOPLE: Person[] = [
  {
    name: "Dominick DeStasio",
    company: "ForceBuilders",
    img: "/assets/img/clients/dominick-destasio.jpg",
  },
  {
    name: "Ashley Athena Abboushi",
    company: "The A-List Global",
    img: "/assets/img/clients/ashley-abboushi.jpg",
  },
  {
    name: "Angela Isherwood",
    company: "Olive and Atlas Travel",
    img: "/assets/img/clients/angela-isherwood.jpg",
  },
  {
    name: "Troy Migut",
    company: "Geneva Autobody",
    img: "/assets/img/clients/troy-migut.jpg",
  },
  {
    name: "Rachel LaMantia",
    company: "Masterpiece Bookkeeping",
    img: "/assets/img/clients/rachel-lamantia.jpg",
  },
  {
    name: "Josh Gertz",
    company: "ForceBuilders",
    img: "/assets/img/clients/josh-gertz.jpg",
  },
  {
    name: "Fernanda Migut",
    company: "Chicam Studios",
    img: "/assets/img/clients/fernanda-migut.jpg",
  },
];

export const COMPANIES: string[] = [
  "THAT Conference",
  "ForceBuilders",
  "The A-List Global",
  "Olive and Atlas Travel",
  "Geneva Autobody",
  "Masterpiece Bookkeeping",
  "Chicam Studios",
];
