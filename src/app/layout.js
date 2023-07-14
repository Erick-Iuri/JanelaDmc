'use client'

/* Font Google */
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/* chakra ui */
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

/* variavel para cores */

const colors = {
  azulBonito: {
    900: "#316CCF",
  }
}

const theme = extendTheme({ colors });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Erick Aniello</title>
        <link rel="icon" type="image/x-icon" href="/objetos/logo.svg"></link>
      </head>
      <body className={inter.className}>
          <ChakraProvider theme={theme}> 
              {children}
          </ChakraProvider>
      </body>
    </html>
  )
}
