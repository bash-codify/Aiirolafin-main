
import Header from '@/Components/Header/Header'
import './globals.css'
import Footer from '@/Components/footer/Footer'


export const metadata = {
  title: 'Aiirolafin',
  description: 'Real Estate Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
