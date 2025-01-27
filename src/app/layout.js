import "./globals.css";


export const metadata = {
  title: "Valentines 2024",
  description: "Emil sent you a letter!",
  metadataBase: new URL(''),
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