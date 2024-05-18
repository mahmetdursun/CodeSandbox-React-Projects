import Profile from "./Profile.js";

export default function App() {
  return (
    <>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Namık"
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Eda"
        }}
      />
    </>
  );
}
