import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 md:py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
              <span className="text-gradient-green">Eco</span>solartec
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Especializados na comercialização e instalação de produtos de Energia Solar. 
              Mais de 10 anos transformando luz do sol em economia para nossos clientes.
            </p>
            
            {/* Social */}
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/ecosolartec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/ecosolartec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* São Paulo */}
          <div>
            <h4 className="font-bold text-foreground mb-4 font-display">São Paulo</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5511951296429" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (11) 95129-6429
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua São Fernando, 1304 - Jandira, SP</span>
              </div>
            </div>
          </div>
          
          {/* Santa Catarina */}
          <div>
            <h4 className="font-bold text-foreground mb-4 font-display">Santa Catarina</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5549991259997" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (49) 99125-9997
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Curitiba 305D - Centro de Chapecó</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ecosolartec. Todos os direitos reservados.
          </p>
          <a 
            href="https://ecosolartec.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            ecosolartec.com.br
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
