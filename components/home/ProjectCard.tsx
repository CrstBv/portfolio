import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/constants";

const ProjectCard = () => {
  return (
    <div
      className="group relative flex min-h-[300px] w-full flex-col overflow-hidden rounded-2xl 
    shadow-lg transition-all hover:shadow-xl md:min-h-[414x]"
    >
      <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 xl:gap-10">
        {projectsData.map((project) => {
        return (
          <li key={project.title} className="">
            <Card className="flex min-h-[230px] flex-col gap-3 p-1 md:gap-4">
              <Link
                href={project.href}
                className="flex justify-center flex-row min-h-48"
              >
                <CardHeader>
                    <Image
                      src={project.image}
                      width={640}
                      height={380}
                      alt="image"
                      className="w-[310px] h-fit"
                      priority
                    />
                    <CardTitle className="flex justify-center pt-3 hover:underline hover:underline-offset-1 hover:text-blue-400">
                      {project.title}
                  </CardTitle>
                </CardHeader>
                </Link>
                <CardFooter  className="flex min-h-[230px] flex-col gap-3 p-3 md:gap-4">
                  <p className="w-full text-[15px]">{project.descrition}</p>
                  <ul className="flex justify-center flex-row">
                    {project.technologies?.map((tech) => (
                      <li key={tech.name} className="px-1">
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
