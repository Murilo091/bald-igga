import { useState } from 'react'

import s from './App.module.css'

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleTogglePassword = () => {
    setPasswordVisible((currentValue) => !currentValue)
  }

  const handleLogin = () => {
    setErrorMessage('Credenciais incorretas')
  }

  const handleCloseError = () => {
    setErrorMessage('')
  }

  return (
    <>
    <div className={s.login}>
      <div className={s.formulario}>
        <div className={s.round}>
          <img className={s.logo} src="../../public/logo.jpg" alt="Figma Logo" />
        </div>

        <div className={s.wrapInputLabel}>
          <label htmlFor="nome">Email:</label>
          <input type="text" id="nome" placeholder="Ex.:maskos@gmail.com" />
        </div>

        <div className={s.wrapInputLabel}>
          <label htmlFor="senha">Senha:</label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="senha"
            placeholder="Insira sua senha"
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            aria-label="Mostrar senha"
            className={s.togglePassword}
          >
            <img src="../../public/view.png" alt="Senha" id="eye" className={s.eye} width="25" />
          </button>
        </div>

        <button type="button" className={s.btnLogin} onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
      {errorMessage && (
        <div className={s.errorDiv} id="error-modal">
          <h3>{errorMessage}</h3>
          <button type="button" onClick={handleCloseError}>
            ❌
          </button>
        </div>
      )}
    </>
  )
}

export default App
