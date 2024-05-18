import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Namık",
      age: 30,
      isSingle: false
    },
    {
      id: 2,
      name: "Eda",
      age: 50,
      isSingle: true
    },
    {
      id: 3,
      name: "Engin",
      age: 45,
      isSingle: false
    },
    {
      id: 4,
      name: "Şule",
      age: 35,
      isSingle: false
    },
    {
      id: 5,
      name: "Burcu",
      age: 34,
      isSingle: true
    }
  ]);

  //Aşağıdaki ilk sortedUsers bileşeninin her yeniden oluşturulmasında users array  tekrar tekrar filtrelenip
  // sıralandığından performans sorununa neden olur.
  // ve users dizisi çok fazla veri içeriyorsa, uygulamayı yavaşlatacaktır.
  // Bunun gibi render sırasında  filtreleme ve sıralama yerine, performans sorununu önlemek için useMemo hook kullanın.
  // const sortedUsers = () => {
  //   return (
  //     <ul>
  //       {users
  //         .map((user) => ({
  //           id: user.id,
  //           name: user.name,
  //           age: user.age
  //         }))
  //         .sort((a, b) => a.age - b.age)
  //         .map(({ id, name, age }) => (
  //           <li key={id}>
  //             {name} - {age}
  //           </li>
  //         ))}
  //     </ul>
  //   );
  // };

  // Ancak useMemo hook kullanırsak, users array yalnızca users bağımlılığı
  //  değiştiğinde filtrelenir ve sıralanır.
  // user array'i bu şekilde değiştiğinde filtrelemek ve sıralamak için useMemo hook kullanın
  const sortedUsers = useMemo(() => {
    console.log("useMemo içinde");
    return users
      .map((user) => ({
        id: user.id,
        name: user.name,
        age: user.age
      }))
      .sort((a, b) => a.age - b.age);
  }, [users]);

  return (
    <ul>
      {sortedUsers.map(({ id, name, age }) => (
        <li key={id}>
          {name} - {age}
        </li>
      ))}
      <button onClick={() => setRefresh((prev) => !prev)}>
        Re-render Component
      </button>
      <br />
      <button
        onClick={() => {
          setUsers([
            ...users,
            {
              id: Date.now(),
              name: "Samet",
              age: 50,
              isSingle: false
            }
          ]);
        }}
      >
        useMemo'yu tetiklemek için Kullanıcı ekleyin
      </button>
    </ul>
  );
}
