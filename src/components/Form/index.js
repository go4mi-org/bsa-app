import React from "react";
import { stateData } from "../../Utils/states";
import Container from "../Container";

const index = ({ toggleRegistrationModal, setToggleRegistrationModal }) => {
  const registrationModalShowStyle =
    "fixed transition-all z-50 flex flex-col lg:flex-row overflow-auto items-center justify-center bg-sky-700 h-full w-full";
  const registrationModalHideStyle =
    "fixed transition-all flex flex-col lg:flex-row items-center justify-center bg-sky-700 h-full w-full scale-0";
  return (
    <div
      className={
        !toggleRegistrationModal
          ? registrationModalHideStyle
          : registrationModalShowStyle
      }
    >
      <Container>
        <div className="h-full w-full py-8">
          <div className="flex-1 flex px-12 flex-col justify-center items-center mb-4">
            <div className="text-slate-200 w-max text-right font-bold">
              <span className="font-bold text-2xl lg:text-3xl">#550, 000(FP)</span>{" "}
              <br />
            </div>
            <p className="text-slate-200 text-2xl w-max text-right font-semibold py-4">
              Installment
            </p>
            <div className="flex flex-col lg:flex-row text-slate-200 w-max font-normal">
              <span className="text-center mx-2">First Payment 50% Upfront</span>
              <span className="text-center mx-2">Second payment 25%</span>
              <span className="text-center mx-2">Final payment 25%</span>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <form className="bg-slate-100 rounded-lg overflow-hidden opacity-none min-w-[280px] max-w-[900px]">
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] outline-none border-b border-slate-400"
                type="text"
                placeholder="First Name"
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                type="text"
                placeholder="Last Name"
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                type="email"
                placeholder="Email"
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                type="number"
                placeholder="Phone Number"
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
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
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
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

              <button className="h-12 font-bold text-[14px] text-slate-500 px-4 w-[100%] outline-none hover:bg-slate-300 hover:text-slate-700">
                Register
              </button>
            </form>

            <button
              onClick={() => setToggleRegistrationModal(false)}
              className="h-16 font-bold text-[14px] text-slate-300 px-4 w-[100%] outline-none hover:text-slate-400"
            >
              Cancel Payment
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default index;
