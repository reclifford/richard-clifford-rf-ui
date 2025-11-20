import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Header from "./components/Header";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Sidebar />
      <Main>
        <Header />
        <section className="flex flex-dir-col gap-16">
          <h2>Event setup guide</h2>
          <p>
            See the available list of modules below. We suggest that you start
            with the attendee module.
          </p>
        </section>
        <Accordion />
      </Main>
    </>
  );
}

export default App;
