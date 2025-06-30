import Cards from "../Components/CardsN";

const customers = [
  {
    id: 1,
    name: "Aurora Group South Africa",
    subName: "AuroraTax",
    imageUrl: "/logo1.png",
    imageSize: 200,
    description: ["Tax & Finance Consultants"],
    website: "https://www.auroratax.co.za",
  },
  {
    id: 2,
    name: "Per-Gratiam",
    subName: "Recovery & Wellness",
    imageUrl: "/logo2.png",
    imageSize: 200,
    description: ["Counceling & Crisis Management"],
    website: "https://www.pergratiam.co.za",
  },{
    id: 3,
    name: "Play2Heal",
    subName: "Recovery & Wellness",
    imageUrl: "/logo3.jpg",
    imageSize: 200,
    description: ["Child Therapists"],
    website: "https://www.play2heal.co.za",
  }
];

export default function Customers() {
  return (
    <div>
      {/* Testimonials Section */}
      <section>
        <h2>What Our Customers Say</h2>
        <p>
          We value our customers' feedback and strive to improve continuously.
        </p>
        <Cards cards={customers} />
      </section>
    </div>
  );
}
