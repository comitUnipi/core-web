import Activity from "@/components/Activity";
import { Discover } from "@/components/Discover";
import { Mentor } from "@/components/Mentor";
import { Section } from "@/components/Section";
import Slideshow from "@/components/SlideShow";

export default function Home() {
  return (
    <main>
      {/* <Slideshow /> */}
      <Section />
      <Activity />
      <Discover />
      <Mentor />
    </main>
  );
}