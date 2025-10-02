import ProjectCard from '@/components/ProjectCard'
import styles from './projects.module.css'

export const metadata = {
  title: 'Projets - Samah SAIDI',
  description: 'Découvrez mes projets en Data Science, développement web et IoT',
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Décor - Plateforme de Gestion d'Articles Décoratifs",
      description: "Application complète de gestion d'articles de décoration avec architecture microservices. Utilise REST, gRPC, GraphQL et Kafka pour la communication entre services.",
      technologies: ["Angular 17", "Node.js", "MongoDB", "Microservices", "Kafka", "GraphQL"],
      image: "/images/project1.jpg",
      year: "2025",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Prédiction des Prix Immobiliers en Tunisie",
      description: "Modèle de Machine Learning (XGBoost) pour prédire les prix immobiliers avec un R² de 0.756. Basé sur plus de 16 000 annonces scrappées du web avec feature engineering et optimisation des hyperparamètres.",
      technologies: ["Python", "XGBoost", "Web Scraping", "Feature Engineering", "Data Analysis"],
      image: "/images/project2.jpg",
      year: "2024",
      category: "Data Science"
    },
    {
      id: 3,
      title: "Plateforme de Gestion Gym - WEBACKIN",
      description: "Développement d'une plateforme complète de gestion des abonnements pour un club de sport. Gestion des membres, planning des cours et suivi des paiements.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "/images/project3.jpg",
      year: "2024",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Machine à Trois Axes Motorisés",
      description: "Conception et développement d'une machine CNC à trois axes motorisés dans le cadre du projet de fin d'études. Programmation des contrôleurs et interface utilisateur.",
      technologies: ["C++", "Arduino", "Automatisme", "Électronique"],
      image: "/images/project4.jpg",
      year: "2023",
      category: "IoT & Robotics"
    },
    {
      id: 5,
      title: "Mini Projet Éolienne",
      description: "Conception et réalisation d'un prototype fonctionnel d'éolienne pour produire de l'énergie renouvelable en transformant l'énergie mécanique du vent en électricité.",
      technologies: ["Énergie Renouvelable", "Électronique", "Prototypage"],
      image: "/images/project5.jpg",
      year: "2022",
      category: "IoT & Robotics"
    },
    {
      id: 6,
      title: "Aspirateur Autonome Arduino",
      description: "Développement d'un robot aspirateur autonome utilisant Arduino. Navigation autonome avec détection d'obstacles et optimisation du parcours de nettoyage.",
      technologies: ["Arduino", "C++", "Capteurs", "Robotique"],
      image: "/images/project6.jpg",
      year: "2022",
      category: "IoT & Robotics"
    }
  ]

  const categories = ["Tous", "Web Development", "Data Science", "IoT & Robotics"]

  return (
    <div className={styles.projectsPage}>
      {/* Hero Section */}
      <section className={styles.projectsHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Mes Projets</h1>
          <p className={styles.pageSubtitle}>
            Découvrez mes réalisations en Data Science, développement web et IoT
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Intéressé par mon travail ?</h2>
            <p>N hésitez pas à me contacter pour discuter de vos projets</p>
            <a href="/contact" className="btn">Me Contacter</a>
          </div>
        </div>
      </section>
    </div>
  )
}