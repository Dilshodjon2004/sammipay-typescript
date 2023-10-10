import { clients } from "../../util/constant";
import { styles } from "../../util/style";
import ClientCard from "../ClientCard/ClientCard";

const Clients = () => {
  return (
    <div className={`${styles.flexStart} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, idx) => (
          <ClientCard key={idx} {...client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
