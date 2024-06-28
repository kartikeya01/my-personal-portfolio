import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
function helloWorld() {
  console.log("Hello");
}
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-2-7xl w-ful">
        <FloatingNavbar
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
      </div>
    </main>
  );
}
