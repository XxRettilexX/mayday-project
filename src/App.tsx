import Header from "./components/header";
import Footer from "./components/Footer";
import List from "./components/List";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      {/* HEADER */}
      <Header />

      {/* SEZIONE PRODOTTI */}
      <section className="product-section">
        <h2 className="section-title">Lista Prodotti</h2>
        <List />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
