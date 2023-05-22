import { useState } from "react"

export default function Contador(props) {
    const [contador, setContador] = useState(0)



    function incrementar() {
        setContador (contadorAtual => contadorAtual + 1)
    }

    function decrementar() {
        setContador(contadorAtual => contadorAtual - 1)

    }

    
    return (
        <div role="main">
            <p>
                {contador}
            </p>
            <button onClick={incrementar}>+</button>
            <button disabled={contador <= 0} onClick={decrementar}>-</button>
        </div>
    )
}











/* Cria um Componente React Contador:

O componente Contador deve ter:

Um state que guarda um número e é inicializado com 0.
Uma div com um atributo role com o valor de "main", que contém um parágrafo que apresente o valor do state.
Dois botões, um que tem o texto + e um com -, os botões devem incrementar e decrementar o valor do state respetivamente.
O botão - deve ficar inativo quando o valor do state for igual ou menor que 0.
Tem em conta que:

O componente Contador deve ser exportado por omissão de um ficheiro "Contador.js" ou "Contador.jsx".

O ficheiro "Contador.js" deve estar localizado na pasta src. */