import TabularData from "./components/TabularData";
import ExampleSection from "./components/ExampleSection";
export default function Home() {

  return (
    <main className="px-5 py-14">
      <h1 className="heading2 leading-snug text-slate-100 text-center pb-10">
        Books API using Next.js & Neon with JWT Auth
      </h1>
      <TabularData/>
      <ExampleSection/>
      
    </main>
  );
}
