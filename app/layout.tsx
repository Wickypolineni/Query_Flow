// import Footer from '@/components/footer'
// import Header from '@/components/header'
// import { Sidebar } from '@/components/sidebar'
// import { ThemeProvider } from '@/components/theme-provider'
// import { Toaster } from '@/components/ui/sonner'
// import { cn } from '@/lib/utils'
// import { ClerkProvider } from '@clerk/nextjs'
// import type { Metadata, Viewport } from 'next'
// import { Inter as FontSans } from 'next/font/google'
// import './globals.css'

// const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans'
// })

// const title = 'Morphic'
// const description =
//   'A fully open-source AI-powered answer engine with a generative UI.'

// export const metadata: Metadata = {
//   metadataBase: new URL('https://morphic.sh'),
//   title,
//   description,
//   openGraph: {
//     title,
//     description
//   },
//   twitter: {
//     title,
//     description,
//     card: 'summary_large_image',
//     creator: '@miiura'
//   }
// }

// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   minimumScale: 1,
//   maximumScale: 1
// }

// export default function RootLayout({
//   children,
//   enableSaveChatHistory = true // Add prop with default value
// }: {
//   children: React.ReactNode
//   enableSaveChatHistory?: boolean
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en" suppressHydrationWarning={true}>
//         <body className={cn('font-sans antialiased', fontSans.variable)}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <Header />
//             {children}
//             {enableSaveChatHistory && <Sidebar />}
//             <Footer />
//             <Toaster />
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   )
// }

import Footer from '@/components/footer'
import Header from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

// ... your metadata and viewport configurations remain the same ...

const title = 'AI Search'
const description =
  'A fully open-source AI-powered answer engine with a generative UI.'

export const metadata: Metadata = {
  metadataBase: new URL('https://morphic.sh'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@miiura'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children,
  enableSaveChatHistory = true
}: {
  children: React.ReactNode
  enableSaveChatHistory?: boolean
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary:
            'bg-primary text-primary-foreground hover:bg-primary/90',
          card: 'bg-background',
          headerTitle: 'text-foreground',
          headerSubtitle: 'text-muted-foreground',
          socialButtonsBlockButton:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          formFieldLabel: 'text-foreground',
          footerActionLink: 'text-primary hover:text-primary/90'
          // Add any other style overrides you need
        }
      }}
    >
      <html lang="en" suppressHydrationWarning={true}>
        <body className={cn('font-sans antialiased', fontSans.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
            <SignedIn>
              {children}
              {enableSaveChatHistory && <Sidebar />}
              <Footer />
              <Toaster />
            </SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
