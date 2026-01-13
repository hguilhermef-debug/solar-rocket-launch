# Tema WordPress Ecosolartec

## Arquivos do Tema

Este pacote contém os seguintes arquivos para criar o tema WordPress da Ecosolartec:

### Arquivos Principais (remova a extensão .txt ao usar)

1. **style.css** - Folha de estilos principal do tema com todas as cores, tipografia e componentes
2. **functions.php** - Funções do tema, customizer, menus e configurações
3. **header.php** - Template do cabeçalho com logo e navegação
4. **footer.php** - Template do rodapé com informações de contato e botão flutuante do WhatsApp
5. **front-page.php** - Template da página inicial (landing page completa)
6. **index.php** - Template principal para listagem de posts

## Instalação

1. Crie uma pasta chamada `ecosolartec` na pasta `wp-content/themes/` do seu WordPress
2. Copie todos os arquivos para essa pasta, removendo a extensão `.txt`
3. Crie a pasta `assets/images/` dentro do tema
4. Faça upload das suas imagens:
   - `residencial.jpg` - Foto de instalação residencial
   - `empresarial.jpg` - Foto de instalação empresarial
   - `rural.jpg` - Foto de instalação rural
   - `usinas.jpg` - Foto de usina solar
   - `ambiente.jpg` - Foto relacionada ao meio ambiente
5. Ative o tema no painel do WordPress (Aparência > Temas)

## Configurações

Após ativar o tema, vá em **Aparência > Personalizar** para configurar:

### WhatsApp
- Número do WhatsApp (com código do país): 5511951296429
- Mensagem padrão de contato

### Seção Hero
- Título principal
- Subtítulo
- Imagem de fundo

### Estatísticas
- Números e legendas das 4 estatísticas exibidas

### Informações de Contato
- Telefone
- E-mail
- Endereço

### Logo
- Faça upload do logo em Aparência > Personalizar > Identidade do Site

### Menus
Configure os menus em Aparência > Menus:
- **Menu Principal** - Exibido no cabeçalho
- **Menu Rodapé** - Exibido no rodapé

## Estrutura de Pastas Recomendada

```
ecosolartec/
├── assets/
│   ├── images/
│   │   ├── residencial.jpg
│   │   ├── empresarial.jpg
│   │   ├── rural.jpg
│   │   ├── usinas.jpg
│   │   └── ambiente.jpg
│   └── js/
│       └── main.js (opcional)
├── style.css
├── functions.php
├── header.php
├── footer.php
├── front-page.php
├── index.php
└── screenshot.png (1200x900px para preview do tema)
```

## Recursos

- Design responsivo (mobile-first)
- Dark mode por padrão
- Cores personalizáveis via CSS variables
- Botão flutuante do WhatsApp
- Seções otimizadas para conversão
- SEO-friendly
- Performance otimizada

## Personalizações Avançadas

Para alterar cores, edite as CSS variables no arquivo `style.css`:

```css
:root {
  --primary: 142 71% 45%;      /* Verde principal (botões) */
  --secondary: 217 91% 60%;    /* Azul (destaques) */
  --accent: 45 93% 47%;        /* Amarelo (acentos) */
  --background: 240 10% 4%;    /* Fundo escuro */
}
```

## Suporte

Para dúvidas sobre a implementação, entre em contato através do WhatsApp.
