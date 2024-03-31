import React from "react";
import useCast from "../customHooks/useCast";
import { useSelector } from "react-redux";
import { MOVIE_POSTER_PATH } from "../utils/constant";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const MovieInfoMiddle = ({ id, info }) => {
  useCast(id);
  const castInfo = useSelector((store) => store?.movies?.castInfo);
  if (!castInfo) return;

  const { cast } = castInfo;

  const actualBudget = new Intl.NumberFormat().format(info?.budget);
  const actualRevenue = new Intl.NumberFormat().format(info?.revenue);

  const budgetCss =
    "xl:text-lg lg:text-lg md:text-base sm:text-sm text-sm font-bold";
  const priceCss =
    "xl:text-base lg:text-base md:text-sm  text-xs xs:text-sm font-normal";

  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-10 py-1.5 sm:py-2 lg:py-4 xl:p-4 w-12/12 bg-black">
      <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
        <span className="text-white font-semibold md:font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">
          Cast
        </span>
      </div>
      <div className="flex justify-between items-start gap-3 sm:gap-8 md:gap-12 lg:gap-14 xl:gap-16">
        <div className="w-9/12 md:py-2">
          <div className="overflow-x-scroll overflow-y-hidden no-scrollbar gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-4 flex flex-row">
            {cast.map((cast) => (
              <div
                key={cast?.id}
                className="flex justify-between items-center rounded-lg flex-col bg-zinc-700"
              >
                <div className="overflow-hidden h-[130px] sm:h-[150px] md:h-[170px] lg:h-[180px] xl:h-[190px] w-[90px] sm:w-[130px] md:w-[150px] lg:w-[160px] xl:w-[170px] rounded-t-lg">
                  <img
                    src={MOVIE_POSTER_PATH + cast?.profile_path}
                    alt="Loading..."
                    className="w-full"
                  />
                </div>
                <div className="py-0.5 lg:py-1 px-0.5 sm:px-1 md:px-1.5 lg:px-2 flex flex-col w-full rounded-b-lg h-12 md:h-14 lg:h-16">
                  <span className="text-white font-semibold text-xs sm:text-sm lg:text-base">
                    {cast?.name}
                  </span>
                  <span className="text-gray-300 font-light text-[8px] sm:text-xs lg:text-sm">
                    {cast?.character}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-3/12 flex justify-start flex-col items-start gap-0.5 md:gap-6 text-white">
          <div className="flex flex-col gap-0.5 xl:gap-6">
            <div className="flex flex-row flex-wrap justify-between gap-4 items-center">
              <Link
                to={"https://www.instagram.com/here_s_rastogi/"}
                target="_blank"
              >
                <span className="text-white text-xl md:text-2xl">
                  <FaInstagram />
                </span>
              </Link>
              <Link
                to={"https://github.com/sachinrastogi7777/"}
                target="_blank"
              >
                <span className="text-white text-xl md:text-2xl">
                  <FaGithub />
                </span>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/sachin-rastogi-377299174/"}
                target="_blank"
              >
                <span className="text-white text-xl md:text-2xl">
                  <FaLinkedin />
                </span>
              </Link>
              <Link
                to={"https://www.facebook.com/profile.php?id=100006542718154"}
                target="_blank"
              >
                <span className="text-white text-xl md:text-2xl">
                  <FaFacebook />
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-0.5 xl:gap-8 h-44">
              <div className="flex flex-col xl:-my-3 ">
                <span className={budgetCss}>Budget: </span>
                <span className={priceCss}>
                  {actualBudget === "0" ? "NA" : "$ " + actualBudget}
                </span>
              </div>
              <div className="flex flex-col xl:-my-3">
                <span className={budgetCss}>Revenue: </span>
                <span className={priceCss}>
                  {actualRevenue === "0" ? "NA" : "$ " + actualRevenue}
                </span>
              </div>
              <div className="flex flex-col xl:-my-3">
                <span className={budgetCss}>Status: </span>
                <span className={priceCss}>{info?.status}</span>
              </div>
              <div className="flex flex-col xl:-my-3">
                <span className={budgetCss}>Ratings: </span>
                <span className={priceCss}>{info?.vote_average}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoMiddle;
