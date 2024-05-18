import Form from "../browser/Form";
import Header from "../browser/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <Form />
    </div>
  );
}
