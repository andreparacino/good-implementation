import React from "react";
import styles from "./index.module.css";

const PilledRadioGroup = ({ options, selected, onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className={styles.PilledRadioGroup}>
      {options.map((option) => (
        <React.Fragment key={option.value}>
          <input
            type="radio"
            id={option.value}
            checked={selected === option.value}
            value={option.value}
            onChange={handleChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PilledRadioGroup;
