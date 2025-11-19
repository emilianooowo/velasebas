import styles from './velas.module.css';

export default function VelasPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Nuestras Velas Artesanales</h1>
        <p className={styles.description}>
          Descubre la magia de nuestras velas hechas a mano con cera de soja natural,
          fragancias premium y amor en cada detalle. Perfectas para crear ambientes
          únicos y momentos especiales.
        </p>
      </section>

      {/* Product Info Section */}
      <section className={styles.productInfo}>
        <div className={styles.imageContainer}>
          <img
            src="/hero-bg.jpg"
            alt="Vela artesanal"
            className={styles.productImage}
          />
        </div>
        <div className={styles.infoContent}>
          <h2>Velas de Cera de Soja Premium</h2>
          <p>
            Nuestras velas están elaboradas con cera de soja 100% natural,
            una opción ecológica que quema de manera más limpia y duradera
            que las velas tradicionales de parafina.
          </p>
          <p>
            Cada vela es creada cuidadosamente a mano, utilizando fragancias
            de alta calidad que llenan tu espacio con aromas envolventes y
            duraderos. Desde notas florales hasta aromas amaderados, tenemos
            la fragancia perfecta para cada momento.
          </p>
          <ul className={styles.features}>
            <li>100% cera de soja natural</li>
            <li>Fragancias premium de larga duración</li>
            <li>Mechas de algodón sin plomo</li>
            <li>Envases reutilizables</li>
            <li>Hecho a mano con amor</li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <h2 className={styles.galleryTitle}>Nuestra Colección</h2>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItem}>
            <img src="/hero-bg.jpg" alt="Vela lavanda" />
            <p className={styles.galleryCaption}>Lavanda Serena</p>
          </div>
          <div className={styles.galleryItem}>
            <img src="/hero-bg.jpg" alt="Vela vainilla" />
            <p className={styles.galleryCaption}>Vainilla Dulce</p>
          </div>
          <div className={styles.galleryItem}>
            <img src="/hero-bg.jpg" alt="Vela eucalipto" />
            <p className={styles.galleryCaption}>Eucalipto Fresco</p>
          </div>
          <div className={styles.galleryItem}>
            <img src="/hero-bg.jpg" alt="Vela canela" />
            <p className={styles.galleryCaption}>Canela Especiada</p>
          </div>
        </div>
      </section>
      {/* Velas Aromáticas */}
      <section id="aromaticas" className={styles.velaType}>
        <div className={styles.typeContent}>
          <h2 className={styles.typeTitle}>Velas Aromáticas</h2>
          <p className={styles.typeDescription}>
            Nuestras velas aromáticas están diseñadas para transformar cualquier espacio
            en un oasis de tranquilidad. Con fragancias cuidadosamente seleccionadas
            que van desde cítricos energizantes hasta aromas relajantes de lavanda,
            cada vela crea una atmósfera única.
          </p>
          <div className={styles.typeBenefits}>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>🌸</span>
              <h4>Aromas Naturales</h4>
              <p>Aceites esenciales puros</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>⏱️</span>
              <h4>Larga Duración</h4>
              <p>Hasta 40 horas de aroma</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>🏡</span>
              <h4>Para Todo Espacio</h4>
              <p>Ideal para hogar u oficina</p>
            </div>
          </div>
        </div>
        <div className={styles.typeImageContainer}>
          <img src="/hero-bg.jpg" alt="Velas Aromáticas" className={styles.typeImage} />
        </div>
      </section>

      {/* Velas Decorativas */}
      <section id="decorativas" className={styles.velaType}>
        <div className={styles.typeImageContainer}>
          <img src="/hero-bg.jpg" alt="Velas Decorativas" className={styles.typeImage} />
        </div>
        <div className={styles.typeContent}>
          <h2 className={styles.typeTitle}>Velas Decorativas</h2>
          <p className={styles.typeDescription}>
            Más que una fuente de luz, nuestras velas decorativas son piezas de arte
            que embellecen tu hogar. Con diseños únicos, colores vibrantes y formas
            elegantes, cada vela es una declaración de estilo que complementa
            perfectamente tu decoración.
          </p>
          <div className={styles.typeBenefits}>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>🎨</span>
              <h4>Diseños Únicos</h4>
              <p>Hechas a mano con detalle</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>✨</span>
              <h4>Estilo Premium</h4>
              <p>Elegancia en cada pieza</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>🎁</span>
              <h4>Regalo Perfecto</h4>
              <p>Ideal para ocasiones especiales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Velas para Masaje */}
      <section id="masaje" className={styles.velaType}>
        <div className={styles.typeContent}>
          <h2 className={styles.typeTitle}>Velas para Masaje</h2>
          <p className={styles.typeDescription}>
            Experimenta el lujo de nuestras velas para masaje, formuladas con mantecas
            y aceites naturales que se derriten en un aceite tibio y nutritivo.
            Perfectas para crear momentos de relajación profunda y cuidado personal,
            hidratan y suavizan la piel mientras disfrutas de fragancias sensuales.
          </p>
          <div className={styles.typeBenefits}>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>💆</span>
              <h4>Hidratación Profunda</h4>
              <p>Mantecas naturales nutritivas</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>🌡️</span>
              <h4>Temperatura Ideal</h4>
              <p>Se derrite perfectamente</p>
            </div>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>🧴</span>
              <h4>Piel Suave</h4>
              <p>Sin residuos grasos</p>
            </div>
          </div>
        </div>
        <div className={styles.typeImageContainer}>
          <img src="/hero-bg.jpg" alt="Velas para Masaje" className={styles.typeImage} />
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className={styles.ctaSection}>
        <h2>¿Listo para iluminar tu espacio?</h2>
        <p>
          Contáctanos para hacer tu pedido o conocer más sobre nuestras
          colecciones exclusivas y personalizadas.
        </p>
        <button className={styles.ctaButton}>Contáctanos Ahora</button>
      </section>
    </div>
  );
}
