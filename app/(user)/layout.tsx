import Header from '@/components/Header';
import '../../styles/globals.css';
import { Inter } from 'next/font/google';
import Banner from '@/components/Banner';
import { Providers } from './providers';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "CHAN's blog",
  description: 'myblogblogblogblogggggg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <body className={inter.className}> */}
      <body className='max-w-7xl mx-auto'>
        <Providers>
          <Header />
          <Banner />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
