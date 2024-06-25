import React from 'react';
import { FaUser, FaVenusMars } from 'react-icons/fa';
import { GiWeight, GiBodyHeight } from 'react-icons/gi';

const FormComponent = ({ username, setUsername, userPeso, setPeso, userAltura, setAltura, userSexo, setSexo, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Acesse o sistema</h1>
      <div className="dadosForm">
        <input type="text" placeholder="Nome" required value={username} onChange={(e) => setUsername(e.target.value)} />
        <FaUser className="icon" />
      </div>

      <div className="dadosForm">
        <input type="number" placeholder="Peso" required value={userPeso} onChange={(e) => setPeso(e.target.value)} />
        <GiWeight className="icon" />
      </div>

      <div className="dadosForm">
        <input type="number" placeholder="Altura" required value={userAltura} onChange={(e) => setAltura(e.target.value)} />
        <GiBodyHeight className="icon" />
      </div>

      <div className="dadosForm">
        <select required value={userSexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="" disabled>Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <FaVenusMars className="icon" />
        
      </div>

      <button type="submit">Vamos lá!</button>

      
    </form>
  );
};

export default FormComponent;