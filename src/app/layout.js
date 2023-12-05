import '../app/css/globals.css';
import { Poppins } from 'next/font/google';

const roboto = Poppins({
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: 'Clearviction Coding Challenge',
  description: 'This is for Clearviction Coding Challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>

    </html>
  );
}
