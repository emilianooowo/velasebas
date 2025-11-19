'use client';

import { useState } from 'react';
import Link from 'next/link';

type Sublink = {
  title: string;
  path: string;
};

type NavItem = {
  title: string;
  path: string;
  sublinks: Sublink[];
};

const navItems: NavItem[] = [
  {
    title: 'Inicio',
    path: '/',
    sublinks: [],
  },
  {
    title: 'Velas',
    path: '/velas',
    sublinks: [
      { title: 'Aromáticas', path: '/velas#aromaticas' },
      { title: 'Decorativas', path: '/velas#decorativas' },
      { title: 'Para masaje', path: '/velas#masaje' },
    ],
  },
  {
    title: 'Decoración',
    path: '/decoracion',
    sublinks: [
      { title: 'Portavelas', path: '/#portavelas' },
      { title: 'Bases y platos', path: '/#bases' },
      { title: 'Accesorios', path: '/#accesorios' },
    ],
  },
  {
    title: 'Ambientadores',
    path: '/ambientadores',
    sublinks: [
      { title: 'Difusores', path: '/#difusores' },
      { title: 'Sprays textiles', path: '/#sprays' },
      { title: 'Inciensos', path: '/#inciensos' },
    ],
  },
  {
    title: 'Catálogo Completo',
    path: '/catalogo',
    sublinks: [],
  },
  {
    title: 'Paquetes',
    path: '/paquetes',
    sublinks: [],
  },
  {
    title: 'Eventos',
    path: '/eventos',
    sublinks: [],
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo"><img src="/logo-velas.png" alt="" /></Link>

        <nav className="nav">
          {navItems.map((item) =>
            item.sublinks.length === 0 ? (
              <Link key={item.title} href={item.path}>
                {item.title}
              </Link>
            ) : (
              <div
                key={item.title}
                className="nav-item"
                onMouseEnter={() => setOpenDropdown(item.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={item.path} className="nav-button">
                  {item.title} <span className="arrow">▼</span>
                </Link>
                {openDropdown === item.title && item.sublinks.length > 0 && (
                  <div className="dropdown-menu">
                    {item.sublinks.map((sublink) => (
                      <Link key={sublink.title} href={sublink.path} className="dropdown-link">
                        {sublink.title}
                      </Link>
                    ))}

                    <div className="dropdown-divider"></div>

                    <Link href="/catalogo" className="dropdown-view-all">
                      Ver todo el catálogo
                    </Link>
                  </div>
                )}
              </div>
            )
          )}
        </nav>
      </div>
    </header>
  );
}