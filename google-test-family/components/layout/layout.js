import Navigation from "@/components/navigation/navigation";

function Layout({ children }) {
  return (
      <>
        <Navigation />
        <main>
         { children }
        </main>
      </>
  );
}

export default Layout;