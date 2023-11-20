import 'bootstrap/dist/css/bootstrap.css';
import '../pages/tablecheckbx.css';
import { useState } from 'react'

function Tablecheckbxbootstrap () {
  const imgUrl1 = new URL('/src/assets/img/tacouro.png', import.meta.url)
  const imgUrl2 = new URL('/src/assets/img/classroom.png', import.meta.url)
  var arr = []

  const totperg = useState(37)

  // const [totalFazer, settotalFazer] = useState(0);
  const [total, setTotal] = useState(0)
  //  const [porcent, setPorcent] = useState(35);

  const [checkboxMarked, setCheckboxMarked] = useState(() =>
    Array(totperg).fill(0)
  )

  function handleChange () {
    console.log('iniciando o método handleChange')

    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    // Cria um array para armazenar os checkboxes checked
    const checkedCheckboxes = []

    // Percorre todos os checkboxes
    console.log('método handleChange percorre o array')
    checkboxes.forEach((checkbox, index) => {
      // Verifica se o checkbox está checked
      if (checkbox.checked) {
        // Adiciona o checkbox ao array de checkboxes checked
        checkedCheckboxes.push(checkbox)
        //   APAGAR TALVEZ          console.log(checkedCheckboxes);
        console.log('o indice do elemento do array é: ', index)
        setCheckboxMarked(checkboxMarked.splice(index, 1, 1))
        // APAGAR TALVEZ   console.log('adicionando elemento o array ficou assim: ', checkboxMarked);
      } else {
        console.log('o indice do elemento NÃO marcado na array é: ', index)
        setCheckboxMarked(checkboxMarked.splice(index, 1, 0))
      }
    })
    console.log('Atualmente o array ficou assim: ', checkboxMarked)

    {
      /*  AQUI FICARÁ O STORAGE...       AQUI CHAMAREMOS O ARMAZENAR */
    }
    armazenar()

    const tamanhocheckbxmarcados = checkedCheckboxes.length
    const tamanhoGeralArrayCheckbx = checkboxes.length

    // Imprime os checkboxes checked no console
    console.log('Este é o tamanho do checkbox marcados', tamanhocheckbxmarcados)
    console.log('seria este o total do checkbox? ', tamanhoGeralArrayCheckbx)
    //APAGAR TALVEZ   console.log('Este é o array checkbox', checkedCheckboxes)

    document.getElementById('tfazer').value = tamanhocheckbxmarcados
    document.getElementById('tfeito').value = tamanhoGeralArrayCheckbx
    //    settotalFazer(checkboxes.length);
    calcPorcent(tamanhocheckbxmarcados, tamanhoGeralArrayCheckbx)
    //   handlePorcentage();
    //  APAGAR TALVEZ    console.log('valor total a fazer, pego da variavel global é: ', totalFazer);
  }

  function getTacaImage () {
    return <img src={imgUrl1} height='100' alt='taça'></img>
  }

  function getClassroom () {
    return <img src={imgUrl2} height='50' alt='classroom'></img>
  }

  function calcPorcent (varAtual, varTotal) {
    const varperc = Math.floor((varAtual * 100) / varTotal)
    console.log(
      'Chamado calcPorcent; e o valor da percentagem inteira é: ',
      varperc
    )
    setTotal(varperc)
  }

  const armazenar = () => {
    if (localStorage.meuArr) {
      arr = JSON.parse(localStorage.getItem('meuArr'))
    }

    // let novoItem = document.getElementById("EnterField").value;
    //  arr.push(novoItem);
    arr = checkboxMarked.slice()
    // document.getElementById("EnterField").value = "";
    localStorage.meuArr = JSON.stringify(arr)
  }

  function carregar () {
    // Obtenha o valor do localStorage
    var meuArr = localStorage.getItem('meuArr')

    // Converter o valor do localStorage em um array
    if (meuArr) {
      meuArr = JSON.parse(meuArr)
    } else {
      meuArr = []
      setTotal(0)
    }

    console.log('Array já meuArrgado do localStorage, e é: ', meuArr)

    const checkboxs = document.querySelectorAll("input[type='checkbox']")
    var i = 0
    var totalQuestCertasAntes = 0
    for (const checkbox of checkboxs) {
      if (meuArr[i] == 1) {
        console.log(
          'o valor do array',
          i,
          ' é: ',
          meuArr[i],
          ' e deveria ser marcado'
        )
        checkbox.checked = true
        console.log('array 1, o checkbox deve ser true', checkbox.id)
        totalQuestCertasAntes = totalQuestCertasAntes + 1
      } else {
        console.log(
          'o valor do array',
          i,
          ' é: ',
          meuArr[i],
          ' e NÃO deveria ser marcado'
        )
        console.log('array 0, o checkbox deve ser false', checkbox.id)
        checkbox.checked = false
        console.log('passando pelo checkox', checkbox.id)
      }
      i = i + 1
    }
    console.log(
      'o total de elementos do array marcados com 1, o total de perguntas certas é: ',
      totalQuestCertasAntes
    )
    console.log(
      'o total de elementos do array, o total de perguntas é: ',
      meuArr.length
    )
    calcPorcent(totalQuestCertasAntes, meuArr.length)

    /** CHAMA CARREGAMENTO DE NOTA PARA OS LINKS CHECKBOX SELECIONADOS  OU PELO ARRAY COM NUMEROS DIERENTE DE ZERO */
  } /* echa o método carregar */

  const apagarStorage = () => {
    arr = []
    localStorage.meuArr = JSON.stringify(arr)

    const checkboxs = document.querySelectorAll("input[type='checkbox']")
    for (const checkbox of checkboxs) {
      checkbox.checked = false
    }

    alert('Todos os dados do array foram removidos com sucessso!!!')
    window.location.reload()
  }

  /*  TESTE ITERAR POR CHECKBOX  */

  /*  FIM DO TESTE DE ITERAÇÃO POR CHECKBOX  */

  window.onload = function () {
    // Rode o método
    carregar()
  }

  /*       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML  */

  /*       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML  */

  /*       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML  */

  /*       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML  */

  /*       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML       ABAIXO INTERFACE HTML  */

  return (
    <>
      <div>
        <div className="container">
  <div className="row">
    <div className="col-sm xs divbotoes">
    <button type='button' className='button btn1'> {' '} Carregar{' '} </button>

    <button  type='button'  className='button btn2' onClick={() => apagarStorage()} > Reiniciar{' '}</button>
    </div>
  </div>
</div>

        <div className='titlePage'></div>
        <br />
      </div>
      <div className='table-responsive'>
        <table className='table table-hover table-primary'>
          <thead>
            <tr>
              <th scope='col titlecol'>#</th>
              <th scope='col titlecol'>A fazer</th>
              <th scope='col titlecol'>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className='lines-of-column'>
              <th scope='row'>01</th>
              <td><p className="txtQuest">Business Model Canvas- Lean Canvas tipo canvanizer</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>02</th>
              <td><p className="txtQuest">Documento Requisitos (Requisit. de crud, telas, funcionalidade, entid.)</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>03</th>
              <td><p className="txtQuest">Documento Casos de Uso detalhado (conf. requisitos)</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ======================================================================================= */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>04</th>
              <td><p className="txtQuest">Projeto de Interface - Wireframes Interativo</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>05</th>
              <td><p className="txtQuest">Desenho de Arquitetura da Solução (C4 Model)</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>06</th>
              <td><p className="txtQuest">Definição do Framework de trabalho (descrição)</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>07</th>
              <td><p className="txtQuest">Fez Diagrama de Classe ou Modelo de Dados</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>08</th>
              <td><p className="txtQuest">
                SWAGGER de Proj API REST/restful ou Diag da Arquitet
                Tradicional(Ex: MVC)</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>09</th>
              <td><p className="txtQuest">
                Deploy do Mock (Backend Simulado) mockapi.io ou dummyapi.io{' '}</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - A
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>10</th>
              <td><p className="txtQuest">Layout mestre</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>11</th>
              <td><p className="txtQuest">Menus do Sistema</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ======================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>12</th>
              <td><p className="txtQuest">Funcionalidade de Controle de Usuários</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>13</th>
              <td><p className="txtQuest">Funcionalidades da Sprint 1</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>14</th>
              <td><p className="txtQuest">Planos de Testes</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ====================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>15</th>
              <td><p className="txtQuest">Relatório de Testes</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ======================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>16</th>
              <td><p className="txtQuest">Link do site da aplicação: disponível até sua avaliação</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ======================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>17</th>
              <td><p className="txtQuest">Apresentar exemplos de teste previamente cadastrados</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ======================================================================================== */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>18</th>
              <td><p className="txtQuest">Credenciais de acesso para todos os perfis de usuário</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================= */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>19</th>
              <td><p className="txtQuest">
                código fonte, link do GitHub, GitLab, Dropbox, Google Drive, etc</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - B
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================ */}

            {/** ======== MOD C === MOD C === MOD C === MOD C === MOD C === MOD C === MOD C ============ */}

            {/** ======== MOD C === MOD C === MOD C === MOD C === MOD C === MOD C === MOD C ============ */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>20</th>
              <td><p className="txtQuest">
                Códdigo Fone e artefatos armazenados (Link de gitHub,
                GoogleDrive, etc)</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - C
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ============================================================================= */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>31</th>
              <td><p className="txtQuest">Link do aplicativo funcionando</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - C
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ============================================================================= */}

            {/** =========================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>22</th>
              <td><p className="txtQuest">Link do Video da sua apresentação do seu TCC</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    mod - C
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ============================================================================= */}

            {/** ======== Questões Gerias ========= Questões Gerias =====Questões Gerias ======== */}

            {/** ======== Questões Gerias ========= Questões Gerias =====Questões Gerias ======== */}

            {/** =================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>23</th>
              <td><p className="txtQuest">Aplicação deve ser 100% em Web</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                    R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================== */}

            {/** ==================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>24</th>
              <td><p className="txtQuest">Deve conter Login e Registro de Usuários</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================ */}

            {/** ==================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>25</th>
              <td><p className="txtQuest">Integração Auth0, com Google, Facebook, Linkedin, etc</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================ */}

            {/** ====================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>26</th>
              <td><p className="txtQuest">Responsividade</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================= */}

            {/** ===================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>27</th>
              <td><p className="txtQuest">Controle de acesso a funcionalidades.</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================= */}

            {/** =================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>28</th>
              <td><p className="txtQuest">
                O Menu do sistema dá acesso a todas as suas funcionalidades?</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================= */}

            {/** ==================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>29</th>
              <td><p className="txtQuest">O sistema tem no mínimo 4 funcionalidades</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ============================================================================== */}

            {/** ================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>30</th>
              <td><p className="txtQuest">Cada funcionalidade tem sua operaação de CRUD?</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================ */}

            {/** ================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>31</th>
              <td><p className="txtQuest">O sistema tem exportação de dados em PDF ou excel</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** =============================================================================== */}

            {/** ====================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>32</th>
              <td><p className="txtQuest">
                Há uma pesquisa por ID, lookup dos dados (combobox ou janela de
                seleção)</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ============================================================================== */}

            {/** =================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>33</th>
              <td><p className="txtQuest">Há um sistema mestre-detalhe (entendo SPA)</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ================================================================================ */}

            {/** ==================================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>34</th>
              <td><p className="txtQuest">
                Tem 4 funcionalidades extras (exceto Login/Auth0, Cadastro/SPA)</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ============================================================================== */}

            {/** ============================================================================= */}
            <tr className='lines-of-column'>
              <th scope='row'>35</th>
              <td><p className="txtQuest">
                Estatística de 5 indicadores em gráficos (Linha,
                barra, etc)</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** =========================================================================== */}

            {/** =============================================================================== */}
            <tr className='lines-of-column'>
              <th scope='row'>36</th>
              <td><p className="txtQuest">Banco de dados com 6 entidades NoSQL, ou 8 entidades SQL</p></td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ========================================================================= */}

            {/** ================================================================================ */}
            <tr className='lines-of-column'>
              <th scope='row'>37</th>
              <td><p className="txtQuest">
                NÃO USAR Plataf. de Gestão de Conteúdo, como Wordpress, Drupal,
                Joomla{' '}</p>
              </td>
              <td className='status'>
                <div>
                  {''}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input'
                    type='checkbox'
                    onChange={handleChange}
                  />
                  <label className='form-check-label txtStat' htmlFor='fl11'>
                  R Geral
                  </label>{' '}
                </div>
              </td>
            </tr>

            {/** ============================================================================ */}
          </tbody>
        </table>
      </div>
      <spam></spam>



      <div className='tableResult'>
        <table className='table table-striped table-primary'>
          <thead className='pontos'>
            <tr>
              <th scope='col'></th>
              <th scope='col'>CONCLUSÕES</th>

            </tr>
          </thead>
          <tbody>
            <tr className='lines-of-column'>
              <th scope='row'></th>
              <td>TRABALHO REALIZADO                
                  {'  '}
                  {/* NÃO APAGUE classe form-check-input,  é tamanho do checkbox */}
                  <input
                    className='form-check-input checkbxgeral inpTot'
                    type='TEXT'
                    name='lan'
                    id='tfazer'
                    defaultValue={0}
                    disabled=''
                    onChange={e => {
                      setTotal(e.target.value)
                    }}
                  />
                  <label className='form-check-label' htmlFor='fl11'></label>{' '}
                </td>
            </tr>

            <tr className='lines-of-column'>
              <th scope='row'></th>
              <td>TOTAL PROPOSTO
                  {'  '}
                  <input
                    className='checkbxgeral inpTot'
                    type='text'
                    id='tfeito'
                    defaultValue={0}
                    disabled=''
                  />
                  <label className='form-check-label' htmlFor='fl224'></label>{' '}
                </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='form-floating mt-3 mb-3 text-center box-text'>
        <div>
          <br />
          <label
            className='label-text-area'
            htmlFor='ControlTextarea1 label-area'
          >
            <span className='title-area-result'><h4>You are proficient in :</h4></span>
          </label>
        </div>
        <div>
          <div className="results">
            <h3>Seu resultado foi {total } % </h3> 
            {total > 70 ? getTacaImage() : getClassroom()}          
          </div>
        </div>
      </div>
    </>
  )
}

export default Tablecheckbxbootstrap
