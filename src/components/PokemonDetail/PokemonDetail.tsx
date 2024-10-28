/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import "./index.css";
import { Thumbnail, Title } from "../index";
interface Stats {
  label: string;
  value: string;
  attack?: number; // Usa ? si puede ser undefined
  defense?: number;
  specialAttack?: number;
  specialDefense?: number;
  speed?: number;
}

const PokemonDetail = ({ infoDetails }: any) => {
  const { image, name, order, stats } = infoDetails;
  // Define labels and value for info about pokemon
  const statsData: Stats[] = [
    { label: "Ataque", value: stats?.attack },
    { label: "Defensa", value: stats?.defense },
    { label: "Ataque especial", value: stats?.specialAttack },
    { label: "Defensa especial", value: stats?.specialDefense },
    { label: "Rapidéz", value: stats?.speed },
  ];
  return (
    <div className="detail-view">
      <div className="image-content">
        <div className="basic-data">
          <div className="sub-content-info">
            <label>Nombre: </label>
            <Title
              text={name}
              styles={{ fontWeight: "700", textTransform: "capitalize" }}
            />
          </div>
          <div className="sub-content-info">
            <label>Número: </label>
            <Title text={order} styles={{ fontWeight: "700" }} />
          </div>
        </div>
        <Thumbnail url={image} styles={{ width: "215px", height: "200px" }} />
      </div>
      <div className="info">
        {statsData.map((stat) => (
          <span key={stat.label}>
            <label>{stat.label}: </label>
            {stat.value !== undefined && (
              <Title text={stat?.value} styles={{ fontWeight: "700" }} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetail;
