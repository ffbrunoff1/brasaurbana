import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Início', path: '/' },
    { 
      name: 'Cardápio', 
      path: '/cardapio',
      submenu: [
        { name: 'Ver Cardápio Completo', path: '/cardapio' },
        { name: 'Brasa Smash', path: '/produto/brasa-smash' },
        { name: 'Fumaça BBQ', path: '/produto/fumaca-bbq' },
        { name: 'Inferno Burger', path: '/produto/inferno-burger' },
      ]
    },
    { name: 'Nossa História', path: '/sobre' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Contato', path: '/contato' },
  ]

  const handleMenuClick = (menuName) => {
    if (menuName === 'Cardápio') {
      setIsMenuOpen(!isMenuOpen)
    } else {
      setIsMenuOpen(false)
    }
  }

  const HeaderContent = (
    <>
      <Link to="/" className="flex items-center space-x-3">
        <img 
          src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/963c07ff-56bc-4a19-956d-c9f2a6a78190/logo_1762990550151_0.png"
          alt="Brasa Urbana"
          className="h-12 w-auto"
        />
        <div className="flex items-center space-x-2">
          <Flame className="w-6 h-6 text-primary-500" />
          <span className="text-2xl font-display font-bold">Brasa Urbana</span>
        </div>
      </Link>

      <nav className="hidden lg:flex items-center space-x-8">
        {menuItems.map((item) => (
          <div key={item.name} className="relative group">
            <button
              onClick={() => handleMenuClick(item.name)}
              className={`font-semibold transition-all duration-300 hover:text-primary-400 ${
                location.pathname === item.path ? 'text-primary-500' : 'text-white'
              }`}
            >
              {item.name}
            </button>
            
            {item.submenu && isMenuOpen && item.name === 'Cardápio' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-56 bg-dark-800 rounded-lg shadow-2xl border border-primary-500/20 z-50"
              >
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-primary-600/20 first:rounded-t-lg last:rounded-b-lg transition-all duration-200"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </nav>

      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/contato" className="btn-primary">
          Pedir Agora
        </Link>
      </div>

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 text-white hover:text-primary-400 transition-colors"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </>
  )

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-900/95 backdrop-blur-md border-b border-primary-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {HeaderContent}
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-dark-800/98 backdrop-blur-md z-40 lg:hidden border-b border-primary-500/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-semibold text-white hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-gray-300 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link 
                  to="/contato" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block mt-6 btn-primary"
                >
                  Pedir Agora
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}