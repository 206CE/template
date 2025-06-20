import Team from "../Components/Team";

const team = [
{
      name: "Jaco Botha",
      role: "Chief Excecutive Officer",
      bio: "7+ years teaching, 7+ years IT experience",
      imageUrl: "/Jaco_Botha.jpg"
    }];


export default function About() {
  return (
    <div>
      <section>
        <Team team={team}/>
      </section>
      <main>
        <h2>Our Story</h2>
        <p>
          Our team consists of experts in various fields, working together to
          achieve excellence in every project we undertake.
        </p>
      </main>
    </div>
  );
}
