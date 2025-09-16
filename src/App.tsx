import Header from "./components/header";
import Profilo from "./components/Profilo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      <Header />
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Profilo />
      </main>
      <Footer />
    </div>
  );
}
