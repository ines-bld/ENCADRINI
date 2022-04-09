import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';

function Hello() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [Items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch('signin');
    const Items = await data.json();
    setItems(Items);
  };

  return (
    <section>
      {
        Items.map(item => (
          <div>
            <p>hiiii</p>
            <p>{item.name}</p>
            <p>{item.message}</p>
          </div>
  ))
      }
    </section>
  );
}

export default Hello;