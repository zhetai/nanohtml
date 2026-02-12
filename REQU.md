{
  "project_name": "Nanobot - Browser-based AI Assistant",
  "version": "1.0.0",
  "description": "A fully functional, single-file HTML chatbot powered by PyScript and DeepSeek API, with rich features including markdown rendering, multi-language support, dark mode, voice input, and persistent storage.",
  "deployment_type": "Static (Single HTML file)",
  "target_environment": "Modern browsers (Chrome, Edge recommended)",
  "features": [
    {
      "name": "PyScript Integration",
      "description": "Run Python code directly in the browser using PyScript and Pyodide.",
      "status": "implemented"
    },
    {
      "name": "DeepSeek API Integration",
      "description": "Call DeepSeek's chat completion API to generate AI responses.",
      "status": "implemented",
      "notes": "Requires valid API key; supports CORS via proxy if needed."
    },
    {
      "name": "Multi-turn Conversation",
      "description": "Maintain conversation context across multiple turns.",
      "status": "implemented"
    },
    {
      "name": "IndexedDB Storage",
      "description": "Persist chat history locally using IndexedDB.",
      "status": "implemented"
    },
    {
      "name": "Export Chat History",
      "description": "Export full chat history as a Markdown (.md) file.",
      "status": "implemented"
    },
    {
      "name": "Clear Chat History",
      "description": "Delete all stored chat history after confirmation.",
      "status": "implemented"
    },
    {
      "name": "Dark Mode Toggle",
      "description": "Switch between light and dark themes with smooth transitions.",
      "status": "implemented",
      "storage": "localStorage"
    },
    {
      "name": "Voice Input",
      "description": "Use browser's Web Speech API for voice-to-text input.",
      "status": "implemented",
      "limitations": "Best supported in Chrome and Edge; requires microphone permission."
    },
    {
      "name": "Multi-language Support",
      "description": "Support Chinese (zh), English (en), and Japanese (ja) UI translations.",
      "status": "implemented",
      "storage": "localStorage",
      "extendable": true
    },
    {
      "name": "Markdown Rendering",
      "description": "Render AI responses with proper Markdown formatting (headings, lists, code blocks, etc.).",
      "status": "implemented",
      "library": "marked.js"
    },
    {
      "name": "Syntax Highlighting",
      "description": "Highlight code blocks using highlight.js with language detection.",
      "status": "implemented",
      "theme": "github-dark"
    },
    {
      "name": "Copy Code Button",
      "description": "Add a 'Copy' button to each code block for easy copying.",
      "status": "implemented"
    },
    {
      "name": "Web Search Integration",
      "description": "Perform web searches using Brave Search API when needed by the AI.",
      "status": "implemented",
      "notes": "Requires valid Brave Search API key; supports CORS directly from browser."
    }
  ],
  "security_considerations": [
    {
      "item": "API Key Management",
      "description": "API keys are stored in localStorage and never hardcoded.",
      "risk_level": "medium",
      "mitigation": "User must manually enter key; consider proxy server for production."
    },
    {
      "item": "Content Security Policy (CSP)",
      "description": "CSP headers restrict resource loading to trusted sources.",
      "policy": "default-src 'self'; script-src 'self' https://pyscript.net https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; connect-src https://api.deepseek.com https://api.search.brave.com;"
    },
    {
      "item": "Input Sanitization",
      "description": "Markdown rendering uses trusted libraries; no direct DOM injection without sanitization.",
      "note": "marked.js is configured safely with default settings."
    }
  ],
  "dependencies": [
    {
      "name": "PyScript",
      "url": "https://pyscript.net/latest/pyscript.js"
    },
    {
      "name": "marked.js",
      "url": "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
    },
    {
      "name": "highlight.js",
      "url": "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/highlight.min.js"
    },
    {
      "name": "highlight.js CSS",
      "url": "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github-dark.min.css"
    }
  ],
  "ui_components": [
    "API Key input section",
    "Chat display area (scrollable)",
    "Text input field",
    "Send button",
    "Voice input button",
    "Language selector dropdown",
    "Export, Clear, Theme toggle buttons"
  ],
  "data_flow": [
    "User enters API key → saved in localStorage",
    "User sends message → added to chat history → sent to DeepSeek API → response rendered with Markdown",
    "All messages saved to IndexedDB",
    "On page load: load API key, theme, language, and chat history"
  ],
  "future_enhancements": [
    "Add more languages (e.g., French, Spanish)",
    "Support file upload and analysis",
    "Add RAG (Retrieval-Augmented Generation) with local vector DB",
    "Implement user authentication for private instances",
    "Add export formats: PDF, JSON, HTML"
  ],
  "license": "MIT (for custom modifications)",
  "author": "Tencent Yuanbao (AI Assistant)",
  "created_at": "2026-02-11"
}
