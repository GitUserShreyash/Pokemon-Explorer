
export const PokemonCard=({pokemonData})=>{
    const speed = pokemonData.stats.find(
      (stat) => stat.stat.name === "speed"
    )?.base_stat;
    const exp = pokemonData.base_experience;
    const attack = pokemonData.stats.find(
      (stat) => stat.stat.name === "attack"
    )?.base_stat;
    const abilities = pokemonData.abilities[0]?.ability?.name;
    return (
      <div className="Card">
       
          <div className="upperCard">
            <figure>
              <img
                src={pokemonData.sprites.other.dream_world.front_default}
                alt=" "
                className="Card-img"
              />
            </figure>
            <h3>{pokemonData.name}</h3>
            <h4>
              {pokemonData.types.map((typeinfo, index) => (
                <span key={index}>
                  {typeinfo.type.name}
                  {index < pokemonData.types.length - 1 && ", "}
                </span>
              ))}
            </h4>
          </div>
          <div className="lowerCard">
            <p>
              <strong>Height:</strong>
              {pokemonData.height}
            </p>
            <p>
              <strong>Weight:</strong>
              {pokemonData.weight}
            </p>
            <p>
              <strong>Speed:</strong>
              {speed}
            </p>
            <p>
              <strong>Experience:</strong>
              {exp}
            </p>
            <p>
              <strong>Attack:</strong>
              {attack}
            </p>
            <p>
              <strong>Abilities:</strong>
              {abilities}
            </p>
          </div>
        
      </div>
    );
}