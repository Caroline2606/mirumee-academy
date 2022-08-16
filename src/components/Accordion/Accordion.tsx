import React, { PropsWithChildren } from "react";
import styles from "./Accordion.module.css";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "../../graphql/client";

const REST_URI = "https://swapi.dev/api";

interface AccordionProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  variant?: "episode";
}

export const Accordion: React.FunctionComponent<
  PropsWithChildren<AccordionProps>
  > = ({ children, variant = "episode", ...props}) => {

    const accordionClasses = `${styles.episode} ${styles[variant]}`;

    return (
      <div className={accordionClasses} {...props}>
        {children}

      </div>
    )
};

Accordion.displayName = "Accordion";