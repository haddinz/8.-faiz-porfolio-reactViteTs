import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./custom/loader";

function Layout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <Helmet>
        <title>{title ? title + " || Hilmi" : "Hilmi"}</title>
        <link rel="icon" type="image/png" href="rutes.svg" sizes="16x16" />
        <meta
          name="description"
          content={description ? description : "Created by Routes.ID"}
        />
        <meta name="author" content="Hajrul Ahmad Harudin" />
        <meta
          property="Social: Linkendin"
          content="https://www.linkedin.com/in/hajrul-ahmad-harudin/"
        />
        <meta
          property="Social: Youtube please watch wkwkwkwk, canda"
          content="https://www.youtube.com/@rutes5872/videos"
        />
      </Helmet>

      <AnimatePresence>
        <section className="min-h-[100vh] w-full mx-auto relative flex flex-col justify-between bg-gray-100">
          {loading ? (
            <motion.div key="secret">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <header className="w-full fixed z-50">
                <Header />
              </header>

              <main key="children" className="w-full h-full relative">
                <div className="mt-24 md:mt-20">{children}</div>
              </main>

              <footer className="w-full relative">
                <Footer />
              </footer>
            </>
          )}
        </section>
      </AnimatePresence>
    </>
  );
}

export default Layout;
