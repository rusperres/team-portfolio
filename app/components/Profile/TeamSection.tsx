import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <TeamCard
        name="Amistad, Harold Shichiya"
        image="/team/black-cat.png"
        positions={["Frontend Developer", "UI/UX Designer", "React"]}
      />

      <TeamCard
        name="Samson, James"
        image="/images/person2.jpg"
        positions={["Backend Developer", "Node.js", "Database"]}
      />

      <TeamCard
        name="Colindres, Jairus Jasper"
        image="/images/person3.jpg"
        positions={["Mobile Dev", "Flutter", "Android"]}
      />

      <TeamCard
        name="Velos, John David"
        image="/images/person4.jpg"
        positions={["Fullstack", "Next.js", "API Design"]}
      />

      {/* Add one more if needed */}
      
    </div>
  );
}