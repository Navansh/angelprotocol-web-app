import { useModalCloser } from "components/Modal/Modal";
import { useFormikContext } from "formik";
import { IoClose } from "react-icons/io5";

export type Handler = () => void;

export interface Props {
  message: string;
}

export default function Popup(props: Props) {
  //Popup must only be rendered inside Modal
  const closeModal = useModalCloser();
  //This Popup is inside Formik
  const { resetForm } = useFormikContext();

  //default reset when user press 'x' button
  function closePopup() {
    resetForm();
    closeModal();
  }

  //To use formik context, make sure Popup is also inside <Formik/> tree

  return (
    <div className="p-4 grid grid-rows-1a place-items-center  bg-white-grey w-full max-w-xs min-h-r15  rounded-xl shadow-lg overflow-hidden relative">
      <button className={`absolute top-3 right-3`} onClick={closePopup}>
        <IoClose className="text-angel-grey" />
      </button>
      <p className="text-angel-grey text-center my-18">{props?.message}</p>
    </div>
  );
}