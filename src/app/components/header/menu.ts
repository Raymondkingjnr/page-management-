interface NavLinkType {
  id: number;
  name: string;
  route: string;
  children?: {
    name: string;
    route: string;
  }[];
}

export const nav_links: NavLinkType[] = [
  {
    id: 1,
    name: "about us",
    route: "#",
    children: [
      {
        name: "our team",
        route: "/our-team",
      },
      {
        name: "our company",
        route: "/our-company",
      },
      {
        name: "careers",
        route: "/career",
      },
    ],
  },
  {
    id: 2,
    name: "our products",
    route: "#",
    children: [
      {
        name: "foreign currency investment",
        route: "/#",
      },
      {
        name: "mutual funds (coming soon)",
        route: "/#",
      },
    ],
  },
  {
    id: 3,
    name: "our services",
    route: "#",
    children: [
      {
        name: "financial planning & advisory",
        route: "/#",
      },
      {
        name: "family office managment",
        route: "/#",
      },
      {
        name: "portifolio management",
        route: "/#",
      },
      {
        name: "institutional asset managment",
        route: "/#",
      },
    ],
  },
  // {
  //   id: 4,
  //   name: "contact us",
  //   route: "/contact-us",
  // },
];
