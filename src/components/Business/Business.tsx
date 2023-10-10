
import { features } from "../../util/constant";
import { layout, styles } from "../../util/style";
import Button from "../Button/Button";
import FeatureCard from "../FeatureCard/FeatureCard";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznes rivojlantiring, <br className="sm:block hidden" /> pulni hal
          qilamiz
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam at
          obcaecati fugiat? Vero provident libero itaque dolores sunt veniam
          esse!
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
