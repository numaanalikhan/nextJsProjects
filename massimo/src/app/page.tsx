import Feature from "@/components/Feature";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Slider/>
      <Feature/>
      <Offer/>
    </div>
  );
}
