import { Filter } from "react-feather";
import { ImSearch } from "react-icons/im";
import { IoPieChartOutline } from "react-icons/io5";
import { MdOutlineInsights } from "react-icons/md";
import { PiChartLineUpLight } from "react-icons/pi";

const Services = () => {
  return (
    <section
      className="w-full h-auto flex flex-col items-center px-20 py-10 gap-10"
      id="services"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Solutions</h1>
        <p className="text-gray-600">
          Transform your data into actionable insights with our comprehensive
          analytics solutions.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 w-full gap-10 md:gap-8 ">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0  justify-evenly">
          <div className="w-full md:w-1/4 p-4 h-80  rounded-sm relative overflow-hidden bg-gradient-to-b from-[#E7E7E7]/70 to-[#E7E7E7]/100 shadow-sm">
            <Filter className="absolute top-4 left-4" />
            <h2 className="text-lg font-semibold mt-8">
              Data Cleaning and Preparation
            </h2>
            <p className="text-gray-600 text-xs">
              Accurate, consistent, and ready data for meaningful analysis and
              decision-making.
            </p>
            <img
              src="/landingTable.png"
              alt="Data cleaning table"
              className="absolute bottom-[-10px] right-[-10px] scale-110"
            />
          </div>
          <div className="w-full md:w-1/4 p-4  h-80   rounded-sm relative overflow-hidden bg-gradient-to-b from-[#E7E7E7]/70 to-[#E7E7E7]/100 shadow-sm">
            <ImSearch
              width={40}
              height={40}
              className="absolute w-5 h-5 top-4 left-4"
            />
            <h2 className="text-lg font-semibold mt-8">
              Exploratory Data Analysis
            </h2>
            <p className="text-gray-600 text-xs">
              Uncover patterns, trends, and key insights in your data.
            </p>
            <img
              src="/salesgraph.svg"
              alt="Sales graph"
              className="absolute bottom-[-10px] right-[-10px] scale-120"
            />
          </div>
          <div className="w-full md:w-1/4  p-4 h-80  rounded-sm relative overflow-hidden bg-gradient-to-b from-[#E7E7E7]/70 to-[#E7E7E7]/100 shadow-sm">
            <PiChartLineUpLight className="absolute w-7 h-7 top-4 left-4" />
            <h2 className="text-lg font-semibold mt-8 leading-5 mb-1">
              Predictive Modeling and Forecasting
            </h2>
            <p className="text-gray-600 text-xs">
              Anticipate future trends, outcomes, and behaviors, empowering your
              business with data-driven foresight.
            </p>
            <img
              src="/regressionTable.svg"
              alt="Regression table"
              className="absolute bottom-[-10px] right-[-10px] scale-120"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  justify-center gap-10 md:gap-20 w-full">
          <div className="w-full md:w-1/4 p-4 h-80 rounded-sm relative overflow-hidden bg-gradient-to-b from-[#E7E7E7]/70 to-[#E7E7E7]/100 shadow-sm ">
            <IoPieChartOutline className="absolute w-7 h-7 top-4 left-4" />
            <h2 className="text-lg font-semibold mt-8">
              Dashboarding and Visualization
            </h2>
            <p className="text-gray-600 text-xs">
              Transform your complex data into clear, interactive visuals and
              dashboards.
            </p>
            <img
              src="/charts.svg"
              alt="Charts"
              className="absolute bottom-[-10px] right-[-10px] scale-120"
            />
          </div>
          <div className="w-full md:w-1/4 p-4 h-80 rounded-sm relative overflow-hidden bg-gradient-to-b from-[#E7E7E7]/70 to-[#E7E7E7]/100 shadow-sm">
            <MdOutlineInsights className="absolute w-7 h-7 top-4 left-4" />
            <h2 className="text-lg font-semibold mt-8">
              Analysis and Insights
            </h2>
            <p className="text-gray-600 text-xs">
              Turn your data into clear, meaningful information that guides
              smarter decisions
            </p>
            <img
              src="/linearrow.svg"
              alt="Line Arrow"
              className="absolute bottom-0 right-10 scale-110"
            />
            <img
              src="/journalist.svg"
              alt="Journalist"
              className="absolute bottom-0 right-1/2 translate-x-1/2 scale-120"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
