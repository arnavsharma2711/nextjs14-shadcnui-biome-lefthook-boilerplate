# Next.js 14, Shadcn UI, Biome, and Lefthook Boilerplate

This is a boilerplate project setup for Next.js 14, Shadcn UI, Biome, and Lefthook. It includes a basic configuration to get you started with building a modern web application.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow the instructions below:

1. **Clone the repository:**

```
git clone https://github.com/arnavsharma2711/nextjs14-shadcnui-biome-lefthook-boilerplate.git
cd nextjs14-shadcnui-biome-lefthook-boilerplate
```

2. **Install dependencies:**

```

npm install

```

3. **Run the development server:**

```

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```
├── app/ # Source code
├── components/ # React components
├── lib/ # Utility functions
├── public/ # Static assets
├── .gitignore # Git ignore file
├── biome.json # Biome configuration
├── components.json # ShadcnUI configuration
├── lefthook.yml # Lefthook configuration
├── next.config.js # Next.js configuration
├── package.json # Package dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── README.md # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json # Typescript configuration
```

## Scripts

- **`npm run dev`**: Runs the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the application in production mode.
- **`npm run check`**: Runs Biome checks and applies fixes.

## Dependencies

- **`class-variance-authority`**: ^0.7.0
- **`clsx`**: ^2.1.1
- **`lucide-react`**: ^0.424.0
- **`next`**: 14.2.5
- **`react`**: ^18
- **`react-dom`**: ^18
- **`tailwind-merge`**: ^2.4.0
- **`tailwindcss-animate`**: ^1.0.7

## Dev Dependencies

- **`@biomejs/biome`**: 1.8.3
- **`@types/node`**: ^20
- **`@types/react`**: ^18
- **`@types/react-dom`**: ^18
- **`lefthook`**: ^1.7.11
- **`postcss`**: ^8
- **`tailwindcss`**: ^3.4.1
- **`typescript`**: ^5

## Configuration

### Tailwind CSS

Tailwind CSS is configured in `tailwind.config.js`. You can customize the theme and extend it as per your requirements.

### Lefthook

Lefthook is configured in `lefthook.yml`. It helps to manage Git hooks and automate tasks.

### Biome

Biome is used for checking code quality. You can run the checks using the following command:

```
npm run check
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License.

```
Feel free to customize the README.md file to better suit your project's needs.
```
