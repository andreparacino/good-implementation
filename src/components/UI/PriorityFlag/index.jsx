import { memo } from "react";
import flagIcon from "src/assets/flag.svg";
import { PRIORITY_COLORS } from "src/helpers/constants";

const PriorityFlag = memo(function PriorityFlag({ priority, className }) {
  return (
    <img
      src={flagIcon}
      alt={priority}
      style={{
        backgroundColor: PRIORITY_COLORS[priority],
      }}
      className={className}
    />
  );
});

export default PriorityFlag;
