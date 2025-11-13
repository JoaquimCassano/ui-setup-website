'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cacf85ff] via-[#8cba80ff] to-[#658e9cff]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b-2 border-[#658e9cff]">
        <div className="flex items-center justify-between px-8 sm:px-16 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="font-mono text-2xl font-bold text-[#514663ff]">UI</div>
            <div>
              <p className="font-mono font-bold text-[#4d5382ff]">UI Setup</p>
              <p className="text-xs text-[#658e9cff]">AI-Powered UI Cloning</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-mono font-bold text-[#4d5382ff] hover:text-[#658e9cff] transition-colors">
              How It Works
            </a>
            <a href="#requirements" className="font-mono font-bold text-[#4d5382ff] hover:text-[#658e9cff] transition-colors">
              Requirements
            </a>
            <a href="https://github.com/joaquimcassano/ui-setup" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-[#4d5382ff] hover:text-[#658e9cff] transition-colors">
              GitHub
            </a>
            <a
              href="https://pypi.org/project/ui-setup/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#658e9cff] text-white font-mono font-bold uppercase rounded-sm hover:bg-[#4d5382ff] transition-transform duration-120 ease-in-out hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-sm"
            >
              Install
            </a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden font-mono font-bold text-[#4d5382ff] text-xl hover:text-[#658e9cff] transition-colors"
          >
            ≡
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-[#658e9cff] bg-white/95 backdrop-blur">
            <div className="flex flex-col gap-4 px-8 py-6">
              <a 
                href="#features" 
                onClick={() => setIsMenuOpen(false)}
                className="font-mono font-bold text-[#4d5382ff] hover:text-[#658e9cff] transition-colors"
              >
                How It Works
              </a>
              <a 
                href="#requirements" 
                onClick={() => setIsMenuOpen(false)}
                className="font-mono font-bold text-[#4d5382ff] hover:text-[#658e9cff] transition-colors"
              >
                Requirements
              </a>
              <a 
                href="https://github.com/joaquimcassano/ui-setup" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setIsMenuOpen(false)}
                className="font-mono font-bold text-[#4d5382ff] hover:text-[#658e9cff] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://pypi.org/project/ui-setup/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 bg-[#658e9cff] text-white font-mono font-bold uppercase rounded-sm hover:bg-[#4d5382ff] transition-transform duration-120 ease-in-out hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 text-sm text-center"
              >
                Install
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="flex min-h-screen flex-col justify-center px-8 sm:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left Content */}
          <div>
            <h1 className="font-mono text-5xl sm:text-6xl font-bold uppercase text-[#514663ff] mb-4 leading-tight tracking-tight">
              Create UIs That Actually Look Beautiful
            </h1>

            <h2 className="font-mono text-2xl sm:text-3xl font-bold uppercase text-[#4d5382ff] mb-8 leading-tight">
              AI-Powered UI Cloning
            </h2>

            <p className="text-lg text-[#4d5382ff] mb-12 leading-relaxed font-light max-w-md">
              Stop vibe coding in the dark. Use AI to clone stunning UIs,
              extract their style, and generate consistently beautiful pages.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#features"
                className="px-8 py-4 bg-[#658e9cff] text-white font-mono font-bold uppercase rounded-sm hover:bg-[#4d5382ff] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0 text-center"
              >
                See how it works
              </a>
              <a
                href="https://pypi.org/project/ui-setup/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#8cba80ff] text-[#514663ff] font-mono font-bold uppercase rounded-sm hover:bg-[#cacf85ff] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0 text-center"
              >
                Install Now
              </a>
            </div>

            <p className="text-sm text-black font-light">
              ⭐ Inspired by Jason Zhou's revolutionary UI cloning approach
            </p>
          </div>

          {/* Right Decorative Section */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full h-96">
              {/* Decorative cards */}
              <div className="absolute top-0 right-0 bg-white/80 backdrop-blur p-6 rounded-sm border-2 border-[#658e9cff] shadow-lg transform -rotate-6 w-64">
                <p className="font-mono text-sm font-bold text-[#4d5382ff] mb-4">
                  Design System
                </p>
                <div className="space-y-2">
                  <div className="h-3 bg-[#cacf85ff] rounded-sm w-3/4"></div>
                  <div className="h-3 bg-[#8cba80ff] rounded-sm w-full"></div>
                  <div className="h-3 bg-[#658e9cff] rounded-sm w-5/6"></div>
                </div>
              </div>

              <div className="absolute top-32 right-20 bg-white/80 backdrop-blur p-6 rounded-sm border-2 border-[#658e9cff] shadow-lg w-56">
                <p className="font-mono text-sm font-bold text-[#4d5382ff] mb-4">
                  Features
                </p>
                <div className="space-y-3 text-xs text-[#658e9cff]">
                  <div>✓ AI-powered cloning</div>
                  <div>✓ Style extraction</div>
                  <div>✓ Auto style.md generation</div>
                  <div>✓ Pixel-perfect recreation</div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur p-6 rounded-sm border-2 border-[#658e9cff] shadow-lg transform rotate-3 w-60">
                <p className="font-mono text-sm font-bold text-[#4d5382ff] mb-4">
                  Color Palette
                </p>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-[#cacf85ff] rounded-sm"></div>
                  <div className="w-8 h-8 bg-[#8cba80ff] rounded-sm"></div>
                  <div className="w-8 h-8 bg-[#658e9cff] rounded-sm"></div>
                  <div className="w-8 h-8 bg-[#4d5382ff] rounded-sm"></div>
                  <div className="w-8 h-8 bg-[#514663ff] rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white py-20 px-8 sm:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-4xl sm:text-5xl font-bold uppercase text-[#514663ff] mb-16 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border-2 border-[#658e9cff] rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 font-mono font-bold text-[#8cba80ff]">
                1
              </div>
              <h3 className="font-mono text-2xl font-bold uppercase text-[#4d5382ff] mb-4">
                Find a Website
              </h3>
              <p className="text-[#658e9cff] leading-relaxed">
                Discover a website with UI that speaks to you. Copy its URL and
                let UI Setup do the work.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-2 border-[#658e9cff] rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 font-mono font-bold text-[#cacf85ff]">
                2
              </div>
              <h3 className="font-mono text-2xl font-bold uppercase text-[#4d5382ff] mb-4">
                AI Clones It
              </h3>
              <p className="text-[#658e9cff] leading-relaxed">
                Your AI agent analyzes the screenshot and CSS, then recreates it
                pixel-perfect in HTML.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-2 border-[#658e9cff] rounded-sm p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 font-mono font-bold text-[#8cba80ff]">
                3
              </div>
              <h3 className="font-mono text-2xl font-bold uppercase text-[#4d5382ff] mb-4">
                Get a Style Guide
              </h3>
              <p className="text-[#658e9cff] leading-relaxed">
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
          <h2 className="font-mono text-4xl sm:text-5xl font-bold uppercase text-[#514663ff] mb-12">
            Requirements
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#8cba80ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#4d5382ff]">
                  Python 3.7+
                </p>
                <p className="text-[#658e9cff]">Latest versions recommended</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#8cba80ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#4d5382ff]">
                  pip
                </p>
                <p className="text-[#658e9cff]">Python package manager</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#8cba80ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#4d5382ff]">
                  AI Vibe Coding Tool
                </p>
                <p className="text-[#658e9cff]">
                  Claude, GitHub Copilot, or Codex
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl text-[#8cba80ff] font-bold mt-1">✓</div>
              <div>
                <p className="text-lg font-mono font-bold text-[#4d5382ff]">
                  Chromium Browser
                </p>
                <p className="text-[#658e9cff]">
                  For taking website screenshots
                </p>
              </div>
            </div>
          </div>

          <p className="text-[#658e9cff] text-lg">
            Minimum knowledge with programming OR vibe coding tools required. No
            experience? You'll still vibe. 😎
          </p>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="bg-[#658e9cff] text-white py-20 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-4xl sm:text-5xl font-bold uppercase mb-8">
            Inspiration
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            This project is inspired by an incredible{" "}
            <a
              href="https://x.com/jasonzhou1993/status/1985291755705835832"
              className="underline font-bold hover:text-[#cacf85ff] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter thread
            </a>{" "}
            by{" "}
            <a
              href="https://x.com/jasonzhou1993"
              className="underline font-bold hover:text-[#cacf85ff] transition-colors"
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
      <div className="bg-[#514663ff] text-white py-20 px-8 sm:px-16">
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
              className="px-8 py-4 bg-[#cacf85ff] text-[#514663ff] font-mono font-bold uppercase rounded-sm hover:bg-[#8cba80ff] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0"
            >
              Install via pip
            </a>
            <a
              href="https://github.com/joaquimcassano/ui-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#514663ff] font-mono font-bold uppercase rounded-sm hover:bg-[#f4efea] transition-transform duration-120 ease-in-out hover:translate-x-1.75 hover:-translate-y-1.75 active:translate-x-0 active:translate-y-0"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#4d5382ff] text-white py-12 px-8 sm:px-16">
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
