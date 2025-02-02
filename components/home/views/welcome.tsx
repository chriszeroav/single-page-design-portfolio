import { FC } from "react";
import { cn } from "@/lib";
import Image from "next/image";

interface WelcomeProps {}

export const Welcome: FC<WelcomeProps> = () => {
  return (
    <section className="p-5">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-custom-black text-4xl font-bold ">
            Design solutions made easy
          </h1>
          <p className="text-custom-medium-brown text-base font-medium">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div
            className={cn(
              "flex flex-col justify-between",
              "aspect-[1/1.06] rounded-lg p-5",
              "bg-custom-galactic-blue col-span-2"
            )}
          >
            <Image
              src="/pattern-graphic-design.svg"
              width={128}
              height={192}
              alt="pattern-graphic-design"
              className="self-end"
            />
            <h2 className="text-white text-2xl font-bold">Graphic Design</h2>
          </div>

          <div
            className={cn(
              "flex flex-col justify-between",
              "aspect-[1/1.06] rounded-lg p-5",
              "bg-custom-summer-yellow"
            )}
          >
            <Image
              src="/pattern-ui-ux.svg"
              width={64}
              height={64}
              alt="pattern-ui-ux"
              className="self-end"
            />
            <h2 className="text-white text-2xl font-bold">UI/UX</h2>
          </div>

          <div
            className={cn(
              "flex flex-col justify-between",
              "aspect-[1/1.06] rounded-lg p-5",
              "bg-custom-pink"
            )}
          >
            <Image
              src="/pattern-apps.svg"
              width={64}
              height={64}
              alt="pattern-apps"
              className="self-end"
            />
            <h2 className="text-white text-2xl font-bold">Apps</h2>
          </div>

          <div
            className={cn(
              "flex flex-col justify-between",
              "aspect-[2.17/1] rounded-lg p-5",
              "bg-custom-light-red col-span-2"
            )}
          >
            <Image
              src="/pattern-illustrations.svg"
              width={128}
              height={64}
              alt="pattern-illustrations"
              className="self-end"
            />
            <h2 className="text-white text-2xl font-bold">Illustrations</h2>
          </div>

          <div
            className={cn(
              "flex flex-col justify-between",
              "aspect-[1.9/1] rounded-lg p-5",
              "bg-custom-cyan col-span-2"
            )}
          >
            <Image
              src="/pattern-photography.svg"
              width={160}
              height={64}
              alt="pattern-photography"
              className="self-end"
            />
            <h2 className="text-white text-2xl font-bold">Photography</h2>
          </div>

          <div
            className={cn(
              "flex flex-col justify-between",
              "aspect-[1.9/1] rounded-lg p-5",
              "bg-custom-dark-purple col-span-2"
            )}
          >
            <Image
              src="/pattern-motion-graphics.svg"
              width={128}
              height={64}
              alt="pattern-motion-graphics"
              className="self-end"
            />
            <h2 className="text-white text-2xl font-bold">Motion Graphics</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
