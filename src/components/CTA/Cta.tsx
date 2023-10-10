import { styles } from "../../util/style";
import Button from "../Button/Button";

const CTA = () => {
  return (
    <div
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-dark-gradient box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} `}>Xizmatlarni sinab ko'rish</h2>
        <p className={`${styles.paragraph} max-w-[550px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          repudiandae quam, architecto neque adipisci placeat quaerat.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles="" />
      </div>
    </div>
  );
};

export default CTA;
