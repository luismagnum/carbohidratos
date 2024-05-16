import { useState } from "react";
import Data from "../data.json";

function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  
  // Función para manejar cambios en el campo de búsqueda
  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtrar los datos y establecer el resultado de la búsqueda
    const result = Data.find(post => post.title.toLowerCase() === term);
    setSearchResult(result);
  };

  return (
    <div className='App text-center mx-auto py-10'> 
      <h1 className='text-xl mt-4 md:text-3xl mb-4 text-green-500 font-bold'>Conteo de carbohidratos</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="my-3 p-2"
      />
      {searchResult ? (
        <div className='text-black font-bold'>
          <div key={searchResult.id}>
            <h2 className="text-yellow-400 text-xl font-bold mt-2">Alimento</h2>
            <h4>{searchResult.title}</h4>
            <h2 className="text-yellow-400 text-xl font-bold mt-2">Carbohidratos</h2>
            <p>{searchResult.porcion}</p>
            <h2 className="text-yellow-400 text-xl font-bold mt-2">Gramos de HC</h2>
            <p>{searchResult.gramos}</p>
          </div>
        </div>
      ) : searchTerm !== '' ? (
        <p className='font-bold text-yellow-500'>No se encontró ningún producto con el término "{searchTerm}"</p>
      ) : null}
    </div>
  );
}

export default Hero