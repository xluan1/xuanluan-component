import React, { FC, MouseEventHandler, ReactNode } from "react";
import { Button } from "react-bootstrap";

type PropsType = {
  className?: string;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  tittle?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const IconButton: FC<PropsType> = ({
  className,
  color,
  type,
  tittle,
  icon,
  onClick,
  disabled,
}) => {
  return (
    <Button
      className={className ? className : "btn-custom mt-2 ms-3 me-3"}
      type={type ? type : "submit"}
      variant={color}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && typeof icon === "string" ? <i className={icon} /> : icon}
      {tittle}
    </Button>
  );
};

export default IconButton;
