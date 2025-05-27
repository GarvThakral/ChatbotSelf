import Image from "next/image";
import Sidebar from "./components/sidebar";
import MainPage from "./components/main";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <MainPage />
    </div>
  );
}
