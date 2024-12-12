import React, { useState } from "react";
import DataFetcher from "./components/DataFetcher";

const App = () => {
  const [id, setId] = useState(1); // Переменная id определена

  return (
    <div>
      <h1>Пример работы с асинхронными запросами</h1>
      <div>
        <label>Введите ID поста: </label>
        <input
          type="number"
          value={id} // Использование переменной id
          onChange={(e) => setId(Number(e.target.value))} // Обновление id
          min="1"
        />
      </div>
      <DataFetcher id={id} /> {/* Передача id в DataFetcher */}
    </div>
  );
};

export default App;
