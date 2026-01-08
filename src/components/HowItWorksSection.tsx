import { Sun, Zap, Gauge, Grid3X3, Wallet } from "lucide-react";

const steps = [
  {
    icon: Sun,
    title: "Painéis Fotovoltaicos",
    description: "Captam a radiação solar e geram energia em corrente contínua.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Inversor",
    description: "Transforma a corrente contínua em corrente alternada, utilizável em sua propriedade.",
    color: "text-primary",
  },
  {
    icon: Gauge,
    title: "Medidor de Energia",
    description: "Distribui a energia em corrente alternada para alimentar seus equipamentos elétricos.",
    color: "text-secondary",
  },
  {
    icon: Grid3X3,
    title: "Rede Elétrica",
    description: "O excedente de energia é enviado à rede como crédito para uso posterior.",
    color: "text-accent",
  },
  {
    icon: Wallet,
    title: "Créditos de Energia",
    description: "Use os créditos quando não houver geração solar, como à noite ou dias nublados.",
    color: "text-primary",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Simples e Eficiente
          </span>
          <h2 className="section-title text-foreground mb-4">
            Como Funciona a{" "}
            <span className="text-gradient-gold">Energia Solar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um sistema inteligente que transforma luz do sol em economia real na sua conta de energia
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-primary to-secondary opacity-30" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className="card-premium p-6 text-center h-full transition-all duration-300 hover:scale-105">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                    {index + 1}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-card flex items-center justify-center mx-auto mb-4 mt-2 ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
