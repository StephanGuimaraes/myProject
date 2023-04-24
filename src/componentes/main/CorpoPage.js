import React,{useEffect, useState} from 'react';
import './CorpoPage.css';
import Perfil from '../perfil/perfil';
import { useSelector, useDispatch } from "react-redux";
import {useForm} from 'react-hook-form';



function CorpoMain(props) {

  const {register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const [gastos, setgastos] = useState([]);
  const [total, settotal] =useState(0);
  
 console.log(gastos);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalformatado = parseFloat(gastos.reduce(
      (acc, gasto) => acc + gasto.valor, 0)).toLocaleString(
        'pt-BR', { style: 'currency', currency: 'BRL' });
    settotal(totalformatado);
  }, [gastos]);

  const handlesubmit = data => {

    
    const novoGasto = { nome: data.nome, valor: data.valor };
    console.log(novoGasto);
    if (gastos.length >= 7) {
      alert("Você já criou o máximo de tabelas permitido.");
      return;
    }

    

    setgastos([...gastos, novoGasto]);
    reset()

    
    
  };

    const handleDelete = (index) => {
      const newGastos = [...gastos];
      newGastos.splice(index, 1);
      setgastos(newGastos);
    };
  
 
 
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


          <form onSubmit={handleSubmit(handlesubmit)}>


            <div className="container-fluid d-grid gap-2">
            
              <input
                type="text"
                className="ajustedoform"
                placeholder="Nome"
                maxLength={12}
                {...register('nome',{required: true})}
                               
              ></input>
              
            </div>
            
            <div className="container-fluid d-grid gap-2">
           
            <input
                type='number'
                className="ajustedoform"
                placeholder="Valor"
                step="0.01"          
                {...register('valor', { required: true})}
                                
              />
              
            </div>
            

            <div className="container-fluid d-grid gap-2">

              <button type="submit" className="btn btn-secondary " disabled={isSubmitting}>
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

                        <td className='td-corpo'>{gasto.nome}</td>
                        <td className='td-corpo'>{gasto.valor}</td>

                        <td>
                        <button className='btn btn-outline-danger btn-sm mybtn' id='mybtn' onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                        </tr>))}
                        
                       
                       
                    </tbody>
                    
                </table>
                
                <div className='ValorTotal'><span className='spanvalor'>valor total</span>
                <span className='spannumero'>{total}</span>
                
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
