export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        inner navbar
        <br />
        {children}
      </div>
    );
  }