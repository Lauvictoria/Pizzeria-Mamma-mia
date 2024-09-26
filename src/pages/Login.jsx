import { useState } from "react"

const Login = () =>{
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault()
        
        if (!email.trim() || !contraseña.trim()) {
            setError('Todos los campos son obligatorios');
            setSuccess(false);
            return;
          }
      
        
        if (contraseña.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            setSuccess(false);
            return;
          }
      
        setError('');
        setSuccess(true);
        };

    return (
        <>
        <div className="login-container">
            <form className="formulario" onSubmit={validarDatos}>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">Sesión Iniciada Correctamente</p>}
                <div  className="form-group">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                </div>
                <div  className="form-group">
                    <label>Contraseña</label>
                    <input
                    type="text"
                    name="contrasena"
                    className="form-control"  
                    onChange={(e) => setContraseña(e.target.value)} value={contraseña}
                    />
                </div>
                <button  className="btn btn-dark mt-3" type="submit" >Enviar</button>    
            </form>
            </div>
        </>
    )
}

export default Login