import WhatsAppButton from "./WhatsAppButton";
import { ArrowRight, TrendingDown } from "lucide-react";

const SavingsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Comparativo Real
          </span>
          <h2 className="section-title text-foreground mb-4">
            Quanto é Possível{" "}
            <span className="text-gradient-green">Economizar</span>?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div className="card-premium p-8 border-destructive/30">
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
                  ANTES
                </span>
                
                <div className="mb-6">
                  <TrendingDown className="w-16 h-16 text-destructive mx-auto mb-4" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-destructive mb-2 font-display">
                  100%
                </div>
                <p className="text-muted-foreground">
                  do valor da conta de energia
                </p>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Dependência total da distribuidora de energia elétrica
                  </p>
                </div>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-primary items-center justify-center z-10">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            
            {/* After */}
            <div className="card-premium p-8 border-primary/30 glow-green relative">
              <div className="text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  DEPOIS
                </span>
                
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <span className="text-3xl">☀️</span>
                  </div>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-gradient-green mb-2 font-display">
                  Até 90%
                </div>
                <p className="text-foreground font-medium">
                  de economia na conta
                </p>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Autonomia energética com sistema fotovoltaico próprio
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            * A economia pode variar de acordo com o consumo de energia, local de instalação, 
            qualidade do serviço, produtos utilizados e quantidade de placas fotovoltaicas.
          </p>
          
          <div className="text-center mt-10">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
