import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Star, Truck, Clock, Award, Eye } from 'lucide-react'

export default function HomePage() {
  const featuredBurgers = [
    {
      id: 'brasa-smash',
      name: 'Brasa Smash',
      description: 'Duplo smash na chapa de ferro.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539049_hpmhn246bn_Brasa_Smash.webp',
      highlight: 'Mais Vendido'
    },
    {
      id: 'fumaca-bbq',
      name: 'Fumaça BBQ',
      description: 'Cebola caramelizada, bacon e molho BBQ artesanal.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539772_dz2246lfq1g_Fuma_a_BBQ.webp',
      highlight: 'Chef\'s Choice'
    },
    {
      id: 'inferno-burger',
      name: 'Inferno Burger',
      description: 'Picante, com molho de pimenta defumada.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990540540_qykhdg5mwyq_Inferno_Burger.webp',
      highlight: 'Desafio'
    }
  ]

  const features = [
    {
      icon: Flame,
      title: 'Finalizado na Brasa',
      description: 'Nossos hambúrgueres são finalizados na brasa para aquele sabor defumado inconfundível.'
    },
    {
      icon: Star,
      title: 'Ingredientes Premium',
      description: 'Utilizamos apenas ingredientes frescos e selecionados para garantir a máxima qualidade.'
    },
    {
      icon: Truck,
      title: 'Delivery Rápido',
      description: 'Entregamos nossos burgers quentes e frescos diretamente na sua casa.'
    },
    {
      icon: Award,
      title: 'Receita Artesanal',
      description: 'Cada burger é preparado artesanalmente com técnicas exclusivas da casa.'
    }
  ]

  const stats = [
    { number: '50K+', label: 'Burgers Vendidos' },
    { number: '4.9★', label: 'Avaliação Média' },
    { number: '30min', label: 'Tempo de Entrega' },
    { number: '2 Anos', label: 'No Mercado' }
  ]

  return (
    <div className="pt-20">
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-shadow"
            >
              <span className="text-white">O SABOR QUE</span>
              <br />
              <span className="flame-gradient bg-clip-text text-transparent">VEM DO FOGO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Hambúrguer artesanal feito na chapa quente e finalizado na brasa, 
              com bordas crocantes, suculência no ponto certo e sabor defumado único.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/cardapio" className="btn-primary text-lg px-10 py-4 ember-glow">
                Ver Cardápio
              </Link>
              <Link to="/contato" className="btn-secondary text-lg px-10 py-4">
                Pedir Agora
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center justify-center space-x-8 mt-12"
            >
              <div className="flex items-center space-x-2">
                <Flame className="w-6 h-6 text-primary-500" />
                <span className="text-gray-300">Feito na Brasa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-secondary-500" />
                <span className="text-gray-300">30min Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-secondary-500" />
                <span className="text-gray-300">4.9★ Avaliação</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-white">NOSSOS</span>
              <span className="flame-gradient bg-clip-text text-transparent"> CLÁSSICOS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça nossos burgers mais famosos, cada um com sua personalidade única 
              e sabor inconfundível que vem direto da brasa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBurgers.map((burger, index) => (
              <motion.div
                key={burger.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-dark-700 card-hover">
                  {burger.highlight && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {burger.highlight}
                      </span>
                    </div>
                  )}
                  
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={burger.image}
                      alt={burger.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold mb-2 text-white">
                      {burger.name}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {burger.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/produto/${burger.id}`}
                        className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors font-semibold"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Ver Detalhes</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/cardapio" className="btn-primary text-lg px-8 py-4">
              Ver Cardápio Completo
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold flame-gradient bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-white">POR QUE</span>
              <span className="flame-gradient bg-clip-text text-transparent"> SOMOS ÚNICOS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada detalhe faz a diferença. Do processo artesanal à finalização na brasa, 
              entregamos uma experiência gastronômica incomparável.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white text-shadow">
              PRONTO PARA O DESAFIO?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Experimente nossos hambúrgueres únicos e sinta o sabor que vem do fogo. 
              Delivery disponível para toda São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contato" className="btn-primary text-lg px-10 py-4 ember-glow">
                Pedir via WhatsApp
              </Link>
              <Link to="/cardapio" className="btn-secondary text-lg px-10 py-4">
                Explorar Cardápio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}