import React from 'react'
import useFetch from '../../hooks/useFetch'

const Form = () => {

    const {setSearch, setSelect} = useFetch()

    return (
        <div>
            <input onChange={(e) => {
                setSearch(e.target.value)
                }}
                type="text" name="search" placeholder="Digite o título"/>
            
            <select
                onChange={(e) => {
                setSelect(e.target.value)
                }}
                id="status"
            >
                <option value="">Status</option>
                <option value="created">Solicitado</option>
                <option value="processing">Processando</option>
                <option value="processed">Concluído</option>
            </select>   
        </div>
    )
}

export default Form
