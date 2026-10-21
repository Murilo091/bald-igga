import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './App.module.css'

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    if (email === 'audinha@gmail.com' && password === '12345') {
      const user = {
        name: email,
        dataEntrada: new Date(),
        id: Math.floor(Math.random() * 100000),
      }

      localStorage.setItem('usuario', JSON.stringify(user))
      navigate('/home')
      return
    }

    setErrorMessage('Credenciais incorretas')
  }

  return (
    <main className={s.login}>
      <form className={s.formulario} onSubmit={handleLogin}>
        <div className={s.round}>
          <img className={s.logo} src="/images.jpg" alt="Logo" />
        </div>

        <div className={s.wrapInputLabel}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Ex.:maskos@gmail.com"
            aria-invalid={Boolean(errorMessage)}
          />
        </div>

       <div className={s.wrapInputLabel}>
        <label htmlFor="senha">Senha:</label>

         <div className={s.passwordWrapper}>
         <input type={passwordVisible ? 'text' : 'password'} id="senha" value={password}
         onChange={(event) => setPassword(event.target.value)}
         placeholder="Insira sua senha" 
         aria-invalid={Boolean(errorMessage)}
         />

       <button  type="button"  onClick={() => setPasswordVisible((visible) => !visible)}
      aria-label={passwordVisible ? 'Ocultar senha' : 'Mostrar senha'}
      className={s.togglePassword}
      >
         <img src={passwordVisible ? '/eye-crossed.svg' : '/eye.svg'} alt="" width="22" height="22"/>
       </button>
     </div>
   </div>


        <button type="submit" className={s.btnLogin}>
          Entrar
        </button>

        {errorMessage && (
          <div className={s.errorDiv} id="error-modal" role="alert">
            <h3>{errorMessage}</h3>
            <button type="button" onClick={() => setErrorMessage('')} aria-label="Fechar">
              ❌
            </button>
          </div>
        )}
      </form>
    </main>
  )
}

export default Login
