import { Package, HeartHandshake, Clock, Award, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Package,
    title: "Produtos à Pronta Entrega",
    description: "Estoque próprio para agilizar a instalação do seu projeto sem atrasos.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento de Qualidade",
    description: "Suporte especializado do primeiro contato até após a instalação.",
  },
  {
    icon: Clock,
    title: "Serviço Rápido e Eficaz",
    description: "Equipe técnica experiente que entrega projetos no prazo combinado.",
  },
  {
    icon: Award,
    title: "Especialização Comprovada",
    description: "Mais de 10 anos de experiência exclusiva em energia solar fotovoltaica.",
  },
  {
    icon: MapPin,
    title: "Referência Regional",
    description: "Reconhecidos em todo estado de São Paulo e Santa Catarina pela qualidade.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Diferenciais
            </span>
            <h2 className="section-title text-foreground mb-6">
              Por que escolher a{" "}
              <span className="text-gradient-blue">Ecosolartec</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Combinamos experiência, qualidade e agilidade para entregar o melhor projeto 
              de energia solar para você.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 font-display">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="card-premium p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mx-auto mb-6 animate-float">
                <span className="text-4xl">☀️</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
                O Melhor da Energia Solar
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Seja bem-vindo à Ecosolartec. Somos especializados na comercialização e 
                instalação de produtos de Energia Solar.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-gradient-green font-display">+1300</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="text-3xl font-bold text-gradient-gold font-display">+10</div>
                  <div className="text-sm text-muted-foreground">Anos</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
