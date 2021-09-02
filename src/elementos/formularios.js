import styled from 'styled-components';

const colors = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`

      grid-template-columns: 1fr 1fr;   
  }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height:20px;
    font-size: 10px;
`;

const GrupoInput = styled.div`
    background: #fff;
    position: relative;
    z-index: 90;
    padding: 10px;
    border-radius: 10px;
`;

const Input = styled.input`
    
    background: #ccc;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    
`;

const ContenedorCargoFecha = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap 20px;         
    background: #fff;
    position: relative;
    z-index: 90;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
`;

const ContenedorActitudes = styled.h1`
 
    background: #black;
    position: relative;
    z-index: 90;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    text-align: center;
    font-size:20px;
`;
const ContenedorBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ; 
    background: #fff;
    position: relative;
    z-index: 90;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
   
    
`;

const ContenedorPromedioFinal = styled.div`
    display: grid;
    grid-template-columns: 1fr ;
    gap 20px;         
    background: #fff;
    position: relative;
    z-index: 90;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    
    
`;

export {Formulario,Label,GrupoInput,Input,ContenedorCargoFecha,ContenedorActitudes,ContenedorBox,ContenedorPromedioFinal };