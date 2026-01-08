import { Leaf, Wind, Droplets, Recycle } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Fonte Renovável",
    description: "Utiliza a luz do sol, um recurso natural abundante que não se esgota.",
  },
  {
    icon: Wind,
    title: "Zero Emissão de Poluentes",
    description: "Não libera gases de efeito estufa, contribuindo para a qualidade do ar.",
  },
  {
    icon: Droplets,
    title: "Menor Impacto Ambiental",
    description: "Instalação com baixo impacto em comparação com usinas tradicionais.",
  },
  {
    icon: Recycle,
    title: "Sustentabilidade",
    description: "Reduce a dependência de combustíveis fósseis com alto impacto ambiental.",
  },
];

const EnvironmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sustentabilidade
          </span>
          <h2 className="section-title text-foreground mb-4">
            Benefícios para o{" "}
            <span className="text-gradient-green">Meio Ambiente</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Além da economia, a energia solar contribui para um planeta mais sustentável
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-premium p-6 text-center group transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
