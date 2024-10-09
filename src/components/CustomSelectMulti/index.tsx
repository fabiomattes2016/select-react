import { useEffect, useState } from "react";
import Select, {MultiValue, ActionMeta} from "react-select";

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
    return ['brasil', 'argentina']
}

function CustomSelectMulti() {
    // Estado para armazenar as opções selecionadas, com tipagem MultiValue<Select>
    const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>([])

    // Função de mudança com tipagem para as opções e meta de ação
    function handleChange(
        selected: MultiValue<Option>,
        actionMeta: ActionMeta<Option>
    ) {
        setSelectedOptions(selected);
    }

    useEffect(() => {
        // Simula a busca dos dados salvos
        const savedData = fetchFromAPI();

        // Mapeia os valores recuperados do banco para os objetos completos de opções
        const mappedOptions = options.filter(option => savedData.includes(option.value));

        // Define os valores selecionados no estado
        setSelectedOptions(mappedOptions);
    }, [])

    return (
        <div>
            <label htmlFor="select">Selecione os Paises</label>
            <Select 
                id="select"
                isMulti
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                placeholder="Selecione um País..."
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </div>
    );
}

export default CustomSelectMulti;