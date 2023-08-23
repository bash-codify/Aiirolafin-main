
import Header from '@/Components/Header/Header'
import './globals.css'
import Footer from '@/Components/footer/Footer'
import { AppProvider } from '@/Components/context/contextapi'


export const metadata = {
  title: 'Aiirolafin',
  description: 'Real Estate Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <AppProvider>
          
          {children}

        </AppProvider>
        <Footer/>
        </body>
    </html>
  )
}
