import "./globals.css";


export const metadata = {
  title: "Valentines",
  description: "Emil sent you a letter!",
  metadataBase: new URL('https://valentine-psi-three.vercel.app'),
  openGraph: {
    images: 'heart.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}