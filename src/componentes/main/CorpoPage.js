import React,{useEffect} from 'react';
import './CorpoPage.css';
import Perfil from '../perfil/perfil';
import { setNome, setValor, setTotal,setGastos,deleteGasto } from '../../store/Reducers/Getvalues';
import { useSelector, useDispatch } from "react-redux";
import CurrencyInput from 'react-currency-input-field';



function CorpoMain(props) {
 
  const { nome, valor,total} = useSelector(state => state.Value);
  const gastos = useSelector(state=> state.Value.gastos);
  
  
  const dispatch = useDispatch();
  

  const handleNomeChange = event => {
    dispatch(setNome(event.target.value));
  };

  
  const handleValorChange = value => {
    dispatch(setValor(value));

  };

  const handleSubmit = event => {

    event.preventDefault();

    if (gastos.length >= 7) {
      alert("Você já criou o máximo de tabelas permitido.");
      return;
    }

    
    dispatch(setGastos({ nometable :nome, valortable:valor }));
    dispatch(setNome(''));
    dispatch(setValor(''));
    
    };

    const handleDelete = (index) => {
      dispatch(deleteGasto(index));
    };

    
    useEffect(() => {
      const newTotal = gastos.reduce((total, gasto) => total + parseFloat(gasto.valortable), 0);
      dispatch(setTotal(newTotal));
    }, [gastos, dispatch]);

    
 
 
  return (

      <div>
      
      
      <div className="Container-main">
        <div className="row" id='rowajuste'>
            
            <Perfil 
            trocarcorrosa={props.trocarcorrosa}
            trocarcorblack={props.trocarcorblack}
            trocarcorroxo={props.trocarcorroxo}
            trocarcorcinza={props.trocarcorcinza}
            mantercor={props.mantercor}
            />
          
          <div className="col-md-3 ">


          <form onSubmit={handleSubmit}>


            <div className="container-fluid d-grid gap-2">
            
              <input
                type="text"
                className="ajustedoform"
                placeholder="Nome"
                maxLength={12}
                value={nome}
                onChange={handleNomeChange}
                required
              ></input>
              
            </div>
            
            <div className="container-fluid d-grid gap-2">
           
            <CurrencyInput
                className="ajustedoform"
                placeholder="Valor"
                decimalsLimit={2}
                maxLength={8}
                prefix="R$ "
                value={valor}
                onValueChange={handleValorChange}
                required
              />
              
            </div>
            

            <div className="container-fluid d-grid gap-2">

              <button type="submit" className="btn btn-secondary ">
                Submit
              </button>
            </div>

            </form>

          </div>
          
          <div className="col-md-5">
            <div className="row" id='colunarow'>
              <div className="col">
                <div className="card-header">
                  <h1>Gastos</h1>
                </div>
                <table className="table" id='tabela'>
                  <thead >
                    <tr>
                      <th className='th-corpo'>Nome</th>
                      <th className='th-corpo'>Valor</th>
                    </tr>
                  </thead>
                  <tbody className='reverse'>
                    
                        {gastos.map((gasto,index) => (
                        <tr key={index}>

                        <td className='td-corpo'>{gasto.nometable}</td>
                        <td className='td-corpo'>{gasto.valortable}</td>

                        <td>
                        <button className='btn btn-outline-danger btn-sm mybtn' id='mybtn' onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                        </tr>))}
                        
                       
                       
                    </tbody>
                    
                </table>
                
                <div className='ValorTotal'><span className='spanvalor'>valor total</span>
                <span className='spannumero'>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2  })}</span>
                
                </div>
                <div className='divdobutton'><button className='btn btn-success'>Salvar</button></div>

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    );
  }

  export default CorpoMain;
