import "./App.css";
import {
  Data_LeagueTable,
  Data_MatchIncoming,
  Data_MatchResult,
} from "./common/Contants";
import { getLogoByTeamName, getPointOfTeam } from "./common/Helper";
import banner from "./assets/banner.jpg";
import Carousel from "./components/Carousel";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}

      <div>
        <img src={banner} alt="" width="100%" />
      </div>

      <div
        className={`bg-[linear-gradient(0deg,rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('/src/assets/texture_bg.png')] bg-cover bg-no-repeat p-5 md:p-10`}
      >
        <Carousel mutiItemPerSilde={false}>
          {Data_MatchIncoming.map((item) => {
            return (
              <div key={item.id} className="min-w-full">
                <h2 className="text-center text-white uppercase px-5 font-bold bg-red-800 w-fit m-auto mb-10">
                  Trận đấu sắp tới
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
          Kết quả trận đấu
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
                    <div className="bg-white pb-5 border-2 border-red-800 min-h-[192px] relative">
                      <p className="bg-red-800 text-white w-fit p-2 text-xs font-bold m-auto">
                        AG FOOTBALL LEAGUE
                      </p>
                      <div className="grid grid-cols-3 gap-3 md:gap-0 my-5">
                        <div className="flex items-center justify-end">
                          <div className="w-[30px] lg:w-[40px] mr-3">
                            <img
                              src={getLogoByTeamName(item.result[0].teamName)}
                              alt=""
                            />
                          </div>
                          <p className="font-bold flex justify-end items-center text-sm md:text-base lg:text-lg">
                            {item.result[0].teamName.toUpperCase()}
                          </p>
                        </div>
                        <div className="flex justify-center items-center">
                          <p className="bg-black text-white px-3 py-1 text-2xl font-bold">
                            {item.result[0].score}
                          </p>
                          <p className="font-bold text-2xl mx-1">:</p>
                          <p className="bg-black text-white px-3 py-1 text-2xl font-bold">
                            {item.result[1].score}
                          </p>
                        </div>
                        <div className="flex items-center justify-start">
                          <p className="font-bold flex justify-start items-center text-left text-sm md:text-base lg:text-lg">
                            {item.result[1].teamName.toUpperCase()}
                          </p>
                          <div className="w-[30px] lg:w-[40px] ml-3">
                            <img
                              src={getLogoByTeamName(item.result[1].teamName)}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-5">
                        <p className="text-center text-sm text-black/50">
                          {item.round}
                        </p>
                        <p className="text-center text-sm text-black/50">
                          {item.matchDate}
                        </p>
                      </div>
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

      <div className="p-5 md:p-10">
        <h2 className="text-center text-white uppercase px-5 font-bold bg-red-800 w-fit m-auto mb-10">
          Bảng xếp hạng
        </h2>
        <div className="max-w-7xl m-auto lg:overflow-auto overflow-x-scroll">
          {Data_LeagueTable.map((item, index) => {
            return (
              <div key={index} className="mb-10">
                <div className="flex">
                  <h3 className="bg-red-800 w-fit py-2 px-3 text-white font-bold uppercase">
                    {item.groupName}
                  </h3>
                  <div className="h-0 w-[100px] cross-div"></div>
                </div>

                <div>
                  <div className="min-w-[920px]">
                    <table className="w-full text-left rtl:text-right dark:text-gray-400">
                      <thead className="text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            Vị trí
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Đội bóng
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Điểm
                          </th>
                          <th scope="col" className="px-6 py-3">
                            T - H - B
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Hiệu số
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 flex justify-evenly"
                          >
                            <div className="bg-yellow-300 py-3 px-2 rounded"></div>
                            /{" "}
                            <div className="bg-red-500 py-3 px-2 rounded"></div>
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Số trận
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Lịch sử đấu
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.teams
                          .sort((a, b) => {
                            return (
                              getPointOfTeam(b.matchHistory) -
                              getPointOfTeam(a.matchHistory)
                            );
                          })
                          .map((subItem, index) => {
                            return (
                              <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                              >
                                <th
                                  scope="row"
                                  className="px-6 py-4 whitespace-nowrap dark:text-white text-center"
                                >
                                  {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                  <div className="flex items-center">
                                    <div className="w-[20px] lg:w-[30px] mr-3">
                                      <img
                                        src={getLogoByTeamName(
                                          subItem.teamName
                                        )}
                                        alt=""
                                      />
                                    </div>
                                    {subItem.teamName.toUpperCase()}
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                  {getPointOfTeam(subItem.matchHistory)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                  {
                                    subItem.matchHistory.filter((p) => p == "W")
                                      ?.length
                                  }{" "}
                                  -{" "}
                                  {
                                    subItem.matchHistory.filter((p) => p == "D")
                                      ?.length
                                  }{" "}
                                  -{" "}
                                  {
                                    subItem.matchHistory.filter((p) => p == "L")
                                      ?.length
                                  }
                                </td>
                                <td className="px-6 py-4 text-center">
                                  <div className="flex justify-center">
                                    {subItem.noOfGoal} / {subItem.noOfLostGoal}
                                    <p
                                      className={`${
                                        (subItem.noOfGoal -
                                          subItem.noOfLostGoal >=
                                          0 &&
                                          "text-green-500") ||
                                        "text-red-500"
                                      }`}
                                    >
                                      {`(${
                                        subItem.noOfGoal - subItem.noOfLostGoal
                                      })`}
                                    </p>
                                  </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                  {subItem.yellowCard} / {subItem.redCard}
                                </td>
                                <td className="px-6 py-4 text-center">
                                  {subItem.matchHistory.length}
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex justify-evenly items-center">
                                    {subItem.matchHistory.map(
                                      (subItemLv2, index) => {
                                        return (
                                          <p
                                            key={index}
                                            className={`px-2 rounded-[50%] text-center text-white ${
                                              (subItemLv2 === "W" &&
                                                "bg-green-500") ||
                                              (subItemLv2 === "L" &&
                                                "bg-red-500") ||
                                              (subItemLv2 === "D" &&
                                                "bg-gray-500")
                                            }`}
                                          >
                                            {(subItemLv2 === "W" && "T") ||
                                              (subItemLv2 === "D" && "H") ||
                                              (subItemLv2 === "L" && "B")}
                                          </p>
                                        );
                                      }
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
