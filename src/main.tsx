import Header from "./components/header";
import Profilo from "./components/Profilo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Profilo />
      </main>
      <Footer />
    </div>
  );
}
