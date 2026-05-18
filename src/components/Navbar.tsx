import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-rr.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#precos", label: "Preços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    // bg-black/60 com backdrop-blur dá o efeito de vidro do print
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        
        {/* LOGO E NOME */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="R&R" className="w-10 h-10 object-contain" />
          <span className="font-heading text-xl font-bold uppercase tracking-tighter text-white">
            R&R Metais
          </span>
        </a>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="font-heading uppercase text-xs font-semibold tracking-[0.2em] text-gray-300 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          
          {/* BOTÃO WHATSAPP ESTILO PRINT */}
          <a
            href="https://wa.me/5511988673530"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22c55e] text-white font-heading text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-md hover:bg-[#1eb054] transition-all hover:scale-105 shadow-lg shadow-green-500/20"
          >
            WhatsApp
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-8 space-y-6 animate-in fade-in slide-in-from-top-4">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              onClick={() => setOpen(false)} 
              className="block font-heading uppercase text-sm tracking-widest text-gray-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511988673530"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary text-white font-heading text-sm uppercase tracking-widest px-5 py-4 rounded-lg text-center font-bold"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;