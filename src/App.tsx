import ThemedComponent from "./components/ThemedComponent";
import ThemeToggleButton from "./components/ThemeToggleButton";
import ThemeProvider from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher</h1>
        <ThemeToggleButton />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
