import { useState } from "react";
import "./Login.css";
import { FaUser, FaVenusMars } from "react-icons/fa";
import { GiWeight, GiBodyHeight } from "react-icons/gi";

const Login = () => {
  // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");
  const [userPeso, setPeso] = useState("");
  const [userAltura, setAltura] = useState("");
  const [userSexo, setSexo] = useState("");
  const [userTreino, setTreino] = useState(false);

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, userPeso, userAltura, userSexo, userTreino });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="dadosForm">
          <input type="text" placeholder="E-mail" required value={username} onChange={(e) => setUsername(e.target.value)} />
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
    </div>
  );
}

export default Login;