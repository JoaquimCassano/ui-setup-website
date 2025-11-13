import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">UI Setup</div>
          <div className="flex gap-8 items-center">
            <a
              href="#features"
              className="text-gray-600 hover:text-black transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-black transition"
            >
              How it Works
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Install
            </a>
          </div>
        </div>
      </nav>
      <div className="border bg-amber-400 flex items-center justify-center p-3 sm:p-4">
        <p className="text-center text-black font-semibold text-sm sm:text-base">
          This page was created using the same base prompt as the main website,
          but without UI Setup. Looks boring and with no personality,
          doesn&apos;t it?
        </p>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="mb-6 inline-block px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
          AI-powered UI Cloning
        </div>
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Create UIs that actually look{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            beautiful
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Find a website you love. Give us the URL. Watch as AI clones it
          perfectly and generates a style guide for consistent, beautiful
          designs.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://pypi.org/project/ui-setup/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Get Started
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-200 px-8 py-3 rounded-lg hover:border-black transition font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Simple Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition">
              <div className="text-3xl mb-4">🐍</div>
              <h3 className="font-semibold text-lg mb-2">Python 3.7+</h3>
              <p className="text-gray-600">
                Built with Python for maximum compatibility and ease of
                installation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-semibold text-lg mb-2">pip Package</h3>
              <p className="text-gray-600">
                Install with a single command:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  pip install ui-setup
                </code>
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-semibold text-lg mb-2">Vibe Coding</h3>
              <p className="text-gray-600">
                Work with Claude, Copilot, Codex, or your favorite AI tool. No
                programming required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Find Cool Website</h3>
              <p className="text-gray-600 text-sm">
                Discover a website with a design you love
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Share the URL</h3>
              <p className="text-gray-600 text-sm">
                Provide the URL to UI Setup
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">AI Clones It</h3>
              <p className="text-gray-600 text-sm">
                AI creates a pixel-perfect replica
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Style Guide</h3>
              <p className="text-gray-600 text-sm">
                Auto-generated style.md for consistency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">🎨</span> Pixel-Perfect Cloning
              </h3>
              <p className="text-gray-600">
                Automatically extract CSS, screenshots, and recreate websites
                exactly as they appear. No approximations, just perfect
                replicas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">📋</span> Automatic Style Guide
              </h3>
              <p className="text-gray-600">
                Generate comprehensive style.md files documenting colors,
                typography, spacing, components, and animations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">🤖</span> AI-Powered Refinement
              </h3>
              <p className="text-gray-600">
                Iteratively improve the cloned UI by providing refinement
                instructions. Keep tweaking until it looks perfect.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">🛠️</span> Multi-AI Support
              </h3>
              <p className="text-gray-600">
                Works with Claude, GitHub Copilot, Codex, and more. Choose your
                favorite vibe coding tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Get Started in 30 Seconds</h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6 font-mono text-left overflow-x-auto">
            <p>$ pip install ui-setup</p>
            <p className="mt-2">$ ui-setup</p>
          </div>
          <p className="text-gray-600 mb-8">
            Follow the interactive setup to configure your AI tool and browser
            path.
          </p>
        </div>
      </section>

      {/* Inspiration */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Inspired by the Best</h2>
          <p className="text-gray-600 mb-4">
            This project builds on the incredible ideas from{" "}
            <a
              href="https://x.com/jasonzhou1993"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              Jason Zhou's
            </a>{" "}
            Twitter thread about AI-powered design. We've implemented and
            expanded those concepts into a production-ready tool.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">UI Setup</h4>
              <p className="text-gray-600 text-sm">
                Create beautiful UIs with AI. Clone designs and generate style
                guides automatically.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://pypi.org/project/ui-setup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                  >
                    PyPI
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">License</h4>
              <p className="text-gray-600 text-sm">
                MIT License © 2025 Joaquim Cassano
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            <p>Built with ❤️ for AI enthusiasts and vibe coders everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
