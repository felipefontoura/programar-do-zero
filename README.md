# Programar do Zero 🇧🇷

[![Jekyll](https://img.shields.io/badge/Jekyll-4.0+-red.svg)](https://jekyllrb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Stimulus](https://img.shields.io/badge/Stimulus-3.0+-77E8B9?logo=hotwire&logoColor=white)](https://stimulus.hotwired.dev/)
[![esbuild](https://img.shields.io/badge/esbuild-0.19+-FFCF00?logo=esbuild&logoColor=black)](https://esbuild.github.io/)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felipefontoura/programar-do-zero/build-deploy.yml?branch=stable&label=build)](https://github.com/felipefontoura/programar-do-zero/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made in Brazil](https://img.shields.io/badge/Made%20in-Brazil-009c3b?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MjAiIGhlaWdodD0iNTA0IiB2aWV3Qm94PSIwIDAgNzIwIDUwNCI+PHBhdGggZmlsbD0iIzAwOTkzYiIgZD0iTTAgMGg3MjB2NTA0SDB6Ii8+PHBhdGggZmlsbD0iI2ZlZGUwMCIgZD0iTTM2MCAyNTJMMTIwIDQ1Nmg0ODBMMzYwIDUyeiIvPjxjaXJjbGUgY3g9IjM2MCIgY3k9IjI1MiIgcj0iODUiIGZpbGw9IiMwMDI3NzYiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzM3IDI5NGMtMjQtMTUtMjQtNDYgMC02MWE1MiA1MiAwIDAgMSA0NiAwYzI0IDE1IDI0IDQ2IDAgNjFhNTIgNTIgMCAwIDEtNDYgMHoiLz48L3N2Zz4=)](https://pt.wikipedia.org/wiki/Brasil)

Onde o código liberta mentes e os sonhos ganham asas. 🚀

> *"Feito com ☕ café, </> código e paixão pela tecnologia brasileira."*

## 🚀 Funcionalidades

- Geração de site estático com Jekyll
- Interface moderna com Tailwind CSS v4
- Componentes interativos com Stimulus.js
- Builds otimizados para produção com assets minificados
- Ambiente de desenvolvimento com recarregamento automático

## 🛠️ Stack Tecnológica

- [Jekyll](https://jekyllrb.com/) - Gerador de sites estáticos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Stimulus.js](https://stimulus.hotwired.dev/) - Framework JavaScript para interfaces orientadas a HTML
- [Node.js](https://nodejs.org/) - Runtime JavaScript para ferramentas de build
- [Foreman](https://github.com/ddollar/foreman) - Gerenciador de processos para desenvolvimento
- [esbuild](https://esbuild.github.io/) - Empacotador JavaScript

## 📋 Pré-requisitos

- Ruby 2.7+
- Node.js 14+
- Bundler
- npm

## 🔧 Instalação

1. Clone o repositório

   ```bash
   git clone https://github.com/yourusername/programar-do-zero.git
   cd programar-do-zero
   ```

2. Instale as dependências Ruby

   ```bash
   bundle install
   ```

3. Instale as dependências Node.js

   ```bash
   npm install
   ```

## 💻 Desenvolvimento

Inicie o servidor de desenvolvimento com:

```bash
foreman start -f Procfile.dev
```

Isso irá:

- Iniciar o servidor Jekyll com recarregamento automático
- Observar e compilar alterações no Tailwind CSS
- Empacotar JavaScript com controladores Stimulus

Acesse `http://localhost:4000` para ver seu site.

## 🌐 Implantação

O site é automaticamente implantado via GitHub Actions quando mudanças são enviadas para a branch `stable`.

## 📁 Estrutura do Projeto

```text
programar-do-zero/
├── _layouts/           # Templates de layout
├── _includes/          # Componentes reutilizáveis
├── assets/
│   ├── css/            # Arquivos CSS
│   │   ├── main.tailwind.css  # Fonte do Tailwind
│   │   ├── main.css           # CSS de desenvolvimento
│   │   └── main.min.css       # CSS de produção (minificado)
│   ├── js/             # Arquivos JavaScript
│   │   ├── controllers/       # Controladores Stimulus
│   │   ├── main.js            # Ponto de entrada principal do JavaScript
│   │   ├── main.bundle.js     # Bundle JS de desenvolvimento
│   │   └── main.bundle.min.js # Bundle JS de produção (minificado)
│   └── images/         # Arquivos de imagem
├── _config.yml         # Configuração do Jekyll
├── package.json        # Dependências Node.js
├── Procfile.dev        # Processos de desenvolvimento
├── build.sh            # Script de build para produção
```

## ✅ TODO

### 🎨 Design

- [ ] 🖌️ Identidade Visual
- [ ] ✨ Logotipo
- [ ] 🖼️ Banners e Redes Sociais

### 📄 Páginas

- [ ] 🏠 Home
- [ ] 🧠 Formações, Trilhas, Cursos e Aulas
- [ ] 🔄 Compartilhar
- [ ] 💬 Depoimentos
- [ ] 👥 Comunidade (Discord)
- [ ] 🎁 Doação para entidades carentes
- [ ] 👨‍💻 Colaboradores

### 📊 Progresso

- [ ] ✓ Marcar como concluído

### 🎓 Certificado

- [ ] 📜 Geração de Certificado
- [ ] 📱 QR Code / conferência
- [ ] 🔗 Compartilhar no LinkedIn

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/recurso-incrivel`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona algum recurso incrível'`)
4. Envie para a branch (`git push origin feature/recurso-incrivel`)

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" width="30">
  Orgulhosamente desenvolvido no Brasil
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" width="30">
</p>
