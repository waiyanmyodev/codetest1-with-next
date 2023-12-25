import { Inter } from 'next/font/google'
import './globals.css'
import './responsive.css'
import '@fortawesome/fontawesome-free/css/all.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lading page ',
  description: '2023@WaiYanMyo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
