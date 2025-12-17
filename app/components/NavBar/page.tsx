'use client'

import { Twirl as Menu } from 'hamburger-react'
import Image from 'next/image';
import { useState } from "react";
import ContactButton from './ContactButton/page';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { label: 'Sobre mim', href: '#about' },
    { label: 'Jornada', href: '#journey' },
    { label: 'Projetos', href: '#projects' },
  ]

  return (
    <nav className="fixed top-0 sm:top-6 left-0 right-0 z-50 flex justify-center sm:px-4">
      <div className="hidden sm:flex">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-4 shadow-2xl shadow-accent-primary/5">
          <a href='#'>
            <Image
              src="/logo.png"
              alt="Logo"
              width={169}
              height={145}
              className="h-10 w-auto"
            />
          </a>

          <div className="hidden sm:flex items-center gap-1 p-1">
            {items.map(({ label, href }) => (
              <a
                key={href}
                className="px-4 py-1.5 rounded-full text-sm font-medium hover:text-white hover:bg-white/10 transition-all"
                href={href}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            className="relative inline-flex h-9 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            href="#contact"
          >
            <ContactButton />
          </a>
        </div>
      </div>

      <div
        className={`flex sm:hidden w-full items-center justify-between p-3 ${isOpen ? "" : "glass-panel"
          }`}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={169}
          height={145}
          className="h-10 w-auto"
        />
        <Menu toggled={isOpen} toggle={setIsOpen} />
      </div>

      {isOpen && (
        <div className="absolute w-screen -z-50 sm:hidden bg-bg-card">
          <div className=" py-3 flex flex-col gap-1 shadow-2xl mt-16 shadow-accent-primary/5">
            {items.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="py-4 px-4 text-sm font-medium hover:text-white hover:bg-white/10 transition-all"
              >
                {label}
              </a>
            ))}

            <a
              className="relative inline-flex h-9 w-3xs my-4 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 self-center sm:self-auto"
              onClick={() => setIsOpen(false)}
              href="#contact">
              <ContactButton />
            </a>
          </div>
        </div>

      )}
    </nav>
  )
}
