import styles from './page.module.css';

export default function Page() {
  const products = [
    { id: 1, name: 'Vela Aromática 1', description: 'Lavanda relajante', image: '/hero-bg.jpg' },
    { id: 2, name: 'Vela Aromática 2', description: 'Cítricos frescos', image: '/hero-bg.jpg' },
    { id: 3, name: 'Vela Decorativa 1', description: 'Minimalista beige', image: '/hero-bg.jpg' },
    { id: 4, name: 'Línea Floral 1', description: 'Rosas suaves', image: '/hero-bg.jpg' },
    { id: 5, name: 'Wax Melt 1', description: 'Vainilla dulce', image: '/hero-bg.jpg' },
    { id: 6, name: 'Wax Melt 2', description: 'Canela especiada', image: '/hero-bg.jpg' },
  ];

  return (
    <main>
      <section
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          padding: "12rem 1rem",
          color: "#000",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1>Velas artesanales y decoración</h1>
          <p>Diseños minimalistas, aromas únicos y productos para crear ambientes cálidos.</p>
        </div>
        <div
          style={{
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(255, 255, 255, 0.55)",
          }}
        />
      </section>

      <section className={styles.sectionGrid} id="velas">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Velas</h2>
            <a href="/velas" className={styles.ctaLink}>Ver todas las velas</a>
          </div>

          <div className={styles.scrollGrid}>
            {products.map((p) => (
              <article key={p.id} className={styles.card}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <button className={styles.btn}>Comprar</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}