import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CaseManagement from "./CaseManagement";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroArea = () => {
  const navigate = useNavigate();

  const containerVariants = {
    initialProp: {
      opacity: 0,
      x: "100vw",
    },
    finalProp: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="heroAreaContainer">
      <div className="leftContainer">
        <motion.div
          className="paraLeft"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3>
            {" "}
            <ion-icon name="checkmark-circle-outline"></ion-icon> Efficient,
            intuitive, no-code
          </h3>
          <br />
          <p>
            console empowers operational teams work and collaborate more
            effectively and faster{" "}
          </p>
          <br />
        </motion.div>
        <motion.div
          className="paraLeft"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h3>
            {" "}
            <ion-icon name="checkmark-circle-outline"></ion-icon> Endless
            capabilities, easily configurable
          </h3>
          <br />
          <p>
            Console enables compliance and fraud teams to be independent and
            make faster, more reliable decisions
          </p>
          <br />
        </motion.div>
        <motion.div
          className="paraLeft"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <h3>
            {" "}
            <ion-icon name="checkmark-circle-outline"></ion-icon> Get more done
          </h3>

          <p>
            Console users can get 200% increase in productivity with Flagright
          </p>
          <br />
        </motion.div>
        <motion.div
          className="paraLeft"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.a
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            href="/"
            className="learnMore"
          >
            Learn More {">"}{" "}
          </motion.a>
        </motion.div>
      </div>
      <div className="rightContainer">
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.9,
          }}
          className="navigatioNtabs"
        >
          <NavLink to={"CaseManagement"}>
            {" "}
            <button>
              {" "}
              <ion-icon name="server-outline"></ion-icon> Case Management
            </button>
          </NavLink>
          <NavLink to={"Rules"}>
            {" "}
            <button>
              {" "}
              <ion-icon name="hammer-outline"></ion-icon> Rules
            </button>
          </NavLink>
          <NavLink to={"Risk"}>
            {" "}
            <button>
              {" "}
              <ion-icon name="stats-chart-outline"></ion-icon> Risk Scoring
            </button>
          </NavLink>
          <NavLink to={"Sanction"}>
            {" "}
            <button>
              {" "}
              <ion-icon name="person-add-outline"></ion-icon> Sanctions
              Screening
            </button>
          </NavLink>
        </motion.div>
        <motion.div
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="imgContainer"
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroArea;
