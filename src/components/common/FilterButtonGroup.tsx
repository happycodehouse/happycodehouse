import React from "react";
import style from "./filterButtonGroup.module.scss";
import { useDirectionalHover } from "../../hooks/useDirectionalHover";

interface ButtonType<T> {
  key?: string;
  value: T;
  label: string;
}

interface FilterButtonItemProps<T> {
  button: ButtonType<T>;
  isSelected: boolean;
  onButtonClick: (value: T) => void;
}

const FilterButtonItem = <T, >({
  button,
  isSelected,
  onButtonClick
}: FilterButtonItemProps<T>) => {
  const { overlayStyle, getHoverProps } = useDirectionalHover({
    background: "#f5f5f5"
  });

  return (
    <div className={style.buttonWrap} {...getHoverProps()}>
      <div className="overlay" style={overlayStyle}/>
      <button
        className={`${style.button} ${isSelected ? style.selected : ""}`}
        onClick={() => onButtonClick(button.value)}
      >
        <span className={style.buttonText}>{button.label}</span>
      </button>
    </div>
  );
};

interface FilterButtonGroupProps<T> {
  buttons: ButtonType<T>[];
  selectedValue: T;
  onButtonClick: (value: T) => void;
  className?: string;
}

const FilterButtonGroup = <T, >({
  buttons = [],
  selectedValue,
  onButtonClick,
  className = ""
}: FilterButtonGroupProps<T>) => {

  return (
    <div className={`${style.gridButtonBox} ${className}`}>
      {buttons.map((button) => {
        const isSelected = selectedValue === button.value;
        return (
          <FilterButtonItem
            key={button.key || String(button.label)}
            button={button}
            isSelected={isSelected}
            onButtonClick={onButtonClick}
          />
        );
      })}
    </div>
  );
};

export default FilterButtonGroup;