import { Recycle, TrendingUp, Shield, Truck } from "lucide-react";

const features = [
  { 
    icon: Recycle, 
    title: "Reciclagem Responsável", 
    desc: "Compromisso com o meio ambiente e descarte correto de materiais com rastreabilidade." 
  },
  { 
    icon: TrendingUp, 
    title: "Melhores Preços", 
    desc: "Valores competitivos baseados na cotação LME, atualizados diariamente." 
  },
  { 
    icon: Shield, 
    title: "Confiança Total", 
    desc: "Processos transparentes e pesagem monitorada para sua total segurança." 
  },
  { 
    icon: Truck, 
    title: "Logística Própria", 
    desc: "Frota preparada para coleta rápida no seu local com pontualidade." 
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Detalhe de luz de fundo para não ficar um preto chapado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6 tracking-tighter text-white">
            Por que escolher a <span className="text-[#22c55e]">R&R?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Unimos tecnologia e sustentabilidade para transformar sucata em valor. 
            Somos especialistas no mercado de <span className="text-white font-medium">metais não ferrosos</span> com foco em agilidade e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div 
              key={f.title} 
              className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:bg-[#161616] hover:border-[#22c55e]/30"
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-8 h-8 text-[#22c55e]" />
                </div>
                
                <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white tracking-tight">
                  {f.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;