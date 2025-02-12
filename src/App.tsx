import React, { useState } from 'react';
import { Brain, Menu, X, ArrowRight, Bot, Shield, Zap, Twitter, Send, Globe, Code, Cpu, Coins, LineChart as ChartLineUp, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed w-full bg-black border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">NEXUMAI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-gray-300">Features</a>
              <a href="#tokenomics" className="text-white hover:text-gray-300">Tokenomics</a>
              <a href="#about" className="text-white hover:text-gray-300">About</a>
              <div className="flex items-center space-x-4">
                <a href="https://twitter.com/nexumai" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-gray-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://t.me/nexumai" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-gray-300">
                  <Send className="h-5 w-5" />
                </a>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
                Buy NEXUMAI
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-white">Features</a>
              <a href="#tokenomics" className="block px-3 py-2 text-white">Tokenomics</a>
              <a href="#about" className="block px-3 py-2 text-white">About</a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="https://twitter.com/nexumai" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-gray-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://t.me/nexumai" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-gray-300">
                  <Send className="h-5 w-5" />
                </a>
              </div>
              <button className="w-full mt-2 bg-white text-black px-6 py-2 rounded-full">
                Buy NEXUMAI
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              NEXUMAI
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              The first AI-powered cryptocurrency designed to revolutionize the future of decentralized intelligence. Join us in building the next generation of AI technology.
            </p>
            <div className="space-y-12">
              <button className="bg-white text-black px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition inline-flex items-center">
                Buy NEXUMAI
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-white mb-4">AI Development Fund</h2>
                  <p className="text-gray-300">
                    NEXUMAI token serves as the foundation for our AI development fund, directly supporting the creation and advancement of cutting-edge artificial intelligence technologies.
                  </p>
                </div>

                <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-white mb-4">Community Governance</h2>
                  <p className="text-gray-300">
                    Token holders participate in key decisions about AI development direction and resource allocation through our decentralized governance system.
                  </p>
                </div>

                <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform hover:scale-105 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-white mb-4">AI Service Access</h2>
                  <p className="text-gray-300">
                    Hold NEXUMAI tokens to access our suite of AI services, including advanced analytics, automation tools, and machine learning capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Why Choose NEXUMAI</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-black p-6 rounded-xl border border-gray-800">
                <Bot className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-4 text-white">AI Development</h3>
                <p className="text-gray-300">Funding next-gen AI research and development through token economics</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-black p-6 rounded-xl border border-gray-800">
                <Shield className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-4 text-white">Secure & Private</h3>
                <p className="text-gray-300">Built on blockchain technology for maximum security and transparency</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-black p-6 rounded-xl border border-gray-800">
                <Zap className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-4 text-white">Fast Transactions</h3>
                <p className="text-gray-300">Lightning-fast token transfers and AI service access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Tokenomics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <Coins className="h-10 w-10 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">Total Supply</h3>
              <p className="text-gray-300">1,000,000,000</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <ChartLineUp className="h-10 w-10 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">AI Development</h3>
              <p className="text-gray-300">40% of Supply</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <Users className="h-10 w-10 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">Community</h3>
              <p className="text-gray-300">30% of Supply</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <Shield className="h-10 w-10 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">Treasury</h3>
              <p className="text-gray-300">30% of Supply</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">About NEXUMAI</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Globe className="h-8 w-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Global AI Network</h3>
                  <p className="text-gray-300">
                    Building a worldwide network of AI resources and development hubs powered by blockchain technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Code className="h-8 w-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Open Source Development</h3>
                  <p className="text-gray-300">
                    Transparent and community-driven AI development process, funded by token economics.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Cpu className="h-8 w-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">AI Infrastructure</h3>
                  <p className="text-gray-300">
                    Decentralized computing resources for AI training and deployment, accessible through token staking.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                NEXUMAI aims to democratize AI development through blockchain technology. By combining cryptocurrency with artificial intelligence, we're creating a sustainable ecosystem where token holders directly contribute to and benefit from AI advancement.
              </p>
              <p className="text-gray-300 mb-6">
                Our token serves as both a funding mechanism for AI development and a utility token for accessing advanced AI services.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="text-2xl font-bold text-white mb-2">$10M+</h4>
                  <p className="text-gray-300">Development Fund</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h4 className="text-2xl font-bold text-white mb-2">50K+</h4>
                  <p className="text-gray-300">Token Holders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;