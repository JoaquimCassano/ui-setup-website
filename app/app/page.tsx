"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4efea]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#ffffff]/90 backdrop-blur border-b-2 border-[#383838]">
        <div className="flex items-center justify-between px-8 sm:px-16 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="font-mono text-2xl font-bold text-[#472c1bff]">
              UI
            </div>
            <div>
              <p className="font-mono font-bold text-[#383838]">UI Setup</p>
              <p className="text-xs text-[#8fa6cbff]">AI-Powered UI Cloning</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="font-mono font-bold text-[#383838] hover:font-bold transition-colors"
            >
              How It Works
            </a>
            <a
              href="#requirements"
              className="font-mono font-bold text-[#383838] hover:font-bold transition-colors"
            >
              Requirements
            </a>
            <a
              href="https://github.com/joaquimcassano/ui-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-bold text-[#383838] hover:font-bold transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://pypi.org/project/ui-setup/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#ec7357ff] text-white font-mono font-bold uppercase rounded-sm hover:bg-[#472c1bff] transition-transform duration-120 ease-in-out hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-sm"
            >
              Install
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden font-mono font-bold text-[#383838] text-xl hover:font-bold transition-colors"
          >
            ≡
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-[#383838] bg-white/95 backdrop-blur">
            <div className="flex flex-col gap-4 px-8 py-6">
              <a
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="font-mono font-bold text-[#383838] hover:font-bold transition-colors"
              >
                How It Works
              </a>
              <a
                href="#requirements"
                onClick={() => setIsMenuOpen(false)}
                className="font-mono font-bold text-[#383838] hover:font-bold transition-colors"
              >
                Requirements
              </a>
              <a
                href="https://github.com/joaquimcassano/ui-setup"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="font-mono font-bold text-[#383838] hover:font-bold transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://pypi.org/project/ui-setup/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 bg-[#ec7357ff] text-white font-mono font-bold uppercase rounded-sm hover:bg-[#472c1bff] transition-transform duration-120 ease-in-out hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-sm text-center"
              >
                Install
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="flex min-h-screen flex-col justify-center px-8 sm:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <div>
            <h1 className="font-mono text-5xl sm:text-6xl font-bold uppercase text-[#472c1bff] mb-4 leading-tight tracking-tight">
              Create UIs That Actually Look Beautiful
            </h1>

            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase text-[#ec7357ff] mb-8 leading-tight">
              AI-Powered UI Cloning
            </h2>

            <p className="text-lg text-[#383838] mb-12 leading-relaxed font-light max-w-md">
              Stop vibe coding in the dark. Use AI to clone stunning UIs,
              extract their style, and generate consistently beautiful pages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#features"
                className="px-8 py-4 bg-[#ec7357ff] text-white font-mono font-bold uppercase rounded-sm hover:bg-[#472c1bff] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0 text-center"
              >
                See how it works
              </a>
              <a
                href="https://pypi.org/project/ui-setup/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#d5f9deff] text-[#472c1bff] font-mono font-bold uppercase rounded-sm hover:bg-[#e0d68aff] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0 text-center"
              >
                Install Now
              </a>
            </div>

            <p className="text-sm text-black font-light">
              ⭐ Inspired by Jason Zhou&apos;s revolutionary UI cloning approach
            </p>
          </div>

          <div className="hidden lg:flex justify-end items-center">
            <div className="w-full">
              <div className="border-2 border-[#383838] bg-base-100 rounded-2xl">
                <div className="mockup-window-toolbar">
                  <div className="flex justify-between items-start w-full px-4 py-3 gap-4">
                    <div className="flex gap-2 pt-1">
                      <div className="w-3 h-3 rounded-full bg-[#ec7357ff]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#e0d68aff]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#d5f9deff]"></div>
                    </div>
                    <div className="text-sm font-mono text-white flex-1 text-center">
                      Terminal
                    </div>
                    <div className="flex gap-2">
                      <button className="w-6 h-6 hover:bg-[#383838]/10 rounded text-xs font-bold text-[#383838]">
                        −
                      </button>
                      <button className="w-6 h-6 hover:bg-[#383838]/10 rounded text-xs font-bold text-[#383838]">
                        □
                      </button>
                      <button className="w-6 h-6 hover:bg-[#383838]/10 rounded text-xs font-bold text-[#383838]">
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid place-content-center px-0 py-4">
                  <img
                    src="/screenshot.png"
                    alt="UI Setup in action"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-20 px-8 sm:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-4xl sm:text-5xl font-bold uppercase text-[#472c1bff] mb-16 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border-2 border-[#383838] rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 font-mono font-bold text-[#ec7357ff]">
                1
              </div>
              <h3 className="font-mono text-2xl font-bold uppercase text-[#472c1bff] mb-4">
                Find a Website
              </h3>
              <p className="text-[#383838] leading-relaxed">
                Discover a website with UI that speaks to you. Copy its URL and
                let UI Setup do the work.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-2 border-[#383838] rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 font-mono font-bold text-[#e0d68aff]">
                2
              </div>
              <h3 className="font-mono text-2xl font-bold uppercase text-[#472c1bff] mb-4">
                AI Clones It
              </h3>
              <p className="text-[#383838] leading-relaxed">
                Your AI agent analyzes the screenshot and CSS, then recreates it
                pixel-perfect in HTML.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-2 border-[#383838] rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 font-mono font-bold text-[#d5f9deff]">
                3
              </div>
              <h3 className="font-mono text-2xl font-bold uppercase text-[#472c1bff] mb-4">
                Get a Style Guide
              </h3>
              <p className="text-[#383838] leading-relaxed">
                AI auto-generates a comprehensive style.md documenting colors,
                typography, and components.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="bg-[#f4efea] py-20 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-4xl sm:text-5xl font-bold uppercase text-[#472c1bff] mb-12">
            Requirements
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#ec7357ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#472c1bff]">
                  Python 3.7+
                </p>
                <p className="text-[#383838]">Latest versions recommended</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#ec7357ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#472c1bff]">
                  pip
                </p>
                <p className="text-[#383838]">Python package manager</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#ec7357ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#472c1bff]">
                  AI Vibe Coding Tool
                </p>
                <p className="text-[#383838]">
                  Claude, GitHub Copilot, or Codex
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#ec7357ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#472c1bff]">
                  Chromium Browser
                </p>
                <p className="text-[#383838]">For taking website screenshots</p>
              </div>
            </div>
          </div>

          <p className="text-[#383838] text-lg">
            Minimum knowledge with programming OR vibe coding tools required. No
            experience? You'll still vibe. 😎
          </p>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="bg-[#8fa6cbff] text-white py-20 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-4xl sm:text-5xl font-bold uppercase mb-8">
            Inspiration
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            This project is inspired by an incredible{" "}
            <a
              href="https://x.com/jasonzhou1993/status/1985291755705835832"
              className="underline font-bold hover:text-[#e0d68aff] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter thread
            </a>{" "}
            by{" "}
            <a
              href="https://x.com/jasonzhou1993"
              className="underline font-bold hover:text-[#e0d68aff] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jason Zhou
            </a>
            .
          </p>

          <p className="text-lg opacity-90">
            The core idea: instead of starting from scratch or relying on random
            screenshots, use AI to understand the complete style system of
            beautiful websites and apply it consistently to your own projects.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#472c1bff] text-white py-20 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-mono text-4xl sm:text-5xl font-bold uppercase mb-8">
            Ready to Create Beautiful UIs?
          </h2>

          <p className="text-xl mb-12 opacity-90">
            Get started now and stop wondering if your UI looks good.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://pypi.org/project/ui-setup/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#e0d68aff] text-[#472c1bff] font-mono font-bold uppercase rounded-sm hover:bg-[#d5f9deff] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0"
            >
              Install via pip
            </a>
            <a
              href="https://github.com/joaquimcassano/ui-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#472c1bff] font-mono font-bold uppercase rounded-sm hover:bg-[#f4efea] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#383838] text-white py-12 px-8 sm:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm mb-4">MIT License © 2025 Joaquim Cassano</p>
          <p className="text-xs opacity-75">
            UI Setup - Create UIs that actually look beautiful
          </p>
        </div>
      </div>
    </div>
  );
}
