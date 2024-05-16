
import React from 'react'

const Tabla = () => {
  return (
    <div>
        <table className="text-center justify-center mx-auto mt-2 mb-10">
  <thead>
    <tr>
      <th scope="col" className='text-xl text-green-500 font-bold px-3'>Rango</th>
      <br></br>
      <th scope="col" className='text-xl text-green-500 font-bold'>D y Alm</th>
    </tr>
  </thead>
  <tbody className='border-solid border-2 border-black'>
    <tr>
      <th scope="row">80-120</th>
      <br></br>
      <td className='font-bold'>No</td>
    </tr>
    <tr>
      <th scope="row">120-170</th>
      <br></br>
      <td className='font-bold'>+1</td>
    </tr>
    <tr>
      <th scope="row">170-220</th>
      <br></br>
      <td className='font-bold'>+2</td>
    </tr>
    <tr>
      <th scope="row">220-270</th>
      <br></br>
      <td className='font-bold'>+3</td>
    </tr>
    <tr>
      <th scope="row">270-320</th>
      <br></br>
      <td className='font-bold'>+4</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Tabla