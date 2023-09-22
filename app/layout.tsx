import Navbar from "@/components/Navbar"
import './globals.css'
import Footer from "@/components/Footer"


export const metadata = {
  title: 'Hire Me Bob',
  description: 'The place to work and work to place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
