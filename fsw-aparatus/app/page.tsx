import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="space-y-4 px-5">
        <SearchInput />
        <Image
          src={banner} // Fazemos isso para otimizar a imagem e evitar problemas de Cumulative Layout Shift (CLS)
          alt="Banner"
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </>
  );
};

export default Home;
