import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { currency_icons, currency_text, denoms } from "constants/currency";
import { ErrorMessage } from "@hookform/error-message";
import { Values } from "./types";
import Balance from "./Balance";
import { IoMdSettings } from "react-icons/io";
import Slippage from "./Slippage";

export default function Amount() {
  const [settings_shown, show_settings] = useState(false);
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<Values>();

  function toggle_settings() {
    show_settings((p) => !p);
  }

  const is_buy = watch("is_buy");
  return (
    <div className="grid">
      <div className="flex justify-between items-center">
        <label
          htmlFor="amount"
          className="flex items-center justify-center text-angel-blue uppercase font-heading mb-2 rounded-md"
        >
          <img
            className="w-6 h-6 mr-1 object-contain"
            src={currency_icons[is_buy ? denoms.uusd : denoms.uhalo]}
            alt=""
          />
          <span className="block font-bold">{is_buy ? "UST" : "HALO"}</span>
        </label>
        <Balance />
        <button
          onClick={toggle_settings}
          type="button"
          style={{ animationDuration: "4s" }}
          className={`${
            settings_shown ? "text-angel-blue animate-spin" : "text-angel-grey"
          }  ml-1 text-xl hover:text-angel-orange`}
        >
          <IoMdSettings />
        </button>
      </div>
      {settings_shown && <Slippage />}
      <input
        {...register("amount")}
        autoComplete="off"
        id="amount"
        type="text"
        placeholder={currency_text[is_buy ? denoms.uusd : denoms.uhalo]}
        className="text-right p-1 pl-0 outline-none border-b border-angel-blue border-opacity-20 text-angel-grey text-lg"
      />
      <ErrorMessage
        errors={errors}
        name="amount"
        as="span"
        className="text-right text-red-400 text-xs mb-1 mt-0.5 mr-1"
      />
    </div>
  );
}