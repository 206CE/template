import Cards from "../Components/Cards";

const customers = [
  {
    id: 1,
    name: "Aurora Group South Africa",
    title: "AuroraTax",
    imageUrl: "/logo1.png",
    description: "Tax & Finance Consultants",
    website: "https://www.auroratax.co.za",
  },
  {
    id: 2,
    name: "Per-Gratiam",
    title: "Recovery & Wellness",
    imageUrl: "/logo2.png",
    description: "Counceling & Crisis Management",
    website: "https://www.pergratiam.co.za",
  },{
    id: 3,
    name: "Play2Heal",
    title: "Recovery & Wellness",
    imageUrl: "/logo3.jpg",
    description: "Child Therapists",
    website: "https://www.pergratiam.co.za",
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
        <Cards customers={customers} />
      </section>
    </div>
  );
}
