import "./styles.css";
import img from "../public/tolkien.png";
function Book() {
  return <img src={img} alt="John Ronald Reuel Tolkien" />;
}

export default function Books() {
  return (
    <section>
      <h1>Harika Kitaplar</h1>
      <Book />
      <Book />
    </section>
  );
}
