import s from './App.module.css'

function Home() {
  return (
    <main className={s.home}>
      <div className={s.title}>
          <h1>Sua biblioteca</h1>
          <div className={s.toggle}>
            <button>DOWNLOADS</button>
            <button>UPLOADS</button>
          </div>
      </div>
      <div className={s.tabelas}>
        <section className="painel">
          <h2>Modelos</h2>
          <table>
            <thead>
              <tr>
                <th>Nome do Modelo</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">Nenhum registro cadastrado.</td>
              </tr>
              {/* Adicione linhas aqui, por exemplo:
              <tr>
                <td>Nome do modelo</td>
                <td>Descrição do modelo</td>
              </tr>
              */}
            </tbody>
          </table>
        </section>

        <section className="painel">
          <h2>Usuários</h2>
          <table>
            <thead>
              <tr>
                <th>Nome do Usuário</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">Nenhum registro cadastrado.</td>
              </tr>
              {/* Adicione linhas aqui, por exemplo:
              <tr>
                <td>Nome do usuário</td>
                <td>Descrição do usuário</td>
              </tr>
              */}
            </tbody>
          </table>
        </section>

        <section className="painel">
          <h2>Impressores</h2>
          <table>
            <thead>
              <tr>
                <th>Nome da Impressora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nenhum registro cadastrado.</td>
              </tr>
              {/* Adicione linhas aqui, por exemplo:
              <tr>
                <td>Nome da impressora</td>
              </tr>
              */}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}

export default Home
