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
      <h1 className='text-xl mt-4 md:text-3xl mb-4 text-[#00ff08] font-bold'>Conteo de carbohidratos</h1>
      <input
        type="text"
        placeholder="Buscar alimentos.."
        value={searchTerm}
        onChange={handleSearchChange}
        className="my-3 p-2 bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-green-700 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-green-700"
      />
      {searchResult ? (
        <div className='text-black font-bold'>
          <div key={searchResult.id}>
            <h2 className="text-green-600 text-xl font-bold mt-2">Alimento</h2>
            <h4>{searchResult.title}</h4>
            <h2 className="text-green-600 text-xl font-bold mt-2">Carbohidratos</h2>
            <p>{searchResult.porcion}</p>
            <h2 className="text-green-600 text-xl font-bold mt-2">Gramos de HC</h2>
            <p>{searchResult.gramos}</p>
          </div>
        </div>
      ) : searchTerm !== '' ? (
        <p className='font-bold text-green-600'>No se encontró ningún producto con el término "{searchTerm}"</p>
      ) : null}
    </div>
  );
}

export default Hero