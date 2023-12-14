import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " Cuéntanos tu propuesta.",
      id: 1,
    },
    {
      text: " Diseñamos tu sitio y hacemos una revisión.",
      id: 2,
    },
    {
      text: " Desarrollamos tu sitio web.",
      id: 3,
    },
    {
      text: " Implementamos tu sitio web.",
      id: 4,
    },
    {
      text: " Disfrutas de todos los beneficios de tener un sitio web para tu empresa.",
      id: 5,
    },
  ];

  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>How We Work</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default HowWeWork;
