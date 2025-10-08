# Site Blog - Landing Page e Blog Community

Um projeto moderno de landing page e blog desenvolvido com Next.js, TypeScript e Tailwind CSS, seguindo o design do Figma.

## 🎨 Design

O projeto foi desenvolvido seguindo o design disponível no Figma:
[Landing Page e Blog - Community](https://www.figma.com/design/ambWrom54e9wmRlZLGwx3H/Landing-Page-e-Blog--Community-?node-id=3-376&t=sIXesnAexvBfr1MW-0)

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.4** - Framework React para produção
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Superset do JavaScript com tipagem estática
- **Tailwind CSS 3.4.18** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e sem estilo
- **Lucide React** - Ícones SVG
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── active-link/     # Componente de link ativo
│   ├── footer/          # Rodapé da aplicação
│   ├── header/          # Cabeçalho da aplicação
│   ├── layout/          # Layout principal
│   ├── logo/            # Componente do logo
│   └── ui/              # Componentes de UI base
├── lib/                 # Utilitários e configurações
├── pages/               # Páginas da aplicação
│   ├── api/             # API routes
│   ├── _app.tsx         # Configuração global da aplicação
│   ├── _document.tsx    # Documento HTML customizado
│   └── index.tsx        # Página inicial
└── styles/              # Estilos globais
```

## 🎨 Sistema de Design

### Paleta de Cores

- **Azul**: `#2C85FC`, `#2266C1`, `#0D284C`
- **Ciano**: `#2DEBFC`, `#187D86`, `#0E474C`
- **Cinza**: `#F9FAFC`, `#D3D5D9`, `#93979F`, `#20242C`, `#16181D`

### Tipografia

- **Headings**: PT Sans Caption (700)
- **Body**: Inter (400)
- **Actions**: Inter (500)

### Componentes

- Sistema de componentes baseado em Radix UI
- Variantes de botões e elementos interativos
- Layout responsivo com Tailwind CSS

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd site-blog
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código com Prettier
- `npm run format:check` - Verifica se o código está formatado

## 🏗️ Funcionalidades

### Layout Principal

- **Header fixo** com navegação e logo
- **Navegação responsiva** com links ativos
- **Footer** com links institucionais
- **Layout flexível** que se adapta ao conteúdo

### Componentes

- **ActiveLink**: Componente de navegação com estado ativo
- **Button**: Botões com múltiplas variantes
- **Logo**: Componente do logo da aplicação
- **Layout**: Estrutura principal da aplicação

### Páginas

- **Home**: Página inicial (em desenvolvimento)
- **Blog**: Página do blog (em desenvolvimento)
- **Start Now**: Página de início (em desenvolvimento)

## 🎯 Próximos Passos

- [ ] Implementar conteúdo da página inicial
- [ ] Desenvolver sistema de blog
- [ ] Adicionar funcionalidades de busca
- [ ] Implementar sistema de comentários
- [ ] Adicionar testes unitários
- [ ] Configurar CI/CD

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através dos canais disponíveis no projeto.

---

Desenvolvido com ❤️ usando Next.js e Tailwind CSS
