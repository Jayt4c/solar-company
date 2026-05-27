// public/assets/data/menu.tsx

export interface SubmenuItem {
  id: string;
  title: string;
  url: string;
}

export interface MenuItem {
  id: string;
  title: string;
  url?: string;
  submenus?: SubmenuItem[];
}

export const menu: MenuItem[] = [
  {
    id: "1",
    title: "Home",
    url: "/", // Points directly to homepage, bypassing dropdown logic entirely
  },
  {
    id: "2",
    title: "About Us",
    url: "/about",
  },
  {
    id: "3",
    title: "Services",
    url: "/services",
      // {
      //   id: "3.2",
      //   title: "Service Details",
      //   url: "/service-details",
      // },
  },
  {
    id: "4",
    title: "Projects",
    url: "/projects",
    // submenus: [
    //   {
    //     id: "4.1",
    //     title: "Projects",
    //     url: "/projects",
    //   },
    //   {
    //     id: "4.2",
    //     title: "Project Details",
    //     url: "/project-details",
    //   },
    // ],
  },
  {
    id: "5",
    title: "Blogs",
    submenus: [
      {
        id: "5.1",
        title: "Blogs",
        url: "/blogs",
      },
      {
        id: "5.2",
        title: "Blog Details",
        url: "/blog-details",
      },
    ],
  },
  {
    id: "6",
    title: "FAQs",
    url: "/faq",
  },
  {
    id: "7",
    title: "Contact",
    url: "/contact",
  },
];