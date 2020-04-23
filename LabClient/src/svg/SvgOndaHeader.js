import * as React from "react";
import cn from "classnames";
import Styles from  './styles.module.scss'
function SvgOndaHeader({ theme=false, centrar=false}) {
 
  return (
    <svg
      viewBox="0 0 1120 260"
      className={cn(
        centrar ? Styles.centrarHeader : Styles.centrarFooter,
        theme ? Styles.red : Styles.blue
      )}
    >
      <path d="M1175 131.2s-81-89.4-224.3-103.4S713 72 665 97c-86 46-148 63-271 7-172.3-78.5-338 .5-398 93.4C-4 58.7-3.3.3-3.3.3L1175 0v131.2z" />
    </svg>
  );
}

export default SvgOndaHeader;
