import Image from "next/image";
import heroImage from "@/public/images/annur-hero.png";

export default function HeroImageBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#07070a]">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        className="object-contain object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07070a] via-[#07070a]/60 to-transparent" />
    </div>
  );
}
