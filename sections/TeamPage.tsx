const members = [
  {
    name: "Benedicto Merales Jr.",
    role: "Lead Data Analyst",
    image: "/troyplaceholder.png",
  },
  {
    name: "Kim Therese Bosoboso",
    role: "Data Analyst | Social Media Manager",
    image: "/kimplaceholder.png",
  },
  {
    name: "Jerahmeel Lim",
    role: "Data Analyst | Business Relations",
    image: "/jerahmeelplaceholder.png",
  },
  {
    name: "Gabrielle Anne Bongon",
    role: "Data Analyst",
    image: "/gabplaceholder.png",
  },
  {
    name: "Arwin Delasan",
    role: "Vibe Coder",
    image: "/arwinplaceholder.png",
  },
];

const TeamPage = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center px-20 py-20"
      id="team"
    >
      <h1 className="text-4xl font-bold">Meet Our Team</h1>
      <p className="text-gray-600">
        Our team of experts is dedicated to providing the best solutions for
        your data needs.
      </p>
      <div className="flex justify-center items-center flex-1 w-full  ">
        <div className="flex md:flex-row flex-col justify-evenly w-full">
          {members.slice(0, 6).map((member) => (
            <div
              key={member.name}
              className="w-full md:w-1/4 p-4 h-80 flex flex-col justify-center "
            >
              <div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto rounded-full w-48 h-48 object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold mt-8 text-center">
                {member.name}
              </h2>
              <p className="text-gray-600 text-xs text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
