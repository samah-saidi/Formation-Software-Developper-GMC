import styles from './about.module.css'

export const metadata = {
  title: 'À Propos - Samah SAIDI',
  description: 'En savoir plus sur mon parcours et mes compétences',
}

export default function About() {
  const education = [
    {
      degree: "Ingénieur en Informatique - Data Science & IA",
      school: "École Polytechnique de Sousse",
      period: "09/2023 - En cours",
      location: "Sousse"
    },
    {
      degree: "Licence en Génie Électrique - Automatisme et Informatique Industrielle",
      school: "Institut Supérieur des Études Technologique de Nabeul",
      period: "09/2020 - 06/2023",
      location: "Nabeul"
    },
    {
      degree: "Baccalauréat",
      school: "Lycée Technique de Médenine",
      period: "09/2019 - 06/2020",
      location: "Médenine"
    }
  ]

  const experience = [
    {
      title: "Stage d'initiation d'ingénierie",
      company: "WEBACKIN - Zarzis",
      period: "06/2024 - 08/2024",
      description: "Développement d'une plateforme de gestion des abonnements dans un club gym"
    },
    {
      title: "Stage projet fin d'étude PFE",
      company: "AROTEQ Ben Arous - Tunis",
      period: "02/2023 - 05/2023",
      description: "Développement et réalisations d'un Machine à trois axes motorisés"
    },
    {
      title: "Stage de perfectionnement",
      company: "Union des briqueteries du sud (UBS)",
      period: "01/2022 - 02/2022",
      description: "L'esprit de collaboration | Enrichir les connaissances | Étude de cas Doseur Stockeur"
    }
  ]

  const certifications = [
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "CISCO",
      icon: "🌐"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "CISCO",
      icon: "🔒"
    },
    {
      name: "CyberOps Associate",
      issuer: "CISCO",
      icon: "🛡️"
    },
    {
      name: "IT Specialist - Python",
      issuer: "Certiport",
      icon: "🐍"
    }
  ]

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>À Propos de Moi</h1>
          <p className={styles.pageSubtitle}>
            Découvrez mon parcours, mes compétences et mes certifications
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className={styles.introCard}>
            <h2>Qui suis-je ?</h2>
            <p>
              Étudiante ingénieure en informatique, spécialisée en Data Science et Intelligence Artificielle 
              à l École Polytechnique de Sousse. Passionnée par l analyse de données et les technologies 
              intelligentes, je me distingue par ma rigueur, mon esprit analytique et ma capacité d adaptation.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className={`section ${styles.educationSection}`}>
        <div className="container">
          <h2 className="section-title">🎓 Éducation et Formation</h2>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.school}</h4>
                  <p className={styles.period}>{edu.period}</p>
                  <p className={styles.location}>📍 {edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">💼 Expérience Professionnelle</h2>
          <div className={styles.experienceGrid}>
            {experience.map((exp, index) => (
              <div key={index} className="card">
                <h3>{exp.title}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={`section ${styles.certificationsSection}`}>
        <div className="container">
          <h2 className="section-title">📜 Certifications</h2>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className="card">
                <div className={styles.certIcon}>{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">🛠️ Compétences Techniques</h2>
          <div className={styles.skillsContainer}>
            <div className="card">
              <h3>Langages de Programmation</h3>
              <div className={styles.skillTags}>
                <span>Python</span>
                <span>JavaScript</span>
                <span>C++</span>
                <span>C#</span>
                <span>HTML/CSS</span>
                <span>PHP</span>
              </div>
            </div>
            <div className="card">
              <h3>Frameworks & Libraries</h3>
              <div className={styles.skillTags}>
                <span>React</span>
                <span>Angular</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Symfony</span>
                <span>Flutter</span>
              </div>
            </div>
            <div className="card">
              <h3>Big Data & Bases de Données</h3>
              <div className={styles.skillTags}>
                <span>PySpark</span>
                <span>Hadoop</span>
                <span>HBase</span>
                <span>MongoDB</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
