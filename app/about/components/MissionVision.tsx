import Image, { type StaticImageData } from "next/image";
import Reveal from "@/app/components/Reveal";
import missionImage from "@/public/images/mission.png";
import visionImage from "@/public/images/vision.png";

type Card = {
  title: string;
  description: string;
  image: StaticImageData;
  direction: "left" | "right";
};

const cards: Card[] = [
  {
    title: "Our Mission",
    description:
      "Our mission is to connect the right people with the right opportunities through a thoughtful, transparent, and dependable recruitment experience.",
    image: missionImage,
    direction: "left",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to shape a future where talent and opportunity come together seamlessly, enabling people and organizations to achieve lasting progress.",
    image: visionImage,
    direction: "right",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-silver pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <Reveal key={card.title} direction={card.direction}>
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-dusk-sky via-dusk-sky/60 to-transparent transition-[height] duration-500 ease-out group-hover:h-full" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-grey sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-0 max-h-0 overflow-hidden text-sm leading-relaxed text-grey opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:max-h-40 group-hover:opacity-100 sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
