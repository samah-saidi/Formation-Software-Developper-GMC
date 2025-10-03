'use client'
import { useState } from 'react'
import styles from './contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulation d'envoi de formulaire
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "samah.saidi@polytechnicien.tn",
      link: "mailto:samah.saidi@polytechnicien.tn"
    },
    {
      icon: "📱",
      title: "Téléphone",
      value: "(+216) 99 111 222",
      link: "tel:+216 99 111 222"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "samah-saidi",
      link: "https://www.linkedin.com/in/samah-saidi-005196253"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "samah-saidi",
      link: "https://github.com/samah-saidi"
    }
  ]

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Contactez-moi</h1>
          <p className={styles.pageSubtitle}>
            N hésitez pas à me contacter pour toute opportunité ou collaboration
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2>Informations de Contact</h2>
              <p className={styles.infoDescription}>
                Je suis toujours ouverte aux nouvelles opportunités et collaborations. 
                N hésitez pas à me contacter !
              </p>
              
              <div className={styles.infoCards}>
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link}
                    className={styles.infoCard}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div>
                      <h3>{info.title}</h3>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className={styles.availability}>
                <h3>🕐 Disponibilité</h3>
                <p>Actuellement en recherche de stage de fin d études et d opportunités professionnelles</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>Envoyez-moi un Message</h2>
              {isSubmitted && (
                <div className={styles.successMessage}>
                  ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nom Complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
