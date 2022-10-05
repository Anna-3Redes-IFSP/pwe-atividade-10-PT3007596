class Tabela extends React.Component {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' },
            { id: 2, disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' },
            { id: 3, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' },
            { id: 4, disciplina: 'Introdução à Banco de Dados', carga: 66.7, periodo: 'Noturno' }
         ]
      }
   }

   render() { 
      return (
        <div>
          <h2 align='center' id='title'><u>Componentes curriculares</u></h2><br></br>
          <table class='table table-hover' id='componentes'>
            <thead>
              <tr align='center' class='bg-success'>
                <th>DISCIPLINA</th>
                <th>CARGA</th>
                <th>PERÍODO</th>
              </tr>
            </thead>
            <tbody>
              {this.state.componentes.map((componente) =>
                  <tr align='center'>
                    <td>{componente.disciplina}</td>
                    <td>{componente.carga}</td>
                    <td>{componente.periodo}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      )
   }
}

ReactDOM.render(<Tabela/>, document.getElementById('tabela'));