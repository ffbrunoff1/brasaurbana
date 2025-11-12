import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Star, Clock, Truck, Heart, Eye } from 'lucide-react'

export default function ProductDetail() {
  const { productId } = useParams()

  const products = {
    'brasa-smash': {
      id: 'brasa-smash',
      name: 'Brasa Smash',
      description: 'Brasa_Smash é a solução perfeita para quem busca uma experiência gastronômica única e inovadora. Nossa especialidade são os cortes de carne grelhados com técnica de smash, que proporciona um sabor marcante e uma crocância irresistível. Utilizamos ingredientes selecionados e frescos, garantindo que cada mordida seja uma explosão de sabor.',
      shortDescription: 'Duplo smash na chapa de ferro com bordas crocantes e sabor defumado único.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539049_hpmhn246bn_Brasa_Smash.webp',
      category: 'Clássico',
      rating: 4.9,
      reviews: 127,
      isSpicy: false,
      ingredients: ['Pão brioche artesanal', 'Duplo smash 160g', 'Queijo cheddar', 'Cebola roxa', 'Molho especial', 'Finalização na brasa'],
      nutritionalInfo: {
        calories: '580',
        protein: '32g',
        carbs: '45g',
        fat: '28g'
      },
      allergens: ['Glúten', 'Lactose'],
      preparationTime: '15-20 min',
      highlight: 'Mais Vendido'
    },
    'fumaca-bbq': {
      id: 'fumaca-bbq',
      name: 'Fumaça BBQ',
      description: 'Fumaça_BBQ é a escolha perfeita para os amantes de barbecue que buscam elevar suas habilidades na grelha. Nossos produtos são cuidadosamente selecionados para garantir uma experiência de sabor incomparável. Com uma variedade de lenhas e carvão de alta qualidade, proporcionamos o melhor em defumação e grelhados.',
      shortDescription: 'Cebola caramelizada, bacon crocante e molho BBQ artesanal defumado.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539772_dz2246lfq1g_Fuma_a_BBQ.webp',
      category: 'Especial',
      rating: 4.8,
      reviews: 89,
      isSpicy: false,
      ingredients: ['Pão brioche defumado', 'Hambúrguer 180g', 'Bacon artesanal', 'Cebola caramelizada', 'Molho BBQ caseiro', 'Queijo gouda'],
      nutritionalInfo: {
        calories: '650',
        protein: '35g',
        carbs: '48g',
        fat: '32g'
      },
      allergens: ['Glúten', 'Lactose'],
      preparationTime: '18-22 min',
      highlight: "Chef's Choice"
    },
    'inferno-burger': {
      id: 'inferno-burger',
      name: 'Inferno Burger',
      description: 'Descubra o Inferno Burger, a experiência gastronômica que vai incendiar seu paladar. Nosso hambúrguer exclusivo combina carne de alta qualidade com um mix de temperos picantes que deixará você em chamas. Cada mordida é uma explosão de sabor, ideal para os amantes de um desafio!',
      shortDescription: 'Para os corajosos! Molho de pimenta defumada e temperos especiais ardentes.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990540540_qykhdg5mwyq_Inferno_Burger.webp',
      category: 'Picante',
      rating: 4.7,
      reviews: 156,
      isSpicy: true,
      spiceLevel: 'Muito Picante',
      ingredients: ['Pão brioche vermelho', 'Hambúrguer temperado 180g', 'Pimenta defumada', 'Queijo pepper jack', 'Molho inferno', 'Cebola roxa'],
      nutritionalInfo: {
        calories: '620',
        protein: '34g',
        carbs: '46g',
        fat: '30g'
      },
      allergens: ['Glúten', 'Lactose', 'Pimenta'],
      preparationTime: '16-20 min',
      highlight: 'Desafio Aceito'
    }
  }

  const product = products[productId]

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Produto não encontrado</h1>
          <Link to="/cardapio" className="btn-primary">
            Voltar ao Cardápio
          </Link>
        </div>
      </div>
    )
  }

  const otherProducts = Object.values(products).filter(p => p.id !== productId)

  return (
    <div className="pt-20">
      
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                {product.highlight && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {product.highlight}
                    </span>
                  </div>
                )}

                {product.isSpicy && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center ember-glow">
                      <Flame className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}

                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-dark-800 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">{product.preparationTime}</p>
                </div>
                <div className="text-center p-4 bg-dark-800 rounded-lg">
                  <Star className="w-6 h-6 text-secondary-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">{product.rating}★ ({product.reviews})</p>
                </div>
                <div className="text-center p-4 bg-dark-800 rounded-lg">
                  <Truck className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Delivery</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                  {product.isSpicy && product.spiceLevel && (
                    <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Flame className="w-4 h-4" />
                      <span>{product.spiceLevel}</span>
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="text-white">{product.name}</span>
                </h1>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {product.shortDescription}
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-secondary-500 fill-current" />
                    <span className="text-white font-semibold">{product.rating}</span>
                    <span className="text-gray-400">({product.reviews} avaliações)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-4">
                    Ingredientes
                  </h3>
                  <div className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-300">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-4">
                      Informações Nutricionais
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Calorias:</span>
                        <span className="text-white font-semibold">{product.nutritionalInfo.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Proteínas:</span>
                        <span className="text-white font-semibold">{product.nutritionalInfo.protein}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Carboidratos:</span>
                        <span className="text-white font-semibold">{product.nutritionalInfo.carbs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Gorduras:</span>
                        <span className="text-white font-semibold">{product.nutritionalInfo.fat}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-display font-bold text-white mb-4">
                      Alérgenos
                    </h3>
                    <div className="space-y-2">
                      {product.allergens.map((allergen, index) => (
                        <span key={index} className="inline-block bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded text-sm mr-2 mb-2">
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contato" className="btn-primary text-lg px-8 py-4 ember-glow flex-1 text-center">
                  Pedir Agora
                </Link>
                <button className="btn-secondary px-8 py-4 flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Favoritar</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Descrição Completa
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="text-white">OUTROS</span>
              <span className="flame-gradient bg-clip-text text-transparent"> SABORES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore outros sabores únicos do nosso cardápio artesanal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((otherProduct, index) => (
              <motion.div
                key={otherProduct.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-dark-700 rounded-2xl overflow-hidden card-hover">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={otherProduct.image}
                      alt={otherProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-white mb-3">
                      {otherProduct.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {otherProduct.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/produto/${otherProduct.id}`}
                        className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors font-semibold"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Ver Detalhes</span>
                      </Link>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-secondary-500 fill-current" />
                        <span className="text-gray-300 text-sm font-semibold">
                          {otherProduct.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/cardapio" className="btn-primary text-lg px-8 py-4">
              Ver Cardápio Completo
            </Link>
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
              Faça seu pedido agora e experimente o sabor autêntico que vem direto da brasa. 
              Delivery rápido para toda São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contato" className="btn-primary text-lg px-10 py-4 ember-glow">
                Pedir via WhatsApp
              </Link>
              <Link to="/cardapio" className="btn-secondary text-lg px-10 py-4">
                Ver Mais Burgers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}