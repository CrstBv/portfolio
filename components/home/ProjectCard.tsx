import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ProjectCard = () => {
  const t = useTranslations();

  const projectsData = [
    {
      title: "Cosmic Blog App",
      description: t("projects-section.description-BlogApp"),
      image: "/assets/images/blogApp.png",
      href: "https://blog-app-snowy-mu.vercel.app/?page=1",
      technologies: [
        {
          name: "mongodb",
          image: "/assets/icons/mongodb.svg",
        },
        {
          name: "next",
          image: "/assets/icons/nextdotjs.svg",
        },
        {
          name: "react",
          image: "/assets/icons/react.svg",
        },
        {
          name: "typescript",
          image: "/assets/icons/typescript.svg",
        },
        {
          name: "clerk",
          image: "/assets/icons/clerk.svg",
        },
        {
          name: "tailwindcss",
          image: "/assets/icons/tailwindcss.svg",
        },
      ],
      soucerCode: [
        {
          href: "https://github.com/CrstBv/blog-app/tree/main",
        },
      ],
    },
    {
      title: "To Do App",
      description: t("projects-section.description-ToDoApp"),
      image: "/assets/images/toDoApp.png",
      href: "https://github.com/CrstBv/To-DoApp",
      technologies: [
        {
          name: "mongodb",
          image: "/assets/icons/mongodb.svg",
        },
        {
          name: "express",
          image: "/assets/icons/express.svg",
        },
        {
          name: "react",
          image: "/assets/icons/react.svg",
        },
        {
          name: "typescript",
          image: "/assets/icons/typescript.svg",
        },
      ],
    },
    {
      title: "E-commerce API",
      description: t("projects-section.description-eCommerceApi"),
      image: "/assets/images/eCommerceApi.png",
      href: "https://github.com/CrstBv/e-commerceApi",
      technologies: [
        {
          name: "node",
          image: "/assets/icons/nodedotjs.svg",
        },
        {
          name: "express",
          image: "/assets/icons/express.svg",
        },
        {
          name: "typescript",
          image: "/assets/icons/typescript.svg",
        },
      ],
    },
    {
      title: t("projects-section.title-OSPF"),
      description: t("projects-section.description-LAN"),
      image: "/assets/images/lanospf.png",
      href: "/assets/images/lanospf.png",
      technologies: [
        {
          name: "cisco",
          image: "/assets/icons/cisco.svg",
        },
      ],
    },
    {
      title: t("projects-section.title-OSPF-ACL"),
      description: t("projects-section.description-LAN-ACL"),
      image: "/assets/images/lanospfacl.png",
      href: "/assets/images/lanospfacl.png",
      technologies: [
        {
          name: "cisco",
          image: "/assets/icons/cisco.svg",
        },
      ],
    },
  ];

  return (
    <div
      className="group relative flex items-center min-h-[680px] w-full flex-col rounded-2xl md:min-h-[370px]"
    >
      <ul className="grid w-full grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:gap-10">
        {projectsData.map((project) => {
          return (
            <li key={project.title}>
              <Card className="flex min-h-[550px] flex-col gap-3 p-1 md:gap-4">
                <a
                  href={project.href}
                  className="flex justify-center flex-row min-h-48"
                >
                  <CardHeader>
                    <Image
                      src={project.image}
                      width={300}
                      height={250}
                      alt="image"
                      className="w-full h-fit"
                      priority
                    />
                    <CardTitle className="flex justify-center pt-3 hover:underline hover:underline-offset-1 hover:text-blue-400">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                </a>
                <ul>
                  {project.soucerCode?.map((source, index) => (
                    <li key={index} className="flex justify-center">
                      <a href={source.href} className="text-blue-400">
                        <span>source code</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <CardFooter className="flex min-h-[295px] flex-col gap-3 p-3 md:gap-4">
                  <p className="w-full text-[14px] text-justify">{project.description}</p>
                  <ul className="flex justify-center flex-row">
                    {project.technologies?.map((tech) => (
                      <li key={tech.name} className="px-1 pt-2">
                        <Image
                          src={tech.image}
                          width={25}
                          height={25}
                          alt="technology"
                          className="bg-white rounded-lg flex items-center"
                        />
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectCard;
