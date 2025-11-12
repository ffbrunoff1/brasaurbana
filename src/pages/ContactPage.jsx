import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Map, Clock, Instagram, Facebook, Flame, Mail } from 'lucide-react'

export default function ContactPage() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: "",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          isError: false
        })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({
          message: 'Erro ao enviar mensagem. Tente novamente.',
          isError: true
        })
      }
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente.',
        isError: true
      })
    }

    recaptchaRef.current.reset()
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(00) 00000-0000',
      action: 'tel:+5500000000000'
    },
    {
      icon: Map,
      title: 'Localização',
      info: 'São Paulo, SP',
      action: null
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Seg-Dom: 18h00 - 23h30',
      action: null
    },
    {
      icon: Mail,
      title: 'WhatsApp',
      info: 'Pedir pelo WhatsApp',
      action: 'https://wa.me/5500000000000'
    }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ]

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
              <span className="text-white">FALE</span>
              <br />
              <span className="flame-gradient bg-clip-text text-transparent">CONOSCO</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pronto para experimentar o sabor que vem do fogo? Entre em contato conosco 
              para fazer seu pedido ou esclarecer dúvidas. Estamos aqui para atendê-lo!
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Flame className="w-6 h-6 text-primary-500" />
              <span className="text-gray-300 font-medium">Atendimento Personalizado</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                  Entre em Contato
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Nossa equipe está pronta para atender você da melhor forma. 
                  Faça seu pedido, tire suas dúvidas ou apenas venha conversar 
                  sobre nossa paixão pelos hambúrgueres artesanais.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-dark-700 p-6 rounded-lg card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        {item.action ? (
                          <a
                            href={item.action}
                            className="text-gray-300 hover:text-primary-400 transition-colors"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-300">{item.info}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-white mb-6">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (