import "./App.css";
import { Data_Carousel, Data_Match } from "./common/Contants";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import texture_bg from './assets/texture_bg.png'

function App() {
  return (
    <>
      <Navbar></Navbar>

      <h1 className="text-3xl font-bold underline h-[320px] bg-cyan-500">
        Hello world!
      </h1>
      <div className={`bg-custom bg-cover bg-no-repeat p-10`}>
    <div className="absolute bg-black"></div>
      </div>
      <div className="bg-gray-100/80 p-10">
        <Carousel>
          {Data_Match.map((item) => {
            return (
              <div key={item.id} className="min-w-[33.33%] px-3 py-5">
                <div className="bg-white pb-5 border-2 border-red-500">
                  <p className="bg-red-500 text-white w-fit p-2 text-xs font-bold m-auto">
                    AG FOOTBALL LEAGUE
                  </p>
                  <div className="flex justify-center items-center my-5">
                    <p className="font-bold mr-10 min-w-[100px] text-right">
                      {item.result[0].teamName}
                    </p>
                    <p className="bg-black text-white px-3 py-1 text-2xl font-bold">
                      {item.result[0].score}
                    </p>
                    <p className="font-bold text-2xl mx-1">:</p>
                    <p className="bg-black text-white px-3 py-1 text-2xl font-bold">
                      {item.result[1].score}
                    </p>
                    <p className="font-bold ml-10 min-w-[100px] text-left">
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
