import PortfolioShell from "@/components/PortfolioShell";
import CinemaAnimation from "@/components/CinemaAnimation";

export default function Home() {
  return (
    <PortfolioShell>
      <div>
        <main className=" w-full relative">
          <div className="absolute w-full h-full inset-0 z-0"></div>
          <CinemaAnimation />
        </main>
      </div>
    </PortfolioShell>
  );
}
