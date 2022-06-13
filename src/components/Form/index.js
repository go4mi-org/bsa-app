import React, { useEffect, useState } from "react";
import { stateData } from "../../Utils/states";
import Container from "../Container";
import axios from "axios";
import { REDIRECT_LINK, BASE_URL } from "../../_api/_redirect";

const Form = ({ toggleRegistrationModal, setToggleRegistrationModal }) => {
  const [firsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [state, setState] = useState("");
  const [formResponse, setFormResponse] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post(BASE_URL, {
        first_name: firsName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        payment_type: parseInt(paymentType),
        amount_paid: null,
        state: state,
      })
      .then((response) => {
        console.log(response.status);
        setFormResponse(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (formResponse === 201)
      setTimeout(() => {
        setFormResponse("");
        window.location.href = REDIRECT_LINK;
      }, 3000);
  }, [formResponse]);

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
              <span className="font-bold text-2xl lg:text-3xl">
                #550, 000(FP)
              </span>{" "}
              <br />
            </div>
            <p className="text-slate-200 text-2xl w-max text-right font-semibold py-4">
              Installment
            </p>
            <div className="flex flex-col lg:flex-row text-slate-200 w-max font-normal">
              <span className="text-center mx-2">
                First Payment 50% Upfront
              </span>
              <span className="text-center mx-2">Second payment 25%</span>
              <span className="text-center mx-2">Final payment 25%</span>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <form
              onSubmit={handleSubmitForm}
              className="bg-slate-100 rounded-lg overflow-hidden opacity-none min-w-[280px] max-w-[900px]"
            >
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] outline-none border-b border-slate-400"
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                placeholder="Payment Type"
                list="payment_type"
                id="payment"
                onChange={(e) => setPaymentType(e.target.value)}
              />
              <datalist id="payment_type">
                <option value="1">Full</option>
                <option value="2">Part</option>
              </datalist>

              <input
                required
                className="h-12 text-[12px] px-4 w-[100%] border-b border-slate-400 outline-none"
                placeholder="State"
                list="states"
                id="state"
                onChange={(e) => setState(e.target.value)}
              />
              <datalist id="states">
                {stateData.map((state) => {
                  return <option key={state} value={state} />;
                })}
              </datalist>

              <button className="h-12 font-bold text-[14px] text-slate-500 px-4 w-[100%] outline-none hover:bg-slate-300 hover:text-slate-700">
                {!formResponse ? (
                  "Register"
                ) : (
                  <h1 className="text-green-600 font-bold">Successfull</h1>
                )}
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

export default Form;
