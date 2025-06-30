import Image from "next/image";
import Hero from "./Components/Hero";
import CardsN from "./Components/CardsN";

const cards = [
  {
    id: 1,
    name: "hello",
    subName: "SubName",
    description: ["Description", "Hello"],
    imageUrl: "/My_Pic.jpg",
    imageAlt: "Alttext",
    imageSize: 100,
    website: "/contact",
  },
  {
    id: 1,
    name: "hello",
    subName: "SubName",
    description: ["Description", "Hello"],
    imageUrl: "/Flexability.png",
    imageAlt: "Alttext",
    imageSize: 100,
    website: "/contact",
  },
  {
    id: 1,
    name: "hello",
    subName: "SubName",
    description: ["Description", "Hello"],
    imageUrl: "/Logo_ce.png",
    imageAlt: "Alttext",
    imageSize: 90,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <section>
        {/* Hero Section */}
        <Hero
          title="CE  206"
          tagline="One number, many forms."
          ctas={[{ label: "Contact Us", href: "/Contact" }]}
          itemformat="text-(--primary) bg-(--surface) border border-(--border) hover:text-(--primary-hover)"
          imageSrc="/Logo9.png"
          imageSize={500}
          imageAlt="Picture of Logo, a hexa-devided star."
        />
      </section>
      <section>

</section>
    </main>
  );
}
