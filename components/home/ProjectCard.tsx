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
      <ul className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3 xl:gap-10">
        {projectsData.map((project) => {
        return (
          <li key={project.title} className="">
            <Card className="flex min-h-[230px] flex-col gap-3 p-6 md:gap-4">
              <Link
                href={project.href}
                className="flex justify-center flex-grow min-h-48"
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
                    <CardTitle className="flex justify-center hover:underline hover:underline-offset-1 hover:text-blue-400">
                      {project.title}
                  </CardTitle>
                </CardHeader>
                </Link>
                <CardFooter  className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
                  <p className="w-full">{project.descrition}Technologies</p>
                  <p className="flex flex-row">Technologies</p>
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
