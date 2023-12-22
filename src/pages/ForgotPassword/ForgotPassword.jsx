import { useState } from "react";
import SantaClaus from "../../assets/santa-claus.png";
import BgAuth from "../../assets/bg-auth.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isOpenModalVerifyEmail, setIsOpenModalVerifyEmail] = useState(false);
  const [code, setCode] = useState("");

  const handleInputChange = (event, index) => {
    const value = event.target.value;

    // Only allow a single digit (0-9)
    if (value === "" || /^[0-9]$/.test(value)) {
      let newCode = code.split("");
      newCode[index] = value;
      setCode(newCode.join(""));

      // Focus management
      if (value && index < 5) {
        // Move to next input if value is a single digit
        const nextInput = event.target.nextSibling;
        if (nextInput && nextInput.type === "number") {
          nextInput.focus();
        }
      } else if (!value && index > 0) {
        // Move to previous input if value is deleted
        const prevInput = event.target.previousSibling;
        if (prevInput && prevInput.type === "number") {
          prevInput.focus();
        }
      }
    } else {
      // Clear the input if the value is not a single digit
      event.target.value = "";
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      const prevInput = event.target.previousSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const sendVerifyCode = () => {
    console.log(code); // Handle the verification code
  };

  const checkEmail = () => {
    if (email === "" || !email.includes("@")) {
      return;
    }
    setIsOpenModalVerifyEmail(true);
  };

  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <img
          loading="lazy"
          srcSet={BgAuth}
          className="absolute h-full w-full object-contain sm:object-cover top-0 object-top"
        />
        <div className="relative flex items-center max-md:flex-col">
          <div>
            <img loading="lazy" srcSet={SantaClaus} />
          </div>
          {isOpenModalVerifyEmail ? (
            <div className="sm:w-[500px]">
              <div className="bg-white flex flex-col p-5 rounded-xl">
                <div className="text-gray-900 text-3xl font-semibold">
                  Forgot password
                </div>
                <div className="text-lg font-medium mt-4">
                  <span className=" text-gray-500 whitespace-break-spaces">
                    Please check your email www.@gmail.com to see the
                    verification code
                  </span>
                </div>

                <div className="mt-6">
                  <div className="text-gray-900 sm:ml-5 text-base font-medium mb-2">
                    Code
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <input
                        key={index}
                        type="number"
                        value={code[index] || ""}
                        className="w-10 h-10 sm:w-14 sm:h-14 text-center text-2xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                        maxLength="1"
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => sendVerifyCode()}
                  className="text-rose-100 text-xl text-center font-semibold bg-red-400 justify-center items-center mt-[30px] px-16 py-5 rounded-xl sm:mx-5"
                >
                  Verify
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-white flex flex-col p-5 rounded-xl">
                <div className="text-gray-900 text-3xl font-semibold">
                  Forgot password
                </div>
                <div className="text-lg font-medium mt-4">
                  <span className=" text-gray-500">
                    Enter your email account to reset your password
                  </span>
                </div>

                <div className="mt-6">
                  <div className="text-gray-900 text-base font-medium mb-2">
                    Email
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email@gmail.com"
                    className="text-gray-500 text-base font-light border w-full pl-5 pr-12 py-4 rounded-xl border-solid border-gray-400"
                  />
                </div>

                <button
                  onClick={() => checkEmail()}
                  className="text-rose-100 text-xl text-center font-semibold bg-red-400 justify-center items-center mt-[30px] px-16 py-5 rounded-xl"
                >
                  Reset Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
