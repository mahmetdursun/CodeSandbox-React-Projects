import "./styles.css";

// const adı = "Ahmet";

// const Döngü = () => {
//   const soyadı = "Dursun";
//   return (
//     <article>
//       <h2>{adı}</h2>
//       <h4>{soyadı}</h4>
//     </article>
//   );
// };

// function DöngüSerisi() {
//   return (
//     <section>
//       <Döngü />
//     </section>
//   );
// }
// export default DöngüSerisi;

// function Takım(){
//   const lig= "süper lig"
//   const takım ="Galatasaray"
//   return(
//     <div>
//     <h1>{lig}</h1>
//     <h2>{takım}</h2>
//     </div>
//   )
// }

// function DöngüSerisi(){
//   return(
//     <Takım/>
//   )
// }
// export default DöngüSerisi;

// function Takım(props) {
//   return (
//     <div>
//       <h1>{props.lig}</h1>
//       <h2>{props.takım}</h2>
//     </div>
//   );
// }

// function DöngüSerisi() {
//   return (
//     <>
//       <Takım lig="Süperlig" takım="Galatasaray" />
//       <Takım lig="Premierlig" takım="Manchester city" />
//     </>
//   );
// }
// export default DöngüSerisi;

function Takım({ lig, takım }) {
  return (
    <div>
      <h1>{lig}</h1>
      <h2>{takım}</h2>
    </div>
  );
}

function DöngüSerisi() {
  return (
    <>
      <Takım lig="Süperlig" takım="Galatasaray" />
      <Takım lig="Premierlig" takım="Manchester city" />
    </>
  );
}
export default DöngüSerisi;
