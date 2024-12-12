import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher = ({ id }) => { // Получение id через пропсы
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setData(response.data);
      } catch (err) {
        setError("Ошибка загрузки данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Перезапуск useEffect при изменении id

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Пост ID: {data.id}</h2>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default DataFetcher;
