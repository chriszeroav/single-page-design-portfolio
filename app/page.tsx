import { About, Help, Projects, Welcome } from "@/components/home";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Welcome />
      <About />
      <Projects />
      <Help />
    </main>
  );
}
