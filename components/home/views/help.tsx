import { FC } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib";

interface HelpProps {}

export const Help: FC<HelpProps> = () => {
  return (
    <section className="p-5">
      <div
        className={cn(
          "max-w-7xl mx-auto w-full",
          "flex flex-col gap-6",
          "px-5 py-10 rounded-[10px] text-center",
          "bg-custom-black text-custom-light-cream"
        )}
      >
        <h3 className="text-2xl font-bold">Book a call with me</h3>
        <p className="text-base leading-[26px] font-medium">
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
        <Button
          className="mx-auto h-11 w-44 rounded-full font-bold"
          variant="secondary"
        >
          Free Consultation
        </Button>
      </div>
    </section>
  );
};
