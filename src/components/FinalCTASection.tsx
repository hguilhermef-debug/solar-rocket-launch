import WhatsAppButton from "./WhatsAppButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Análise personalizada do seu consumo",
  "Projeto dimensionado sob medida",
  "Orçamento transparente e detalhado",
  "Atendimento em SP e SC",
];

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-2xl">☀️</span>
            <span className="text-primary font-medium">Comece a economizar hoje</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
            Solicite agora um projeto solar{" "}
            <span className="text-gradient-green">sob medida</span>{" "}
            para o seu consumo
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nossa equipe está pronta para analisar sua conta de energia e apresentar 
            a melhor solução para você começar a economizar.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <WhatsAppButton size="large" className="animate-pulse-glow" />
          
          <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <ArrowRight className="w-4 h-4" />
            Resposta rápida via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
