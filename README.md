# Gemini Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Deployment](https://img.shields.io/badge/Deployed-GitHub%20Pages-green.svg)](https://m-ganesh123.github.io/Gemini-Clone/)

A modern, responsive web application that replicates the user interface and core interaction patterns of Google's Gemini AI chatbot. Built with React, this clone provides a sleek chat-based experience for simulating AI conversations, complete with dynamic messaging, input handling, and themed styling inspired by the original Gemini design.

## 🚀 Features

- **Chat Interface**: Real-time message rendering with user and AI message bubbles, mimicking Gemini's conversational flow.
- **Responsive Design**: Fully adaptive layout for desktop, tablet, and mobile devices using CSS Flexbox and media queries.
- **Interactive Input**: Type-ahead text input with send functionality and message history persistence.
- **Themed UI**: Clean, minimalist design with Google-inspired color palette (blues, whites, and accents) and smooth animations.
- **Accessibility**: Keyboard navigation, ARIA labels, and high-contrast mode support for inclusive user experience.
- **Performance Optimized**: Leverages React's virtual DOM for efficient updates and lazy loading for assets.

This clone focuses on the frontend UI/UX; backend integration (e.g., actual AI API calls) can be extended via custom hooks.

## 📱 Live Demo

Experience the Gemini Clone in action:  
[https://m-ganesh123.github.io/Gemini-Clone/](https://m-ganesh123.github.io/Gemini-Clone/)

*Note: JavaScript must be enabled in your browser for full functionality.*

## 🛠 Tech Stack

- **Frontend Framework**: React 18.2.0 (with Create React App)
- **Styling**: CSS Modules for scoped styles
- **Build Tool**: Vite/Webpack via CRA
- **Deployment**: GitHub Pages
- **Other Libraries**: None (vanilla React for simplicity; extensible with Axios for API calls or Styled-Components for advanced theming)

## 🏗 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/M-Ganesh123/Gemini-Clone.git
   cd Gemini-Clone
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

   This will launch the app at `http://localhost:3000`.

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits. You may also see lint errors in the console.

#### `npm test`
Launches the test runner in interactive watch mode.  
See the [Testing section](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified, and filenames include hashes.  
Your app is ready to be deployed!

#### `npm run eject`
**Note: this is a one-way operation.** Once you `eject`, you can't go back!  
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.  
Instead, it will copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All commands except `eject` will still work, but they will now point to the copied scripts so you can tweak them. At this point, you're on your own.  
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This project is deployed to GitHub Pages for easy access. To deploy your own version:

1. Build the project: `npm run build`
2. Install `gh-pages` globally: `npm install -g gh-pages`
3. Add to `package.json` scripts: `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

For more details, see the [Deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## 📁 Project Structure

```
Gemini-Clone/
├── public/
│   ├── index.html          # Main HTML entry point
│   └── favicon.ico         # App icon
├── src/
│   ├── App.js              # Root component with chat logic
│   ├── App.css             # Global styles for the chat UI
│   ├── index.js            # React app bootstrap
│   └── index.css           # Base styles
├── package.json            # Dependencies and scripts
└── README.md               # This file!
```

## 🔧 Customization

- **Add AI Backend**: Integrate with OpenAI or Gemini API in `App.js` using `useState` for messages and `fetch` for responses.
- **Enhance Styling**: Extend `App.css` with CSS-in-JS libraries like Emotion.
- **Add Features**: Implement file uploads, voice input, or dark mode toggle.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

For major changes, please open an issue first to discuss your ideas.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Google's Gemini AI interface.
- Built on top of [Create React App](https://github.com/facebook/create-react-app).
- Thanks to the open-source community for React and related tools.

---

*Built with ❤️ by [M Ganesh](https://github.com/M-Ganesh123). If you found this useful, star the repo! ⭐*
