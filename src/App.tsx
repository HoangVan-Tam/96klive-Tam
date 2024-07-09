import "./App.css";
import { Data_MatchIncoming, Data_MatchResult } from "./common/Contants";
import { getLogoByTeamName } from "./common/Helper";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <h1 className="text-3xl font-bold underline h-[320px] bg-cyan-500">
        Hello world!
      </h1>

      <div
        className={`bg-[linear-gradient(0deg,rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('/src/assets/texture_bg.png')] bg-cover bg-no-repeat p-5 md:p-10`}
      >
        <Carousel mutiItemPerSilde={false}>
          {Data_MatchIncoming.map((item) => {
            return (
              <div key={item.id} className="min-w-full">
                <h2 className="text-center text-white uppercase px-5 font-bold bg-red-800 w-fit m-auto mb-10">
                  Upcoming match
                </h2>

                {/* Mobile */}
                <div className="sm:hidden">
                  <div className="border-b-[1px] border-gray-500 pb-5 px-5">
                    <div className="text-white font-bold flex justify-between items-center text-xl">
                      <div className="flex items-center">
                        <div className="w-10">
                          <img src={getLogoByTeamName(item.team1)} alt="" />
                        </div>
                        <p className="ml-3">{item.team1.toUpperCase()}</p>
                      </div>
                      <p>-</p>
                    </div>
                    <div className="text-white font-bold flex justify-between items-center text-xl mt-3">
                      <div className="flex items-center">
                        <div className="w-10">
                          <img src={getLogoByTeamName(item.team2)} alt="" />
                        </div>
                        <p className="ml-3">{item.team2.toUpperCase()}</p>
                      </div>
                      <p>-</p>
                    </div>
                  </div>
                  <div className="text-gray-300 font-bold mt-5">
                    <p>{item.round}</p>
                    <p className="text-2xl">
                      {item.matchTime}, {item.matchDate}
                    </p>
                    <p>{item.stadium}</p>
                  </div>
                </div>

                {/* PC */}
                <div className="hidden sm:block max-w-screen-lg m-auto">
                  <div className="text-white flex items-center justify-around font-bold text-xl md:text-4xl md:justify-evenly">
                    <div className="w-[50px] lg:w-[75px]">
                      <img src={getLogoByTeamName(item.team1)} alt="" />
                    </div>
                    <p>{item.team1.toUpperCase()}</p>
                    <p>- : -</p>
                    <p>{item.team2.toUpperCase()}</p>
                    <div className="w-[50px] lg:w-[75px]">
                      <img src={getLogoByTeamName(item.team2)} alt="" />
                    </div>
                  </div>
                  <div className="text-gray-300 text-center mt-5 md:text-xl">
                    <p>{item.round}</p>
                    <p className="text-2xl">
                      {item.matchTime}, {item.matchDate}
                    </p>
                    <p>{item.stadium}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="bg-gray-200/80 p-5 md:p-10">
        <h2 className="text-center text-white uppercase px-5 font-bold bg-red-800 w-fit m-auto mb-10">
          Match result
        </h2>

        {/* PC */}
        <div className="hidden sm:block">
          <Carousel>
            {Data_MatchResult.map((item) => {
              return (
                <div
                  key={item.id}
                  className="block sm:min-w-[100%] md:min-w-[50%] xl:min-w-[33.33%] px-3"
                >
                  <div className="sm:max-w-[520px] m-auto">
                    <div className="bg-white pb-5 border-2 border-red-800">
                      <p className="bg-red-800 text-white w-fit p-2 text-xs font-bold m-auto">
                        AG FOOTBALL LEAGUE
                      </p>
                      <div className="grid grid-cols-3 gap-3 md:gap-0 my-5">
                        <p className="font-bold flex justify-end items-center text-sm md:text-base">
                          {item.result[0].teamName.toUpperCase()}
                        </p>
                        <div className="flex justify-center items-center">
                          <p className="bg-black text-white px-3 py-1 text-2xl font-bold">
                            {item.result[0].score}
                          </p>
                          <p className="font-bold text-2xl mx-1">:</p>
                          <p className="bg-black text-white px-3 py-1 text-2xl font-bold">
                            {item.result[1].score}
                          </p>
                        </div>
                        <p className="font-bold flex justify-start items-center text-left text-sm md:text-base">
                          {item.result[1].teamName.toUpperCase()}
                        </p>
                      </div>
                      <p className="text-center text-sm text-black/50">
                        {item.round}
                      </p>
                      <p className="text-center text-sm text-black/50">
                        {item.matchDate}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        {/* Mobile */}

        <div className="sm:hidden">
          <Carousel>
            {Data_MatchResult.map((item) => {
              return (
                <div key={item.id} className="block min-w-[100%] bg-white">
                  <div className=" border-b-[1px] border-red-800 p-5 pt-2">
                    {item.result.map((subItem, index) => {
                      return (
                        <div
                          key={index}
                          className="font-bold uppercase flex items-center justify-between text-lg mt-3"
                        >
                          <div className="flex items-center">
                            <div className="w-[30px] mr-3">
                              <img
                                src={getLogoByTeamName(subItem.teamName)}
                                alt=""
                              />
                            </div>
                            <p>{subItem.teamName}</p>
                          </div>
                          <p>{subItem.score}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-gray-500 px-5 pt-2 pb-5">
                    <p>{item.round}</p>
                    <p>{item.matchDate}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div>
        <h2>BẢNG XẾP HẠNG</h2>
      </div>
    </>
  );
}

export default App;
