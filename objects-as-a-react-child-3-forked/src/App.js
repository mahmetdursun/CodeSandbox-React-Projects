import "./styles.css";
import img from "../public/tolkien.png";
const person = {
  name: "John Ronald Reuel Tolkien",
  theme: {
    backgroundColor: "black",
    color: "pink"
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'in Yapılacaklar Listesi</h1>
      <img src={img} alt="John Ronald Reuel Tolkien" />
      <ul>
        <li>Yüzüklerin Efendisi üçlemesini tamamla</li>
        <li>Orta Dünya mitolojileri üzerine yaz</li>
        <li>Hobbit kitabını revize et</li>
      </ul>
    </div>
  );
}
