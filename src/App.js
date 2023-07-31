import InputField from "./components/InputField";
import TripList from "./components/TripList";

function App() {
  return (
    <section
      style={{ display: "block", marginLeft: "30px", marginTop: "30px" }}
    >
      <header className="header">
        <p>
          Weather <span style={{ fontWeight: 700 }}>Forecast</span>
        </p>
      </header>
      <InputField />
      <TripList />
    </section>
  );
}

export default App;
