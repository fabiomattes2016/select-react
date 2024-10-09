import { useEffect, useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

interface Option {
    value: string;
    label: string;
}

const options: Option[] = [
    {value: 'brasil', label: 'Brasil'},
    {value: 'argentina', label: 'Argentina'},
    {value: 'uruguai', label: 'Uruguai'},
    {value: 'paraguai', label: 'Paraguai'},
]

// Função de simulação de busca de dados de uma API
function fetchFromAPI() {
    // Simulando o retorno dos dados
    return 'brasil';
}

function CustomSelectSingle() {
    // Estado para armazenar as opções selecionadas, com tipagem SingleValue<Select>
    const [selectedOption, setSelectedOption] = useState<SingleValue<Option>>(null);

    function handleChange(
        selected:SingleValue<Option>,
        actionMeta: ActionMeta<Option>
    ) {
        setSelectedOption(selected);
    }

    useEffect(() => {
        // Simula a busca dos dados salvos
        const savedData = fetchFromAPI();

        // Mapeia os valores recuperados do banco para os objetos completos de opções
        const mappedOptions = options.find(option => option.value === savedData);

        // Define os valores selecionados no estado
        setSelectedOption(mappedOptions || null);
    }, [])

    return (
        <div>
            <label htmlFor="select">Selecione o País</label>
            <Select 
                id="select"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Selecione um País..."
                className="basic-single-select"
                classNamePrefix="select"
            />
        </div>
    );
}

export default CustomSelectSingle;