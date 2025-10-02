import { useEffect, useState } from "react";
import rosas from "./assets/rosas.avif";
import lirios from "./assets/lirios.avif";
import girasol from "./assets/girasol.jpg";
import "./App.css";
import CardList from "./components/CardList";

const SEED = [
  { id: 1, title: "Rosas", imgUrl: rosas, children: <p>Ramo de rosas rojas.</p> },
  { id: 2, title: "Lirios", imgUrl: lirios, children: <small>lirios</small> },
  { id: 3, title: "Girasol", imgUrl: girasol, children: <span>girasoles</span> },
];

const fetchCards = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const enriched = SEED
        .map((c) => ({
          ...c,
          children: (
            <>
              {c.children}
              <div className="text-body-secondary">ID #{c.id}</div>
            </>
          ),
        }))
        .sort((a, b) => Number(a.id) - Number(b.id));
      resolve(enriched);
    }, 600);
  });
};

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetchCards();
      setCards(data);
      setLoading(false);
    })();
  }, []);

  const ordenarPorTitulo = () => {
    setCards((prev) => [...prev].sort((a, b) => a.title.localeCompare(b.title)));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Galería</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Acerca de</a></li>
            </ul>
            <button className="btn btn-outline-success" onClick={ordenarPorTitulo}>
              Ordenar por título
            </button>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <h1 className="h3 mb-3">Listado de Cards</h1>
        {loading ? (
          <div className="alert alert-info">Cargando cards…</div>
        ) : (
          <CardList cards={cards} cols={3} />
        )}
      </main>
    </>
  );
}
