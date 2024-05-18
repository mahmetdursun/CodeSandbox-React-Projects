import Panel from "./Panel.js";
import { getImageUrl } from "./utils.js";

// let currentPerson;

export default function Profile({ person }) {
  // console.log(person)
  currentPerson = person;
  return (
    <Panel>
      <Header name={person.name} />
      <Avatar name={person.name} imageId={person.imageId} />
    </Panel>
  );
}

function Header({ name }) {
  return <h1>{name}</h1>;
}

function Avatar({ imageId, name }) {
  return (
    <img
      className="avatar"
      src={getImageUrl({ imageId, name })}
      alt={name}
      width={50}
      height={50}
    />
  );
}
