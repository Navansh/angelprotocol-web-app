import { createContext, ReactNode, useContext, useState } from "react";

type Handler = () => void;
interface Props {
  children: ReactNode;
}

const setContext = createContext<Handler>(() => {});
//use this hook only on components inside Modal
export const useModalCloser = () => useContext(setContext);

export default function Modal(props: Props) {
  const [shown, setShown] = useState(true);

  function closeModal() {
    setShown(false);
  }

  return (
    <setContext.Provider value={closeModal}>
      {shown && (
        <div className="fixed bg-gray-800 bg-opacity-80 w-full h-full top-0 left-0 right-0 bottom-0 z-50 grid place-items-center">
          {props.children}
        </div>
      )}
    </setContext.Provider>
  );
}