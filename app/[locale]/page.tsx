import ProjectCard from "@/components/home/ProjectCard";
import Skills from "@/components/home/Skills";
import { Button } from "@/components/ui/button";
import { email } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function Home() {
  const t = useTranslations()
  return (
    <div className="container relative">
      <div className="max-w-7xl lg:mx-6 p-6 md:px-4 xl:px-0 w-full my-12 flex flex-col justify-center gap-8 md:gap-12">
        <div className="py-12 min-h-[540px]">
          <div id="about">
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h2 className="text-xl pl-32 pt-20 gap-8">{t("about-section.title")}</h2>
                <p className="flex flex-col px-8 max-w-[680px] text-justify">
                  {t("about-section.description")}{" "}
                </p>
                <div className="pl-[102px] pt-6">
                  <a href={t("about-section.href-CV")} download>
                    <Button variant="outline">{t("about-section.DownloadButton")}</Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center pt-20 px-20">
                <Image
                  src={"/assets/images/avatarProfilePicture.png"}
                  height={185}
                  width={185}
                  alt="profilepic"
                  className="min-w-[18vh] h-fit object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 min-h-[350px]">
          <div>
            <h2 className="flex justify-center text-lg">{t("skills-section.title")}</h2>
            <Skills />
            <p></p>
          </div>
        </div>
        <div id="projects">
          <div className="flex justify-center w-full py-4 md:py-10 md:pb-8 xl:py-18 xl:pb-16">
            <div className="flex flex-col items-center gap-10">
              <span className="pt-12 text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-200">
              {t("projects-section.title")}
              </span>
              <ProjectCard />
            </div>
          </div>
        </div>
        <div id="contact">
          <div className="flex justify-center min-h-[280px] flex-col items-center">
            <h2 className="pt-16 pb-4 text-xl">{t("contact-section.title")}</h2>
              <p className="text-md">
                {t("contact-section.email")}
                <a className="pl-2 hover:text-blue-400" href={`mailto:${email}`}>
                  {email}
                </a>
              </p>
              <a
                href="https://github.com/CrstBv"
                className="flex items-center text-blue-200"
              >
                <Image
                  src={"/assets/icons/github.svg"}
                  width={20}
                  height={20}
                  alt="contact"
                  className="bg-blue-100"
                />
                Github
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
