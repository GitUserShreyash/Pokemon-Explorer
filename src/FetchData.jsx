export const Fetch=()=>{
    const API="https://pokeapi.co/api/v2/pokemon?limit=12"
    const[pokemon,setPokemon] = useState([]);

    const fetchPokmon= async () =>{
        try{
            const res = await fetch(API);
            const data = await res.json();
            
            const detailedData=data.results.map(async (pokemon)=>{
                const res = await fetch(pokemon.url);
                const data = await res.json();
                return data;
            });

            const detailedResponses =await Promise.all(detailedData);
            setPokemon(detailedResponses);
            
        }catch(error)
        {
            console.log("Error occured while fetching data from api...");
        }
    }
    useEffect(()=>{
        fetchPokmon();
    },[]);
    return pokemon;
}