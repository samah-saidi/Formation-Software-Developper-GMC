import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  // make the component defensive: if project is missing or some fields are undefined,
  // provide sensible defaults so the component won't crash at render time.
  const {
    image = '',
    title = 'Untitled Project',
    category = '',
    year = '',
    description = '',
    technologies = [],
  } = project || {}

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        {/* <img
          src={image}
          alt={title}
          onError={(e) => {
            // use currentTarget to ensure correct element reference in React SyntheticEvent
            e.currentTarget.src =
              'https://via.placeholder.com/400x250/667eea/ffffff?text=' +
              encodeURIComponent(title)
          }}
        /> */}
        <div className={styles.projectOverlay}>
          <span className={styles.projectCategory}>{category}</span>
        </div>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <span className={styles.projectYear}>{year}</span>
        </div>

        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.projectTechnologies}>
          {(technologies || []).map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
