import ProjectCard from "@/components/home/ProjectCard";
import Skills from "@/components/home/Skills";
import { Button } from "@/components/ui/button";
import { email } from "@/constants";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container relative">
      <div className="max-w-7xl lg:mx-6 p-6 md:px-4 xl:px-0 w-full my-12 flex flex-col justify-center gap-8 md:gap-12">
        <div className="py-12 min-h-[540px]">
          <div id="about">
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h2 className="text-xl pl-32 pt-20 gap-8">Sobre mi</h2>
                <p className="flex flex-col px-8 max-w-[680px] text-justify">
                  ¡Hola! Soy Cristian Bernal, estudiante de ingenieria en
                  Software y Redes apasionado por la creación de soluciones
                  tecnológicas innovadoras. Mi enfoque se centra en el
                  desarrollo web, con especial atención en la implementación de
                  controladores eficientes y el manejo efectivo de errores, para
                  la resolución ágil de problemas y busco continuamente mejorar
                  la eficiencia y robustez de los sistemas que desarrollo.{" "}
                </p>
                <div className="pl-[102px] pt-6">
                  <a href={"/documents/AngelBernalCV.pdf"} download>
                    <Button variant="outline">Descargar CV</Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center pt-20 px-20">
                <Image
                  src={"/assets/images/avatarProfilePicture.png"}
                  height={185}
                  width={185}
                  alt="profilepic"
                  className="min-w-[18vh] object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 min-h-[350px]">
          <div>
            <h2 className="flex justify-center text-lg">Habilidades</h2>
            <Skills />
            <p></p>
          </div>
        </div>
        <div id="projects">
          <div className="flex justify-center w-full py-4 md:py-10 md:pb-8 xl:py-18 xl:pb-16">
            <div className="flex flex-col items-center gap-10">
              <span className="pt-12 text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-200">
                Proyectos
              </span>
              <ProjectCard />
            </div>
          </div>
        </div>
        <div id="contact">
          <div className="flex justify-center min-h-[280px] flex-col items-center">
            <h2 className="pt-16 pb-4 text-xl">Contacto</h2>
              <p className="text-md">
                Correo:
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
