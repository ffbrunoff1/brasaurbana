import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, Flame } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryImages = [
    {
      id: 1,
      src: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539049_hpmhn246bn_Brasa_Smash.webp',
      alt: 'Brasa Smash',
      category: 'burgers',
      title: 'Brasa Smash',
      description: 'Duplo smash na chapa de ferro com acabamento perfeito na brasa'
    },
    {
      id: 2,
      src: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539772_dz2246lfq1g_Fuma_a_BBQ.webp',
      alt: 'Fumaça BBQ',
      category: 'burgers',
      title: 'Fumaça BBQ',
      description: 'Sabor defumado intenso com cebola caramelizada e bacon'
    },
    {
      id: 3,
      src: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990540540_qykhdg5mwyq_Inferno_Burger.webp',
      alt: 'Inferno Burger',
      category: 'burgers',
      title: 'Inferno Burger',
      description: 'A experiência mais intensa para paladares corajosos'
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas', count: galleryImages.length },
    { id: 'burgers', name: 'Burgers', count: galleryImages.filter(img => img.category === 'burgers').length },
    { id: 'processo', name: 'Processo', count: galleryImages.filter(img => img.category === 'processo').length },
    { id: 'ambiente', name: 'Ambiente', count: galleryImages.filter(img => img.category === 'ambiente').length },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

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
              <span className="text-white">GALERIA</span>
              <br />
              <span className="flame-gradient bg-clip-text text-transparent">VISUAL</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore as cores, texturas e sabores através de imagens que capturam a essência 
              da Brasa Urbana. Cada foto conta a história do nosso processo artesanal.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Flame className="w-6 h-6 text-primary-500" />
              <span className="text-gray-300 font-medium">Processo Artesanal Documentado</span>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-dark-700 card-hover">
                  <div className="aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-display font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-dark-900/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-2xl text-gray-400 font-display">
                Em breve mais imagens desta categoria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-dark-900/80 rounded-full flex items-center justify-center text-white hover:bg-dark-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-dark-800 rounded-2xl overflow-hidden">
                <div className="aspect-auto max-h-[70vh] overflow-hidden">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              O PROCESSO POR TRÁS DO SABOR
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada imagem representa horas de dedicação, ingredientes cuidadosamente 
              selecionados e uma técnica aperfeiçoada ao longo dos anos. Este é o 
              resultado da nossa paixão transformada em sabor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Técnica Única
                </h3>
                <p className="text-gray-300">
                  Combinamos smash na chapa com finalização na brasa
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Visual Impactante
                </h3>
                <p className="text-gray-300">
                  Cada burger é uma obra de arte culinária
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  Feito com Paixão
                </h3>
                <p className="text-gray-300">
                  Amor e dedicação em cada detalhe do preparo
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white text-shadow">
              PRONTO PARA EXPERIMENTAR?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Agora que você viu como preparamos nossos hambúrgueres artesanais, 
              que tal experimentar esse sabor único?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contato"
                className="btn-primary text-lg px-10 py-4 ember-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pedir Agora
              </motion.a>
              <motion.a
                href="/cardapio"
                className="btn-secondary text-lg px-10 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Cardápio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}