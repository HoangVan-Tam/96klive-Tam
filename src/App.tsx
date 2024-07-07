import "./App.css";
import { Data_Carousel, Data_Match } from "./common/Contants";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import texture_bg from "./assets/texture_bg.png";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <h1 className="text-3xl font-bold underline h-[320px] bg-cyan-500">
        Hello world!
      </h1>
      <div
        className={`bg-[linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/src/assets/texture_bg.png')] bg-cover bg-no-repeat p-10`}
      >
        asldj
      </div>
      <div className="bg-gray-100/80 sm:p-5 py-5">
        <Carousel>
          {Data_Match.map((item) => {
            return (
              <div
                key={item.id}
                className="hidden sm:block sm:min-w-[100%] md:min-w-[50%] xl:min-w-[33.33%] px-3"
              >
                <div className="sm:max-w-[520px] m-auto">
                  <div className="bg-white pb-5 border-2 border-red-500">
                    <p className="bg-red-500 text-white w-fit p-2 text-xs font-bold m-auto">
                      AG FOOTBALL LEAGUE
                    </p>
                    <div className="grid grid-cols-3 gap-3 md:gap-0 my-5">
                      <p className="font-bold flex justify-end items-center text-sm md:text-base">
                        {item.result[0].teamName}
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
                        {item.result[1].teamName}
                      </p>
                    </div>
                    <p className="text-center text-sm text-black/50">
                      {item.matchDate}
                    </p>
                    <p className="text-center text-sm text-black/50">
                      {item.round}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div>
        <h2>BẢNG XẾP HẠNG</h2>
      </div>
    </>
  );
}

export default App;
