const API_URL = "http://localhost:3000";

const getMemories = async () => {

    const response = await fetch(`${API_URL}/memories`) // busca dados


    const memories = await response.json(); // converte a requisicao em JSON.

    return memories;



}

export default { getMemories };