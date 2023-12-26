import { ChangeEvent, useCallback, useState } from "react";
import { RegExpChecker } from "libs/Regex";
import { EMAIL_REGEXP } from "utils/regexp";

export function useInput(initialState: string, validationType: "bigText" | "text" | "email" = "text") {
  const [state, setState] = useState<string>(initialState);
  const [error, setError] = useState<string>("");

  const dispatch = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      switch (validationType) {
        case "email":
          if (!state) setError("Not empty");
          !RegExpChecker.check(state, EMAIL_REGEXP) && setError("Validation failed");
          setState(target.value);
          break;
        case "text":
          if (target.value.length < 20) {
            setState(target.value);
          }
          break;
        case "bigText":
          if (target.value.length < 500) {
            setState(target.value);
          } else {
            setState(target.value.slice(0, 500));
          }
          break;
      }
    },
    [validationType, initialState],
  );

  return {
    state,
    dispatch,
    error,
  };
}
