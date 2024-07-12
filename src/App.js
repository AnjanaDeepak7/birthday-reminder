import React, { useState } from "react";
import users from "./users";
import List from "./List";
function App() {
  const [people, setPeople] = useState(users);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
