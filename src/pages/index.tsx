import Activity from "@/components/Activity";
import { Discover } from "@/components/Discover";
import { Mentor } from "@/components/Mentor";
import Slideshow from "@/components/SlideShow";

export default function Home() {
  return (
    <main>
      <Slideshow />
      <Activity />
      <Discover />
      <Mentor />
    </main>
  );
}