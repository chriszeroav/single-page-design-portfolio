import { FC } from "react";
import { Button } from "@/components/ui";
import Image from "next/image";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="p-5">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Image src="/logo.svg" width={48} height={48} alt="Logo" />
        <Button className="h-11 max-w-[176px] w-full rounded-full">
          Free Consultation
        </Button>
      </div>
    </header>
  );
};
