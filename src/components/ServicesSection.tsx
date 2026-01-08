import { Building2, Home, Factory, Trees, Settings } from "lucide-react";
import empresasImg from "@/assets/empresas.jpg";
import residenciasImg from "@/assets/residencias.jpg";
import usinasImg from "@/assets/usinas.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Posições para recortar cada uma das 4 imagens do grid 2x2
const imagePositions = [
  "0% 0%",      // top-left
  "100% 0%",    // top-right
  "0% 100%",    // bottom-left
  "100% 100%",  // bottom-right
];

const services = [
  {
    icon: Building2,
    title: "Empresas",
    description: "Reduza custos operacionais e multiplique seus resultados financeiros eliminando gastos com energia elétrica.",
    highlight: "Economia de até R$ 312.000/ano",
    image: empresasImg,
    hasCarousel: true,
  },
  {
    icon: Home,
    title: "Residências",
    description: "Conforto, economia e sustentabilidade para sua casa. Independência das distribuidoras de energia.",
    highlight: "Até 90% de economia na conta",
    image: residenciasImg,
    hasCarousel: true,
  },
  {
    icon: Factory,
    title: "Usinas Solares",
    description: "Sistemas de grande porte para geração massiva de energia. Venda ou transfira créditos para outros empreendimentos.",
    highlight: "Renda mensal significativa",
    image: usinasImg,
    hasCarousel: false,
  },
  {
    icon: Trees,
    title: "Espaços Rurais",
    description: "Soluções para sítios, fazendas e áreas agrícolas. Energia limpa para propriedades rurais.",
    highlight: "Instalação adaptada ao terreno",
    image: null,
    hasCarousel: false,
  },
  {
    icon: Settings,
    title: "Projetos Personalizados",
    description: "Expansões, múltiplas unidades e consumo elevado. Projetos sob demanda para necessidades específicas.",
    highlight: "Solução sob medida",
    image: null,
    hasCarousel: false,
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
              className="card-premium overflow-hidden group transition-all duration-300 hover:border-primary/30"
            >
              {/* Image section - Carousel for Empresas and Residências */}
              {service.image && service.hasCarousel && (
                <div className="relative h-48 overflow-hidden">
                  <Carousel className="w-full h-full" opts={{ loop: true }}>
                    <CarouselContent className="h-full">
                      {imagePositions.map((position, idx) => (
                        <CarouselItem key={idx} className="h-full">
                          <div 
                            className="w-full h-48 bg-cover transition-transform duration-500"
                            style={{ 
                              backgroundImage: `url(${service.image})`,
                              backgroundPosition: position,
                              backgroundSize: "200% 200%"
                            }}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 h-8 w-8 bg-background/80 hover:bg-background border-primary/30" />
                    <CarouselNext className="right-2 h-8 w-8 bg-background/80 hover:bg-background border-primary/30" />
                  </Carousel>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </div>
              )}
              
              {/* Single image for other cards */}
              {service.image && !service.hasCarousel && (
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`Projeto ${service.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              
              <div className="p-6 md:p-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
