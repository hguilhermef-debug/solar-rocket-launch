import { Building2, Home, Factory, Trees, Settings } from "lucide-react";
import empresasImg from "@/assets/empresas.jpg";

const services = [
  {
    icon: Building2,
    title: "Empresas",
    description: "Reduza custos operacionais e multiplique seus resultados financeiros eliminando gastos com energia elétrica.",
    highlight: "Economia de até R$ 312.000/ano",
  },
  {
    icon: Home,
    title: "Residências",
    description: "Conforto, economia e sustentabilidade para sua casa. Independência das distribuidoras de energia.",
    highlight: "Até 90% de economia na conta",
  },
  {
    icon: Factory,
    title: "Usinas Solares",
    description: "Sistemas de grande porte para geração massiva de energia. Venda ou transfira créditos para outros empreendimentos.",
    highlight: "Renda mensal significativa",
  },
  {
    icon: Trees,
    title: "Espaços Rurais",
    description: "Soluções para sítios, fazendas e áreas agrícolas. Energia limpa para propriedades rurais.",
    highlight: "Instalação adaptada ao terreno",
  },
  {
    icon: Settings,
    title: "Projetos Personalizados",
    description: "Expansões, múltiplas unidades e consumo elevado. Projetos sob demanda para necessidades específicas.",
    highlight: "Solução sob medida",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${empresasImg})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nossas Soluções
          </span>
          <h2 className="section-title text-foreground mb-4">
            Para Quem é a Energia Solar da{" "}
            <span className="text-gradient-blue">Ecosolartec</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos todos os perfis de consumo com projetos personalizados e eficientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-premium p-6 md:p-8 group transition-all duration-300 hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-medium text-primary">
                  {service.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
