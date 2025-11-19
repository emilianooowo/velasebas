"use client";

import styles from './catalogo.module.css';
import { useState } from "react";

export default function CatalogoPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("velas");

  const categorias = ["velas", "decoracion", "ambientadores"];

  const productos: Record<string, { nombre: string; descripcion: string; precio: string; imagen: string }[]> = {
    velas: [
      {
        nombre: "Vela Aromática Lavanda",
        descripcion: "Vela de cera de soja con aroma relajante a lavanda",
        precio: "$15.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Vela Vainilla Canela",
        descripcion: "Mezcla cálida de vainilla y canela para ambientes acogedores",
        precio: "$18.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Vela Aromática Lavanda",
        descripcion: "Vela de cera de soja con aroma relajante a lavanda",
        precio: "$15.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Vela Vainilla Canela",
        descripcion: "Mezcla cálida de vainilla y canela para ambientes acogedores",
        precio: "$18.99",
        imagen: "/hero-bg.jpg",
      }, {
        nombre: "Vela Aromática Lavanda",
        descripcion: "Vela de cera de soja con aroma relajante a lavanda",
        precio: "$15.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Vela Vainilla Canela",
        descripcion: "Mezcla cálida de vainilla y canela para ambientes acogedores",
        precio: "$18.99",
        imagen: "/hero-bg.jpg",
      }
    ],
    decoracion: [
      {
        nombre: "Portavelas Minimalista",
        descripcion: "Portavelas de cerámica con diseño moderno",
        precio: "$12.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Portavelas Minimalista",
        descripcion: "Portavelas de cerámica con diseño moderno",
        precio: "$12.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Portavelas Minimalista",
        descripcion: "Portavelas de cerámica con diseño moderno",
        precio: "$12.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Portavelas Minimalista",
        descripcion: "Portavelas de cerámica con diseño moderno",
        precio: "$12.99",
        imagen: "/hero-bg.jpg",
      },
    ],
    ambientadores: [
      {
        nombre: "Difusor Bambú",
        descripcion: "Difusor de varillas con aroma a bambú y té verde",
        precio: "$22.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Difusor Bambú",
        descripcion: "Difusor de varillas con aroma a bambú y té verde",
        precio: "$22.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Difusor Bambú",
        descripcion: "Difusor de varillas con aroma a bambú y té verde",
        precio: "$22.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Difusor Bambú",
        descripcion: "Difusor de varillas con aroma a bambú y té verde",
        precio: "$22.99",
        imagen: "/hero-bg.jpg",
      },
      {
        nombre: "Difusor Bambú",
        descripcion: "Difusor de varillas con aroma a bambú y té verde",
        precio: "$22.99",
        imagen: "/hero-bg.jpg",
      }
    ],
  };

  return (
    <div className={styles.catalogoContent}>
      <div className={styles.catalogoHeader}>
        <h1>Catálogo de Productos</h1>
        <p>Explora el catálogo completo y conoce nuestras categorías y encuentra el producto perfecto para ti.</p>
      </div>

      <div className={styles.catalogoContainer}>
        <aside className={styles.sidebar}>
          <ul className={styles.categoriaList}>
            {categorias.map((cat) => (
              <li
                key={cat}
                className={categoriaActiva === cat ? styles.active : ""}
                onClick={() => setCategoriaActiva(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </li>
            ))}
          </ul>
        </aside>

        <main className={styles.productosGrid}>
          {(productos[categoriaActiva] || []).map((producto, index) => (
            <div key={index} className={styles.productoCard}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p className={styles.precio}>{producto.precio}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}