# Programar do Zero

[![Jekyll](https://img.shields.io/badge/Jekyll-4.0+-red.svg)](https://jekyllrb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Stimulus](https://img.shields.io/badge/Stimulus-3.0+-77E8B9?logo=hotwire&logoColor=white)](https://stimulus.hotwired.dev/)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felipefontoura/programar-do-zero/build-deploy.yml?branch=stable&label=build)](https://github.com/felipefontoura/programar-do-zero/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Programar do Zero website.

## 🚀 Features

- Static site generation with Jekyll
- Modern UI with Tailwind CSS v4
- Interactive UI components with Stimulus.js
- Optimized production builds with minified assets
- Development environment with live reloading

## 🛠️ Tech Stack

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Stimulus.js](https://stimulus.hotwired.dev/) - JavaScript framework for HTML-driven interfaces
- [Node.js](https://nodejs.org/) - JavaScript runtime for build tools
- [Foreman](https://github.com/ddollar/foreman) - Process manager for development
- [esbuild](https://esbuild.github.io/) - JavaScript bundler

## 📋 Prerequisites

- Ruby 2.7+
- Node.js 14+
- Bundler
- npm

## 🔧 Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/programar-do-zero.git
   cd programar-do-zero
   ```

2. Install Ruby dependencies

   ```bash
   bundle install
   ```

3. Install Node.js dependencies

   ```bash
   npm install
   ```

## 💻 Development

Start the development server with:

```bash
foreman start -f Procfile.dev
```

This will:

- Start Jekyll server with live reloading
- Watch and compile Tailwind CSS changes
- Bundle JavaScript with Stimulus controllers

Visit `http://localhost:4000` to see your site.

## 🌐 Deployment

The site is automatically deployed via GitHub Actions when changes are pushed to the `stable` branch.

## 📁 Project Structure

```text
programar-do-zero/
├── _layouts/           # Layout templates
├── _includes/          # Reusable components
├── assets/
│   ├── css/            # CSS files
│   │   ├── main.tailwind.css  # Tailwind source
│   │   ├── main.css           # Development CSS
│   │   └── main.min.css       # Production CSS (minified)
│   ├── js/             # JavaScript files
│   │   ├── controllers/       # Stimulus controllers
│   │   ├── main.js            # Main JavaScript entry point
│   │   ├── main.bundle.js     # Development JS bundle
│   │   └── main.bundle.min.js # Production JS bundle (minified)
│   └── images/         # Image files
├── _config.yml         # Jekyll configuration
├── package.json        # Node.js dependencies
├── Procfile.dev        # Development processes
├── build.sh            # Production build script
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
