const mainTech = [
  {
    name: "Html5",
    icon: "/technology-icons/html5.svg",
    alt: "Html5 Logo",
    white_bg: false,
  },
  {
    name: "CSS3",
    icon: "/technology-icons/CSS3.svg",
    alt: "CSS3 Logo",
    white_bg: false,
  },
  {
    name: "Tailwind CSS",
    icon: "/technology-icons/Tailwind_CSS.svg",
    alt: "Tailwind CSS Logo",
    white_bg: false,
  },
  {
    name: "JavaScript",
    icon: "/technology-icons/JavaScript.svg",
    alt: "JavaScript Logo",
    white_bg: false,
  },
  {
    name: "TypeScript",
    icon: "/technology-icons/Typescript.svg",
    alt: "TypeScript Logo",
    white_bg: false,
  },
  {
    name: "React",
    icon: "/technology-icons/React.svg",
    alt: "React Logo",
    white_bg: false,
  },
  {
    name: "Next.js",
    icon: "/technology-icons/next_logo.svg",
    alt: "Next.js Logo",
    white_bg: false,
  },
  {
    name: "React Native",
    icon: "/technology-icons/React.svg",
    alt: "React Native Logo",
    white_bg: false,
  },
  {
    name: "Expo",
    icon: "/technology-icons/expo-a.svg",
    alt: "Expo Logo",
    white_bg: true,
  },
];
const familiarTech = [
  {
    name: "Vite",
    icon: "/technology-icons/Vite.js.svg",
    alt: "Vite Logo",
    white_bg: false,
  },
  {
    name: "tRPC",
    icon: "/technology-icons/tRPC.svg",
    alt: "tRPC Logo",
    white_bg: false,
  },
  {
    name: "Prisma",
    icon: "/technology-icons/Prisma-LightSymbol.svg",
    alt: "Prisma Logo",
    white_bg: false,
  },
  {
    name: "NextAuth.js",
    icon: "/technology-icons/nextAuthLogo.png",
    alt: "NextAuth.js Logo",
    white_bg: false,
  },
  {
    name: "GraphQL",
    icon: "/technology-icons/GraphQL_Logo_(Rhodamine).png",
    alt: "GraphQL Logo",
    white_bg: false,
  },
  {
    name: "Hasura",
    icon: "/technology-icons/Hasura_id8f6CP8HR_8.png",
    alt: "Hasura Logo",
    white_bg: false,
  },
  {
    name: "SQL",
    icon: "/technology-icons/sql-server-icon-png-11368.png",
    alt: "SQL Logo",
    white_bg: false,
  },
  {
    name: "MySQL",
    icon: "/technology-icons/mysql.png",
    alt: "MySQL Logo",
    white_bg: false,
  },
  {
    name: "MongoDB",
    icon: "/technology-icons/Mongodb.svg",
    alt: "MongoDB Logo",
    white_bg: false,
  },
  {
    name: "Express.js",
    icon: "/technology-icons/expressjs_logo_icon_169185.svg",
    alt: "Express.js Logo",
    white_bg: true,
  },
];

export default function Technologies() {
  return (
    <div className="text-center">
      <div>
        <h3 className="text-3xl sm:text-2xl">Main</h3>
        <p className="text-left text-xl sm:text-lg">The technologies I am proficient in</p>
        <ul className="flex flex-wrap justify-center gap-8 mt-8">
          {mainTech.map((technology) => {
            return (
              <li
                key={technology.name}
                className="flex flex-col items-center justify-center w-[calc(33.333333%-21.333333px)] sm:w-[calc(25%-24px)] md:w-[calc(20%-25.6px)] text-center"
              >
                <img
                  src={technology.icon}
                  alt={technology.alt}
                  className={`aspect-square w-full max-w-[120px] object-contain ${
                    technology.white_bg ? "bg-white p-2 rounded" : ""
                  }`}
                />
                <p className="max-sm:text-lg">{technology.name}</p>
              </li>
            );
          })}
        </ul>
        <h3 className="text-2xl mt-8">Familiar with</h3>
        <p className="text-left text-lg">The technologies I am familiar with</p>
        <ul className="flex flex-wrap justify-center gap-8 mt-8">
          {familiarTech.map((technology) => {
            return (
              <li
                key={technology.name}
                className="flex flex-col items-center justify-center w-[calc(33.333333%-21.333333px)] sm:w-[calc(25%-24px)] md:w-[calc(20%-25.6px)] text-center"
              >
                <img
                  src={technology.icon}
                  alt={technology.alt}
                  className={`aspect-square w-full max-w-[120px] object-contain ${
                    technology.white_bg ? "bg-white p-2 rounded" : ""
                  }`}
                />
                <p>{technology.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
