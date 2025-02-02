import { FC } from "react";
import { Button } from "@/components/ui";
import Image from "next/image";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <section className="p-5">
      <div className="max-w-7xl mx-auto w-full grid gap-10">
        <Image
          className="mx-auto"
          src="/image-amy.webp"
          width={300}
          height={300}
          alt="image-amy"
        />
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-custom-black text-2xl font-bold">
            I’m Amy, and I’d love to work on your next project
          </h2>
          <p className="text-base leading-[26px] text-custom-medium-brown font-medium">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <Button
            className="mx-auto h-11 w-44 rounded-full"
            variant="secondary"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
