import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const Register = () => {
    const { register } = useUser(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
          setError('Todos los campos son obligatorios');
          return;
        }
    
        if (password.length < 6) {
          setError('La contraseña debe tener al menos 6 caracteres');
          return;
        }
    
        const registroExitoso = await register(email, password);
        if (registroExitoso) {
          setSuccess('Usuario registrado con éxito');
          setError('');
        } else {
          setError('Error al registrar el usuario');
          setSuccess('');
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      );
    };
    
    export default Register;