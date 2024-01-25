import { useMemo } from "react";

export const useClassNames = (classNames) =>
  useMemo(() => classNames.filter(Boolean).join(" ").trim(), [classNames]);
