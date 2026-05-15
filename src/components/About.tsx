import { Recycle, TrendingUp, Shield, Truck } from "lucide-react";

const features = [
  { icon: Recycle, title: "Reciclagem Responsável", desc: "Compromisso com o meio ambiente e descarte correto de materiais." },
  { icon: TrendingUp, title: "Melhores Preços", desc: "Valores competitivos e atualizados diariamente pelo mercado." },
  { icon: Shield, title: "Confiança", desc: "Anos de experiência no mercado de metais e sucatas." },
  { icon: Truck, title: "Coleta no Local", desc: "Buscamos sua sucata com agilidade e praticidade." },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-4">
          Por que a <span className="text-gradient-primary">R&R?</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Somos referência na compra e venda de metais não ferrosos, oferecendo os melhores preços e atendimento de qualidade.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold uppercase mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
