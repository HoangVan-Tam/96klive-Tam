import "./App.css";
import { Data_Carousel, Data_Match } from "./common/Contants";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <h1 className="text-3xl font-bold underline h-[320px] bg-cyan-500">
        Hello world!
      </h1>
      <div className="bg-gray-100/80 px-3">
        <Carousel>
          {Data_Match.slice(0, 4).map((item) => {
            return (
              <div key={item.id} className="min-w-[50%] px-3 py-5">
                <div className="bg-white pb-5">
                  <p className="bg-red-500 text-white w-fit p-2 text-sm font-bold m-auto">
                    AG FOOTBALL LEAGUE
                  </p>
                  <div className="flex justify-center items-center mt-10 mb-5">
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
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <h1 className="text-3xl font-bold underline h-screen bg-cyan-500">
        Hello world!
      </h1>
    </>
  );
}

export default App;
