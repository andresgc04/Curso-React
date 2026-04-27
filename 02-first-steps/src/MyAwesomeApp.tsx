import type { CSSProperties } from "react";

const firstName = "Andres";
const lastName = "Guerrero";

const favoriteGames = ["Elden Ring", "Smash", "Metal Gear"];
const isActive = true;

const address = {
  zipCode: "ABC-123",
  country: "Canada",
};

const myStyles: CSSProperties = {
  backgroundColor: "#fafafa",
  borderRadius: 20,
  padding: 10,
  marginTop: 20,
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? "Activo" : "No Activo"}</h1>

      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
};

// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Andres Eugenio</h1>
//       <h2>Guerrero Cordero</h2>
//     </>
//   );
// }
