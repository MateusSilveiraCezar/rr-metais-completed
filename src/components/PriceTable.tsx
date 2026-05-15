const prices = [
  { material: "Cobre Vermelho", price: "R$ 53,00" },
  { material: "Cobre Misto", price: "R$ 49,00" },
  { material: "Cobre de 4ª", price: "R$ 38,00" },
  { material: "Fio Instalação", price: "R$ 30,00" },
  { material: "Fio Misto", price: "R$ 14,00" },
  { material: "Fio Informática", price: "R$ 6,50" },
  { material: "Latão", price: "R$ 27,00" },
  { material: "Bronze", price: "R$ 39,00" },
  { material: "Cavaco Latão", price: "R$ 21,50" },
  { material: "Radiador", price: "R$ 25,00" },
  { material: "Chumbo Mole", price: "R$ 4,00" },
  { material: "Chumbo Duro", price: "R$ 2,00" },
];

const PriceTable = () => {
  return (
    <section id="precos" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-2">
          <span className="text-gradient-primary">Tabela de Preços</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">Preços válidos para clientes PF — Pagamento à vista</p>

        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="bg-gradient-primary px-6 py-3 flex justify-between">
            <span className="font-heading text-sm uppercase tracking-widest text-primary-foreground font-semibold">Material</span>
            <span className="font-heading text-sm uppercase tracking-widest text-primary-foreground font-semibold">Preço/kg</span>
          </div>
          <div className="divide-y divide-border">
            {prices.map((item, i) => (
              <div
                key={item.material}
                className={`flex justify-between px-6 py-4 transition-colors hover:bg-muted/50 ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
              >
                <span className="font-medium text-foreground">{item.material}</span>
                <span className="font-heading font-semibold text-secondary">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm text-center mt-6">
          * Preços sujeitos à alterações sem aviso prévio.
        </p>
      </div>
    </section>
  );
};

export default PriceTable;
