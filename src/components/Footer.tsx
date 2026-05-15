const Footer = () => (
  <footer className="border-t border-border py-8 px-4 text-center">
    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()} R&R Metais Reciclagem — Todos os direitos reservados.
    </p>
    <p className="text-muted-foreground/60 text-xs mt-1">Compramos sucatas • Pagamento à vista</p>
  </footer>
);

export default Footer;
