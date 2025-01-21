import "../Team.css";

function TeamMemberCard({
  name,
  role,
  image,
  cardBackground = "https://i.pinimg.com/474x/03/c8/46/03c8466c1edbcb11c3e321bcf093be05.jpg",
  department,
}) {
  return (
    <div
      className="team-card"
      style={{ minWidth: "300px", minHeight: "400px" }}
    >
      <div className="card-inner relative group">
        <div className="border-effect rounded-lg overflow-hidden">
          {/* Background Image */}
          <div
            className="card-bg"
            style={{
              backgroundImage: `url(${cardBackground})`,
            }}
          ></div>
          <div className="card-overlay"></div>

          {/* Decorative corners */}
          <div className="ornament absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400 z-10"></div>
          <div className="ornament absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400 z-10"></div>
          <div className="ornament absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400 z-10"></div>
          <div className="ornament absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400 z-10"></div>

          <div className="card-content relative p-6">
            {/* Image container */}
            <div className="image-container mb-4">
              <img
                style={{ objectPosition: "top center" }}
                src={image}
                alt={name}
                draggable={false}
                className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-amber-600"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3
                className="text-2xl font-bold text-amber-400 mb-2 tracking-wide"
                style={{ fontFamily: "Trajan Pro, serif" }}
              >
                {name}
              </h3>
              <div className="role-badge mb-4">
                <span className="inline-block bg-amber-900/50 text-amber-200 px-4 py-2 rounded-full border border-amber-600/30">
                  {role}
                </span>
              </div>
              {department && (
                <p className="text-amber-200/80 text-sm mt-8 tracking-widest font-bold">
                  {department}
                </p>
              )}
              {/* Social Links */}

              {/* {role === "Frontend Developer" && (
                <div className="flex justify-center space-x-4 cursor-pointer">
                  <a
                    href={linkedin}
                    className="text-amber-400 hover:text-amber-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("LinkedIn URL:", linkedin);
                      window.open(linkedin, "_blank");
                    }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={instagram}
                    className="text-amber-400 hover:text-amber-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("LinkedIn URL:", instagram);
                      window.location.href = { instagram };
                    }}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;