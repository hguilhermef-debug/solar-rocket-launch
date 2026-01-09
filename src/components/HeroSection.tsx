import WhatsAppButton from "./WhatsAppButton";
import heroBg from "@/assets/hero-solar.jpg";
import { Sun, Zap, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-8 backdrop-blur-sm">
          <Sun className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">+10 anos de experiência</span>
        </div>
        
        {/* Headline */}
        <h1 className="hero-title text-foreground max-w-5xl mx-auto mb-6">
          Reduza drasticamente seus custos com energia usando um{" "}
          <span className="text-gradient-green">sistema solar inteligente</span>{" "}
          e sob medida
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Mais de <span className="text-foreground font-semibold">1300 projetos</span> entregues em SP e SC, 
          para empresas, residências, usinas e áreas rurais.
        </p>
        
        {/* CTA */}
        <div className="mb-8">
          <WhatsAppButton size="large" />
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Pronta entrega</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Até 90% de economia</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
