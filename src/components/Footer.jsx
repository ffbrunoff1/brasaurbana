import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Phone, Clock, Map, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Cardápio', path: '/cardapio' },
    { name: 'Nossa História', path: '/sobre' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Contato', path: '/contato' },
  ]

  const burgerLinks = [
    { name: 'Brasa Smash', path: '/produto/brasa-smash' },
    { name: 'Fumaça BBQ', path: '/produto/fumaca-bbq' },
    { name: 'Inferno Burger', path: '/produto/inferno-burger' },
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ]

  return (
    <footer className="bg-dark-900 border-t border-primary-500/20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/963c07ff-56bc-4a19-956d-c9f2a6a78190/logo_1762990550151_0.png"
                alt="Brasa Urbana"
                className="h-12 w-auto"
              />
              <div className="flex items-center space-x-2">
                <Flame className="w-6 h-6 text-primary-500" />
                <span className="text-xl font-display font-bold">Brasa Urbana</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O sabor que vem do fogo. Hambúrguer artesanal feito na chapa quente e 
              finalizado na brasa, com bordas crocantes e sabor defumado único.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-600/20 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-semibold mb-6 text-primary-400">
              Links Rápidos
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-semibold mb-6 text-primary-400">
              Nossos Burgers
            </h4>
            <nav className="space-y-3">
              {burgerLinks.map((burger, index) => (
                <Link
                  key={index}
                  to={burger.path}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {burger.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-semibold mb-6 text-primary-400">
              Contato & Horários
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">(00) 00000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Map className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Seg-Dom: 18h00 - 23h30</p>
                  <p className="text-sm text-gray-400">Delivery disponível</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Brasa Urbana. Todos os direitos reservados. 
            Criado com <em><a href="https://papum.ai" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}