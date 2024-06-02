import Footer from "../components/footer";
import Header from "../components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col">
      <Header />
      <main className={" flex-1"}>{children}</main>
      <Footer />
    </div>
  );
}
