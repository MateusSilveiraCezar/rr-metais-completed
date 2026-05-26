import { useEffect, useState } from "react";

// Tipagem simples para os dados
interface PriceItem {
  material: string;
  price: string;
}

const PriceTable = () => {
  const [prices, setPrices] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState(true);

  // COLOQUE AQUI O LINK QUE VOCÊ COPIOU DO "PUBLICAR NA WEB"
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_JIcbRxmNvhl45thhx_6jT4VvRTZel5uKAbwzO17bEDZIqDSVrzNIDlCMCYljhl4bFlHXJlbYdm73/pub?output=csv";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SHEET_URL);
        const csvText = await response.text();
        
        // O /\r?\n/ garante que vai quebrar a linha do jeito certo, removendo caracteres invisíveis
        const lines = csvText.split(/\r?\n/).slice(1);
        
        const parsedData = lines
          .map((line) => {
            // Divide por vírgula APENAS se a vírgula não estiver dentro de aspas duplas
            const parts = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            
            const material = parts[0] || "";
            const price = parts[1] || "";

            return { 
              // O replace(/"/g, '') faz uma limpeza geral removendo qualquer aspa dupla
              material: material.replace(/"/g, '').trim(), 
              price: price.replace(/"/g, '').trim() 
            };
          })
          .filter((item) => item.material); // Remove linhas em branco

        setPrices(parsedData);
      } catch (error) {
        console.error("Erro ao ler planilha:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="precos" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tighter text-white">
            Tabela de <span className="text-[#22c55e]">Preços</span>
          </h2>
          <p className="text-gray-400 font-light">
            Atualizado via Nuvem — Valores para pagamento à vista
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#111] shadow-2xl">
          <div className="bg-[#1a1a1a] px-8 py-4 flex justify-between border-b border-white/5 font-heading text-xs uppercase tracking-[0.2em] font-bold">
            <span className="text-gray-500">Material</span>
            <span className="text-[#22c55e]">R$ / KG</span>
          </div>

          <div className="divide-y divide-white/5">
            {loading ? (
              <div className="p-20 text-center">
                <div className="inline-block w-8 h-8 border-4 border-[#22c55e]/20 border-t-[#22c55e] rounded-full animate-spin" />
                <p className="text-gray-500 mt-4 text-xs uppercase tracking-widest">Sincronizando com a nuvem...</p>
              </div>
            ) : (
              prices.map((item) => (
                <div key={item.material} className="flex justify-between items-center px-8 py-5 hover:bg-[#22c55e]/5 transition-colors group">
                  <span className="font-semibold text-gray-300 group-hover:text-white">{item.material}</span>
                  <span className="font-heading font-bold text-white text-xl">
                    <span className="text-[#22c55e] text-sm mr-1">R$</span>{item.price}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTable;