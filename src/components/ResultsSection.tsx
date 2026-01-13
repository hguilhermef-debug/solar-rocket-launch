import WhatsAppButton from "./WhatsAppButton";
import { TrendingUp, MapPin } from "lucide-react";

const projects = [
  { location: "Barueri - SP", modules: 192, economy: "R$ 120.000,00", type: "Empresarial" },
  { location: "Santana de Parnaíba - SP", modules: 280, economy: "R$ 192.000,00", type: "Empresarial" },
  { location: "Votuporanga - SP", modules: 400, economy: "R$ 312.000,00", type: "Empresarial" },
  { location: "Alphaville - SP", modules: 30, economy: "R$ 20.400,00", type: "Residencial" },
  { location: "Cotia - SP", modules: 24, economy: "R$ 16.800,00", type: "Residencial" },
  { location: "Jundiaí - SP", modules: 36, economy: "R$ 24.000,00", type: "Residencial" },
];

const ResultsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Resultados Comprovados
          </span>
          <h2 className="section-title text-foreground mb-4">
            Economia <span className="text-gradient-gold">Real</span> dos Nossos Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos reais com retorno financeiro concreto. Veja quanto nossos clientes economizam por ano.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-premium p-6 group transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 rounded text-xs font-medium bg-secondary/20 text-secondary">
                  {project.type}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{project.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <span className="text-sm">{project.modules} módulos instalados</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Economia anual</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xl md:text-2xl font-bold text-gradient-green">{project.economy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <WhatsAppButton size="default" />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
