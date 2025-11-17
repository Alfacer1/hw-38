import React, { useState } from 'react';
import Button from './components/Button'; // Імпорт компонента
import './App.css'; 

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  // Обробник події кліку
  const handleIncrement = () => {
    setCount(count + 1);
    console.log('Кнопку натиснуто!');
  };

  return (
    <div className="App">
      <h1>Лічильник: {count}</h1>
      
      {/* Використання компонента Button */}
      <Button onClick={handleIncrement}>
        Збільшити лічильник
      </Button>
      
      <p>
        Відкрийте консоль розробника, щоб побачити повідомлення.
      </p>
    </div>
  );
};

export default App;