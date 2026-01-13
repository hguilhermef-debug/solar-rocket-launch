import { Building2, Home, Factory, Trees, Settings } from "lucide-react";
import empresa1 from "@/assets/empresa-1.jpg";
import empresa2 from "@/assets/empresa-2.jpg";
import empresa3 from "@/assets/empresa-3.jpg";
import empresa4 from "@/assets/empresa-4.jpg";
import residencia1 from "@/assets/residencia-1.png";
import residencia2 from "@/assets/residencia-2.png";
import residencia3 from "@/assets/residencia-3.png";
import residencia4 from "@/assets/residencia-4.png";
import usina1 from "@/assets/usina-1.jpg";
import rural1 from "@/assets/rural-1.jpg";
import rural2 from "@/assets/rural-2.jpg";
import heroBg from "@/assets/hero-solar.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  {
    icon: Building2,
    title: "Empresas",
    description: "Reduza custos operacionais e multiplique seus resultados financeiros eliminando gastos com energia elétrica.",
    highlight: "Economia de até R$ 312.000/ano",
    images: [empresa1, empresa2, empresa3, empresa4],
    hasCarousel: true,
  },
  {
    icon: Home,
    title: "Residências",
    description: "Conforto, economia e sustentabilidade para sua casa. Independência das distribuidoras de energia.",
    highlight: "Até 90% de economia na conta",
    images: [residencia1, residencia2, residencia3, residencia4],
    hasCarousel: true,
  },
  {
    icon: Factory,
    title: "Usinas Solares",
    description: "Sistemas de grande porte para geração massiva de energia. Venda ou transfira créditos para outros empreendimentos.",
    highlight: "Renda mensal significativa",
    images: [usina1],
    hasCarousel: false,
  },
  {
    icon: Trees,
    title: "Espaços Rurais",
    description: "Soluções para sítios, fazendas e áreas agrícolas. Energia limpa para propriedades rurais.",
    highlight: "Instalação adaptada ao terreno",
    images: [rural1, rural2],
    hasCarousel: true,
  },
  {
    icon: Settings,
    title: "Projetos Personalizados",
    description: "Expansões, múltiplas unidades e consumo elevado. Projetos sob demanda para necessidades específicas.",
    highlight: "Solução sob medida",
    images: [],
    hasCarousel: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Nossas Soluções
          </span>
          <h2 className="section-title text-foreground mb-4">
            Veja Nossas Últimas{" "}
            <span className="text-gradient-blue">Instalações:</span>
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
              {/* Image section - Carousel */}
              {service.hasCarousel && service.images.length > 0 && (
                <div className="relative h-56 overflow-hidden">
                  <Carousel 
                    className="w-full h-full" 
                    opts={{ loop: true }}
                    plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                  >
                    <CarouselContent className="h-full">
                      {service.images.map((img, idx) => (
                        <CarouselItem key={idx} className="h-full">
                          <img 
                            src={img} 
                            alt={`Projeto ${service.title} ${idx + 1}`}
                            className="w-full h-56 object-contain bg-muted/50"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 h-8 w-8 bg-background/80 hover:bg-background border-primary/30" />
                    <CarouselNext className="right-2 h-8 w-8 bg-background/80 hover:bg-background border-primary/30" />
                  </Carousel>
                </div>
              )}
              
              {/* Single image for other cards */}
              {!service.hasCarousel && service.images.length > 0 && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.images[0]} 
                    alt={`Projeto ${service.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
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
        
        <div className="text-center mt-12">
          <WhatsAppButton size="large" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
