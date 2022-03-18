import '../App.css';
import { Link } from 'react-router-dom';

const PeopleList = (props) => {

    return (
        <div className="m-2">
        {/* Display the people details if people is not None */} 
              <>
              <section>
                <div class="tbl-header">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                      <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>RG</td>
                        <td>CPF</td>
                        <td>Data de Nascimento</td>
                        <td>Data de admissão</td>
                        <td>Função</td>
                        <td>Ação</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div class="tbl-content">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      {props.people && props.people.map(people =>{
                      return (
                          <tr>
                            <td>
                              { people.id_pessoa }
                            </td>
                            <td>
                              { people.nome }
                            </td>
                            <td>
                              { people.rg }
                            </td>
                            <td>
                              { people.cpf }
                            </td>
                            <td>
                              { people.data_nascimento }
                            </td>
                            <td>
                              { people.data_admissao }
                            </td>
                            <td>
                              { people.funcao }
                            </td>
                            <td>
                              <Link to={{
                                pathname: '/editpeople/' + people.id_pessoa,
                              }}><span class="edit">✍</span></Link>
                              <Link to={{
                                pathname: '/deletepeople/' + people.id_pessoa,
                              }}><span class="exclude">☒</span></Link>
                            </td>
                          </tr>
                      )})}
                    </tbody>
                  </table>
                </div>
              </section>
              </>
        </div>
        )
}

export default PeopleList;