const Paciente = ({paciente}) => {

  const {nombre, propietario, email, fecha, sintomas} = paciente;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">

        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{" "} 
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{" "} 
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{" "} 
          <span className="font-normal normal-case">{email}</span>
        </p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{" "} 
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{" "} 
          <span className="font-normal normal-case">{sintomas} 
          </span>
        </p>

        <div>
          <button 
            className="bg-red-600 w-full p-3 text-white uppercase font-bold rounded-md 
                      hover:bg-red-700 cursor-pointer transition-all"
            type="button"
            >Eliminar</button>

          <button
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md
                      hover:bg-indigo-700 cursor-pointer transition-all"
            type="button"
            >Editar</button>
            
        </div>
      </div>
  )
}

export default Paciente