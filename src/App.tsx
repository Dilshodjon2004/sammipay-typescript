import { styles } from "./util/style";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Contract from "./components/Contract/Contract";
import Billing from "./components/Billing/Billing";
import Business from "./components/Business/Business";
import CTA from "./components/CTA/Cta";
import Testimonials from "./components/Testimonials/Testimonials";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/* Others */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics /> <Contract /> <Billing />
          {/* Business */}
          <Business />
          {/* CTA */}
          <Testimonials /> <Clients /> <CTA /> <Footer />
          {/* Footer */}
        </div>
      </div>
    </div>
  );
};

export default App;
