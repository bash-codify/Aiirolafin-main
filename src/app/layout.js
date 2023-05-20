
import Header from '@/Components/Header/Header'
import './globals.css'


export const metadata = {
  title: 'Aiirolafin',
  description: 'Real Estate Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}</body>
    </html>
  )
}
