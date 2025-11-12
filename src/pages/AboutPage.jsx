import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Heart, Award, Users, Star, Utensils } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Flame,
      title: 'Paixão pelo Fogo',
      description: 'Nossa especialidade está na técnica única de finalização na brasa, que confere aquele sabor defumado inconfundível.'
    },
    {
      icon: Heart,
      title: 'Amor pela Comida',
      description: 'Cada hambúrguer é preparado com carinho e dedicação, usando apenas ingredientes frescos e de alta qualidade.'
    },
    {
      icon: Award,
      title: 'Excelência Artesanal',
      description: 'Nosso processo artesanal garante que cada burger seja único, com o padrão de qualidade que você merece.'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Mais que uma hamburgueria, somos um ponto de encontro para quem aprecia o verdadeiro sabor da rua.'
    }
  ]

  const achievements = [
    { number: '50K+', label: 'Burgers Servidos' },
    { number: '4.9★', label: 'Avaliação Média' },
    { number: '2 Anos', label: 'No Mercado' },
    { number: '100%', label: 'Artesanal' }
  ]

  const timeline = [
    {
      year: '2022',
      title: 'O Começo',
      description: 'Tudo começou na rua, com uma paixão pelo fogo e pela carne de verdade. O primeiro carrinho foi montado com muito suor e determinação.'
    },
    {
      year: '2023',
      title: 'Crescimento',
      description: 'A receita única do smash burger finalizado na brasa conquistou o paladar dos paulistanos. Expandimos para delivery.'
    },
    {
      year: '2024',
      title: 'Consolidação',
      description: 'Hoje somos referência em hambúrguer artesanal em São Paulo, mantendo sempre a essência da rua e o sabor autêntico.'
    }
  ]

  return (
    <div className="pt-20">
      
      <section className="py-20 bg-gradient-to-br from-dark-900 via-primary-900/20 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-white">NOSSA</span>
              <br />
              <span className="flame-gradient bg-clip-text text-transparent">HISTÓRIA</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Uma jornada que começou na rua, movida pela paixão pelo fogo, pela carne 
              e pelo sabor autêntico que só a brasa pode oferecer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                  O Sabor que Vem do Fogo
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  A Brasa Urbana nasceu da paixão por criar algo único no mundo dos hambúrgueres. 
                  Nossa jornada começou nas ruas de São Paulo, onde descobrimos que o verdadeiro 
                  sabor vem quando a técnica encontra a tradição.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Desenvolvemos uma técnica especial que combina o smash burger na chapa quente 
                  com a finalização na brasa. Essa combinação cria bordas crocantes, suculência 
                  no ponto certo e aquele sabor defumado que se tornou nossa marca registrada.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Cada hambúrguer é preparado artesanalmente, com ingredientes frescos e 
                  selecionados. Não é apenas comida, é uma experiência que desperta os sentidos 
                  e conecta pessoas através do sabor autêntico da rua.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-dark-700 rounded-lg"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold flame-gradient bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539049_hpmhn246bn_Brasa_Smash.webp"
                  alt="Brasa Urbana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center ember-glow">
                <Flame className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </div>
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
              <span className="text-white">NOSSOS</span>
              <span className="flame-gradient bg-clip-text text-transparent"> VALORES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estes são os princípios que guiam cada burger que preparamos e cada experiência que oferecemos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="text-white">NOSSA</span>
              <span className="flame-gradient bg-clip-text text-transparent"> JORNADA</span>
            </h2>
            <p className="text-xl text-gray-300">
              Cada marco em nossa história representa nossa evolução e compromisso com a qualidade.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center ember-glow">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>
                  
                  <div className="flex-1 bg-dark-700 p-6 rounded-lg">
                    <h3 className="text-xl font-display font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                O Diferencial da Técnica
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Smash na Chapa</h3>
                    <p className="text-gray-300">A carne é prensada na chapa quente para criar bordas crocantes e selar os sabores.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Finalização na Brasa</h3>
                    <p className="text-gray-300">O burger é finalizado na brasa para adquirir aquele sabor defumado único.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Montagem Artesanal</h3>
                    <p className="text-gray-300">Cada hambúrguer é montado à mão com ingredientes frescos e molhos especiais.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990539772_dz2246lfq1g_Fuma_a_BBQ.webp"
                    alt="Técnica Brasa Urbana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center ember-glow">
                  <Utensils className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
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
              VENHA FAZER PARTE DA NOSSA HISTÓRIA
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Experimente o sabor autêntico que vem do fogo e descubra por que somos 
              apaixonados pelo que fazemos.
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