import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Samah SAIDI - Data Science & IA Engineer',
  description: 'Portfolio de Samah SAIDI - Étudiante ingénieure en Data Science et Intelligence Artificielle',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}