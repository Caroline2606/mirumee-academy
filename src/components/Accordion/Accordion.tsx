import React, { PropsWithChildren } from "react";
// import {clsx } from "clsx";

import styles from "./Accordion.module.css";
import arrowIcon from "./arrowIcon.svg";

interface AccordionProps extends PropsWithChildren {
  variant?: "episode";
  title: string;
  isOpen?: boolean;
}

export const Accordion: React.FunctionComponent<
  PropsWithChildren<AccordionProps> > = ({ 
    children, 
    variant = "episode", 
    isOpen = false,
    title,
    ...props
  }) => {
    const [open, setOpen] = React.useState(isOpen);

    const accordionClasses = `${styles.episode} ${styles[variant]}`;

    const arrowStyles = (styles.arrow, open && styles.rotate);

    return (
      <div className={styles.container}>
        <div className={accordionClasses} {...props}>
          <div className={styles.summary}>
            <span>{title}</span>
            <img 
              className={`${styles.arrow} ${open && styles.details}`} 
              src={arrowIcon} 
              onClick={() => setOpen(!open)}
              />
          </div>
          {open && (
            <div className={styles.details}>
              <div>{children}</div>
            </div>
          )}
        </div>
        </div>
    );
};

Accordion.displayName = "Accordion";