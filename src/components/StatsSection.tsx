import { CheckCircle2, Building2, Calendar } from "lucide-react";

const stats = [
  {
    number: "+1300",
    label: "Projetos Instalados",
    icon: CheckCircle2,
  },
  {
    number: "+10",
    label: "Anos de Mercado",
    icon: Calendar,
  },
  {
    number: "4",
    label: "Tipos de Projetos",
    icon: Building2,
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
            Referência em <span className="text-gradient-green">Energia Solar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Números que comprovam nossa autoridade no mercado fotovoltaico
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-premium p-6 md:p-8 text-center transition-all duration-300 hover:scale-105"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="stat-number text-gradient-green mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    </section>
  );
};

export default StatsSection;
