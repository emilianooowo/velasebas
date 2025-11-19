import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Columna 1: Logo y descripción */}
        <div className="footer-col">
          <img className="footer-logo" src="/logo-blanco.webp" alt="Logo"/>
          <p className="footer-desc">
            Velas artesanales y decoración minimalista para crear ambientes únicos.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col">
          <h3>Navegación</h3>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/#velas">Velas</Link></li>
            <li><Link href="/#decoracion">Decoración</Link></li>
            <li><Link href="/#ambientadores">Ambientadores</Link></li>
            <li><Link href="/#eventos">Eventos</Link></li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div className="footer-col">
          <h3>Síguenos</h3>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="https://wa.me/521XXXXXXXXXX" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Velas · Hecho con amor y diseño minimalista</p>
      </div>
    </footer>
  );
}