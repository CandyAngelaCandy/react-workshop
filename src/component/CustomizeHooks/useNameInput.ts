import { useEffect, useState } from "react";

const useNameInput: (
  defaultName: string
) => [string, React.Dispatch<React.SetStateAction<string>>, string] = (
  defaultName
) => {
  const [name, setName] = useState(defaultName);
  const [tempName, setTempName] = useState(defaultName);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (name !== tempName) {
      if (!name) {
        setErrorMessage("The first name is required");
      } else if (!/^[a-zA-Z]*$/.test(name)) {
        setErrorMessage("The first name must be arabic alphabet");
      } else {
        setErrorMessage("");
      }
      setTempName(name)
    }
  }, [name]);

  return [name, setName, errorMessage];
};

export default useNameInput;
