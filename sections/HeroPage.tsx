import NavigationBar from "../components/NavigationBar";

const HeroPage = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center" id="hero">
      <NavigationBar />

      <div className="w-2/3 flex-1 pb-15 flex">
        <div className="flex flex-col  text-center md:text-start text-5xl justify-center h-full gap-4 font-semibold w-full md:w-1/2 leading-10 md:leading-none">
          <span>Cleaning.</span>
          <span>Dashboard.</span>
          <span>Insights.</span>
          <span className="text-[#F57375]">Data Analytics</span>
          <span>for you.</span>
        </div>

        <div className="relative w-2/3 h-full md:flex items-center justify-center  hidden ">
          {/* Geometric Lines */}

          <svg
            width="100%"
            height="100%"
            viewBox="0 30 450 243"
            style={{ position: "absolute", bottom: 0, left: 0 }}
          >
            <defs>
              <clipPath id="custom-shape" className="">
                <path d="M0 0 L0 220 L50 240 L70 220 L90 230 L150 195 L210 210 L260 185 L290 190 L450 83 L450 0 Z" />
              </clipPath>
            </defs>
            <image
              href="/landingTable.svg"
              width="100%"
              height="100%"
              clipPath="url(#custom-shape)"
              preserveAspectRatio="xMidYMax slice"
            />
          </svg>

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="25 11 400 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Chart Lines */}
            <path
              d="M25 230 L80 250 L150 200 L250 230 L300 190 L320 175 L350 150 L390 120 L450 80 "
              stroke="black"
              strokeWidth="7"
              fill="none"
            />{" "}
            <path
              d="M430 90 L400 130 "
              stroke="black"
              strokeWidth="6"
              fill="none"
            />{" "}
            <path
              d="M430 90 L385 110 "
              stroke="black"
              strokeWidth="6"
              fill="none"
            />{" "}
            <path
              d="M20 300 L60 250 L80 230 L160 250 L260 190 L320 230  L380 180 L450 200 "
              stroke="black"
              strokeWidth="7"
              fill="none"
            />
            <path
              d="M430 195 L400 197 "
              stroke="black"
              strokeWidth="6"
              fill="none"
            />{" "}
            <path
              d="M430 200 L410 175 "
              stroke="black"
              strokeWidth="6"
              fill="none"
            />{" "}
            {/*
            <path
              d="M10 180 L70 230 L130 210 L190 190 L250 170 L310 150 L370 130"
              stroke="black"
              strokeWidth="6"
              fill="none"
            /> */}
            {/* Data Points - Teal */}
            <circle cx="150" cy="200" r="12" fill="#56F6C1" />
            <circle cx="250" cy="230" r="12" fill="#F57375" />
            <circle cx="80" cy="230" r="10" fill="#56F6C1" />
            <circle cx="160" cy="250" r="12" fill="#F57375" />
            <circle cx="260" cy="190" r="10" fill="#56F6C1" />
            <circle cx="320" cy="230" r="12" fill="#F57375" />
            <circle cx="380" cy="180" r="12" fill="#56F6C1" />
            <circle cx="150" cy="200" r="5" fill="black" />
            <circle cx="250" cy="230" r="5" fill="black" />
            <circle cx="80" cy="230" r="4" fill="black" />
            <circle cx="160" cy="250" r="5" fill="black" />
            <circle cx="260" cy="190" r="4" fill="black" />
            <circle cx="320" cy="230" r="5" fill="black" />
            <circle cx="380" cy="180" r="5" fill="black" />
            {/*  <path d="M0 230 L65 243 L80 230 L100 235 L150 200 L210 218 L260 190 L280 203  L450 70" /> */}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
