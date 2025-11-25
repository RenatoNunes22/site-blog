# Site Blog - Landing Page and Blog Community

A modern landing page and blog project developed with Next.js, TypeScript, and Tailwind CSS, following the design from Figma.

## 🎨 Design

The project was developed following the design available on Figma:
[Landing Page and Blog - Community](https://www.figma.com/design/ambWrom54e9wmRlZLGwx3H/Landing-Page-e-Blog--Community-?node-id=3-376&t=sIXesnAexvBfr1MW-0)

## 🚀 Technologies Used

- **Next.js 15.5.4** - React framework for production
- **React 19.1.0** - Library for user interfaces
- **TypeScript 5** - JavaScript superset with static typing
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Radix UI** - Accessible and unstyled components
- **Lucide React** - SVG Icons
- **Contentlayer** - Content SDK that validates and transforms your content into type-safe JSON data
- **ESLint** - Linter for JavaScript/TypeScript
- **Prettier** - Code formatter

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── active-link/     # Active link component
│   ├── footer/          # Application footer
│   ├── header/          # Application header
│   ├── layout/          # Main layout
│   ├── logo/            # Logo component
│   └── ui/              # Base UI components
├── lib/                 # Utilities and configurations
├── pages/               # Application pages
│   ├── api/             # API routes
│   ├── _app.tsx         # Global application configuration
│   ├── _document.tsx    # Custom HTML document
│   └── index.tsx        # Home page
└── styles/              # Global styles
```

## 🎨 Design System

### Color Palette

- **Blue**: `#2C85FC`, `#2266C1`, `#0D284C`
- **Cyan**: `#2DEBFC`, `#187D86`, `#0E474C`
- **Gray**: `#F9FAFC`, `#D3D5D9`, `#93979F`, `#20242C`, `#16181D`

### Typography

- **Headings**: PT Sans Caption (700)
- **Body**: Inter (400)
- **Actions**: Inter (500)

### Components

- Component system based on Radix UI
- Button variants and interactive elements
- Responsive layout with Tailwind CSS

## 🛠️ Installation and Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd site-blog
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the project in development mode**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates the production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs the linter
- `npm run format` - Formats the code with Prettier
- `npm run format:check` - Checks if the code is formatted

## 🏗️ Features

### Main Layout

- **Fixed Header** with navigation and logo
- **Responsive Navigation** with active links
- **Footer** with institutional links
- **Flexible Layout** that adapts to content

### Components

- **ActiveLink**: Navigation component with active state
- **Button**: Buttons with multiple variants
- **Logo**: Application logo component
- **Layout**: Main application structure

### Pages

- **Home**: Home page
- **Blog**: Blog page with search and post listing
- **Start Now**: Start page

## 🎯 Next Steps

- [x] Implement home page content
- [x] Develop blog system
- [x] Add search functionality
- [ ] Implement comment system
- [ ] Add unit tests
- [ ] Configure CI/CD

## 🤝 Contribution

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the `LICENSE` file for more details.

## 📞 Contact

For questions or suggestions, please contact us through the available channels in the project.

---

Developed with ❤️ using Next.js and Tailwind CSS
