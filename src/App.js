import React from 'react';
import { Formulario } from './elementos/formularios';
import { Label } from './elementos/formularios';
import { GrupoInput } from './elementos/formularios';
import { Input,ContenedorCargoFecha,ContenedorActitudes,ContenedorBox,ContenedorPromedioFinal  } from './elementos/formularios';


const App = () => {
  return ( 
    <main>
      <h1><center>Evaluacion de Talento</center></h1>
      <Formulario action="">
      <GrupoInput>
        <div>
          <Label htmlFor="">Nombre del Evaluado</Label>
        </div>
        <div>
          <Input type="text" placeholder="Apellido 1"/>
          <Input type="text" placeholder="Apellido 2"/>
          <Input type="text" placeholder="Nombres"/>
        </div>
      </GrupoInput>

      <ContenedorCargoFecha>
        <div>
          <label htmlFor="">Cargo</label>
          <input type="text"/>
        </div>
        <div>
          <label htmlFor="">Fecha</label>
          <input type="date"/>
        </div>
      </ContenedorCargoFecha>

      <h1>Valoraciones</h1>
      <h2>Insuficiente(1) - Regular(2) - Bueno(3) - Muy Bueno(4) - Excelente(5)</h2>

      <ContenedorActitudes>Actitudes & Factor Humano</ContenedorActitudes>
      <ContenedorBox>
        <div>
          <Label>ACTITUD HACIA LA ORGANIZACIÓN - Sentimiento de pertenencia a la compañía y adhesión a sus lineamientos. Lealtad para con la organización. Disponibilidad para extender el horario de trabajo ante una necesidad puntual. </Label>
        </div>
        <div>
          <Label>Colaborador del Proyecto </Label>
        </div>
        <div>
          <Label>Encargado del Proyecto </Label>
        </div>
        <div>
          <Label>Director del Proyecto </Label>
        </div>
        
      </ContenedorBox>
      <ContenedorBox>
        <div>
          <Label>ACTITUD HACIA EL EQUIPO DE TRABAJO - Relación con los superiores inmediatos y no inmediatos. Respeto, sinceridad y colaboración.</Label>
        </div>
        <div>
          <Label>Colaborador del Proyecto </Label>
        </div>
        <div>
          <Label>Encargado del Proyecto </Label>
        </div>
        <div>
          <Label>Director del Proyecto </Label>
        </div>
        
      </ContenedorBox>
      <ContenedorBox>
        <div>
          <Label>ACTITUD HACIA LOS COLABORADORES - Forma en la que se maneja con sus compañeros inmediatos. Camaradería. Se considera la relación más allá de lo estrictamente laboral.</Label>
        </div>
        <div>
          <Label>Colaborador del Proyecto </Label>
        </div>
        <div>
          <Label>Encargado del Proyecto </Label>
        </div>
        <div>
          <Label>Director del Proyecto </Label>
        </div>
        
      </ContenedorBox>
      <ContenedorBox>
        <div>
          <Label>PREDISPOSICIÓN - Se muestra predispuesto hacia la tarea. Manifiesta una actitud positiva frente a los diferentes requerimientos con entusiasmo y motivación.</Label>
        </div>
        <div>
          <Label>Colaborador del Proyecto </Label>
        </div>
        <div>
          <Label>Encargado del Proyecto </Label>
        </div>
        <div>
          <Label>Director del Proyecto </Label>
        </div>
        
      </ContenedorBox>
      <ContenedorBox>
        <div>
          <Label>PUNTUALIDAD - Puntualidad en horario laboral y reuniones.</Label>
        </div>
        <div>
          <Label>Colaborador del Proyecto </Label>
        </div>
        <div>
          <Label>Encargado del Proyecto </Label>
        </div>
        <div>
          <Label>Director del Proyecto </Label>
        </div>
        
      </ContenedorBox>
      <ContenedorBox>
        <div>
          <Label>PROMEDIO</Label>
        </div>
        <div>
          <Label>Colaborador del Proyecto </Label>
        </div>
        <div>
          <Label>Encargado del Proyecto </Label>
        </div>
        <div>
          <Label>Director del Proyecto </Label>
        </div>
        
      </ContenedorBox>
      
        
        <div>
          <h2>Calificación Final</h2>
        </div>
        
      
      
      <ContenedorPromedioFinal>
        
        <div>
          <label htmlFor="">Promedio General</label>
          <input type="text"/>
        </div>
        
      </ContenedorPromedioFinal>
      
      </Formulario>
    </main>
  ); 
}

export default App;



