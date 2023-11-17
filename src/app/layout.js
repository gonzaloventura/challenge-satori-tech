import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Challenge Satori Tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
