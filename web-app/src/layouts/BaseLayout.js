import { Outlet } from "react-router-dom";
import homeImage from "../assets/homeImage.png";
import pokeBall from "../assets/spinner.png";

export default function BaseLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 font-sans">
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-md flex justify-around items-center">
        <div className="animate-spin">
          <img width={40} src={pokeBall} alt="pokeBall" />
        </div>
        <div className="flex">
          <h1 className="text-2xl font-bold">Pokédex</h1>
          <img width={30} src={homeImage} alt="homeImage" />
        </div>
        <div className="animate-spin">
          <img width={40} src={pokeBall} alt="pokeBall" />
        </div>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
