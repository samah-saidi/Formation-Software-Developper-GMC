import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: '💼', href: 'https://www.linkedin.com/in/samah-saidi-005196253', label: 'LinkedIn' },
    { icon: '💻', href: 'https://github.com/samah-saidi', label: 'GitHub' },
    { icon: '📧', href: 'mailto:samah.saidi@olytechnicien.tn', label: 'Email' }
  ]

  const quickLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À Propos' },
    { href: '/projects', label: 'Projets' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Samah SAIDI</h3>
            <p className={styles.footerDescription}>
              Étudiante ingénieure en Data Science & IA passionnée par l innovation 
              et les technologies intelligentes.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Navigation</h3>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact</h3>
            <ul className={styles.contactInfo}>
              <li>📧 samah.saidi@polytechnicien.tn</li>
              <li>📱 (+216) 99 111 222</li>
              <li>📍 Sousse, Tunisie</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Samah SAIDI. Tous droits réservés.</p>
          <p>Développé avec ❤️ et Next.js</p>
        </div>
      </div>
    </footer>
  )
}