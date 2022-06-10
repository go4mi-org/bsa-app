import React from "react";
import { stateData } from "../../Utils/states";

const index = ({ toggleRegistrationModal, setToggleRegistrationModal }) => {
  const registrationModalShowStyle =
    "fixed translate-y-8 transition-all flex flex-col items-center px-4 justify-center bg-slate-800 h-full w-full";
  const registrationModalHideStyle =
    "fixed translate-y-8 transition-all flex flex-col items-center px-4 justify-center bg-slate-800 h-full w-full scale-0";
  return (
    <div
      className={
        !toggleRegistrationModal
          ? registrationModalHideStyle
          : registrationModalShowStyle
      }
    >
      <form className="bg-slate-100 rounded-lg overflow-hidden opacity-none min-w-[280px] max-w-[900px]">
        <div className="bg-slate-800">
          <p className="text-slate-200 w-full  font-bold">
            <span className="font-bold">Make Payment: #550, 000</span> <br />
            Installment:
          </p>
          <p className="text-slate-200 w-full py-4">
            Break: 50% Upfront <br />
            Second payment 25% <br /> Final payment 25% Full payment
          </p>
        </div>
        <input
          required
          className="h-16 px-4 w-[100%] outline-none border-b border-slate-400"
          type="text"
          placeholder="First Name"
        />
        <input
          required
          className="h-16 px-4 w-[100%] border-b border-slate-400 outline-none"
          type="text"
          placeholder="Last Name"
        />
        <input
          required
          className="h-16 px-4 w-[100%] border-b border-slate-400 outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          required
          className="h-16 px-4 w-[100%] border-b border-slate-400 outline-none"
          type="number"
          placeholder="Phone Number"
        />
        <input
          required
          className="h-16 px-4 w-[100%] border-b border-slate-400 outline-none"
          placeholder="Payment Type"
          list="payment_type"
          name="payment"
          id="payment"
        />
        <datalist id="payment_type">
          <option value="Full" />
          <option value="Part" />
        </datalist>

        <input
          required
          className="h-16 px-4 w-[100%] border-b border-slate-400 outline-none"
          placeholder="State"
          list="states"
          name="state"
          id="state"
        />
        <datalist id="states">
          {stateData.map((state) => {
            return <option key={state} value={state} />;
          })}
        </datalist>

        <button className="h-16 font-bold text-slate-500 px-4 w-[100%] outline-none hover:bg-slate-300 hover:text-slate-700">
          Register
        </button>
      </form>

      <button
        onClick={() => setToggleRegistrationModal(false)}
        className="h-16 font-bold text-slate-300 px-4 w-[100%] outline-none hover:text-slate-400"
      >
        Cancel Payment
      </button>
    </div>
  );
};

export default index;
