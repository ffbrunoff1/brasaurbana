import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Eye, Star } from 'lucide-react'

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const menuItems = [
    {
      id: 'brasa-smash',
      name: 'Brasa Smash',
      category: 'classicos',
      description: 'Duplo smash na chapa de ferro com bordas crocantes e sabor defumado único.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539049_hpmhn246bn_Brasa_Smash.webp',
      highlight: 'Mais Vendido',
      rating: 4.9,
      isSpicy: false
    },
    {
      id: 'fumaca-bbq',
      name: 'Fumaça BBQ',
      category: 'especiais',
      description: 'Cebola caramelizada, bacon crocante e molho BBQ artesanal defumado.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539772_dz2246lfq1g_Fuma_a_BBQ.webp',
      highlight: "Chef's Choice",
      rating: 4.8,
      isSpicy: false
    },
    {
      id: 'inferno-burger',
      name: 'Inferno Burger',
      category: 'picantes',
      description: 'Para os corajosos! Molho de pimenta defumada e temperos especiais.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990540540_qykhdg5mwyq_Inferno_Burger.webp',
      highlight: 'Desafio Aceito',
      rating: 4.7,
      isSpicy: true
    }
  ]

  const categories = [
    { id: 'all', name: 'Todos', count: menuItems.length },
    { id: 'classicos', name: 'Clássicos', count: menuItems.filter(item => item.category === 'classicos').length },
    { id: 'especiais', name: 'Especiais', count: menuItems.filter(item => item.category === 'especiais').length },
    { id: 'picantes', name: 'Picantes', count: menuItems.filter(item => item.category === 'picantes').length },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-20 min-h-screen">
      
      <section className="py-20 bg-gradient-to-br from-dark-900 via-primary-900/20 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-white">NOSSO</span>
              <br />
              <span className="flame-gradient bg-clip-text text-transparent">CARDÁPIO</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada hambúrguer é uma experiência única. Feitos artesanalmente na chapa quente 
              e finalizados na brasa para aquele sabor defumado inconfundível.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Flame className="w-6 h-6 text-primary-500" />
              <span className="text-gray-300 font-medium">Feito na Brasa</span>
              <span className="text-gray-500">•</span>
              <Star className="w-6 h-6 text-secondary-500" />
              <span className="text-gray-300 font-medium">Ingredientes Premium</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-dark-700 rounded-2xl overflow-hidden card-hover">
                  {item.highlight && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.highlight}
                      </span>
                    </div>
                  )}

                  {item.isSpicy && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <Flame className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}

                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-display font-bold text-white">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-secondary-500 fill-current" />
                        <span className="text-gray-300 text-sm font-semibold">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/produto/${item.id}`}
                        className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg hover:scale-105"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Ver Detalhes</span>
                      </Link>

                      <div className="text-gray-400 text-sm">
                        {item.isSpicy ? 'Picante' : 'Suave'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white text-shadow">
              FOME DE BRASA?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Faça seu pedido agora e receba nossos hambúrgueres artesanais 
              quentinhos e frescos direto da brasa na sua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contato" className="btn-primary text-lg px-10 py-4 ember-glow">
                Pedir Agora
              </Link>
              <Link to="/sobre" className="btn-secondary text-lg px-10 py-4">
                Nossa História
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}