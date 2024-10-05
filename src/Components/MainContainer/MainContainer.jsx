import React from "react";
import racket from "../../assets/image 2.png";
import img from "../../assets/Image box.png";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const MainContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[1200px] w-full h-[600px] m-auto bg-[#151824] rounded-xl">
      <div className="flex justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 m-auto p-10">
          <div>
            <p className="font-normal text-3xl">Let’s connect constellations</p>
            <p className="font-normal text-base text-[#c6c1c1] py-3">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
          </div>
          <div className="w-[425px] h-[333px]">
            <div className="flex justify-between">
              <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-[205px] h-[47px]
            p-2  bg-[#23283b] rounded-md "
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                })}
              />
              <p>
                {errors.lastName && (
                  <span className="text-red-500 text-xs italic">
                    {errors.lastName.message}
                  </span>
                )}
              </p>
              </div>
              <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-[205px] h-[47px]
            p-2 bg-[#23283b] rounded-md "
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                })}
              />
              <p>
                {errors.firstName && (
                  <span className="text-red-500 text-xs italic">
                    {errors.firstName.message}
                  </span>
                )}
              </p>
              </div>
            </div>
            <div className="my-3">
              <input
                type="text"
                placeholder="Email"
                className="w-[426px] h-[47px]
            p-2  bg-[#23283b] rounded-md border-zinc-700 "
                {...register("email", {
                  validate: {
                    notAdmin: (value) =>
                      value !== "admin@example.com" || "Reserved Email",
                    blackList: (value) => {
                      const blacklist = ["mail.ru", "yandex.ru"];
                      const domain = value.split("@")[1];
                      return blacklist.includes(domain)
                        ? "BlackListed Mail"
                        : true;
                    },
                  },
                })}
              />
              <p>
                {errors.email && (
                  <span className="text-red-600 text-xs italic">
                    {errors.email.message}
                  </span>
                )}
              </p>
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                className="w-[426px] h-[47px]
            p-2  bg-[#23283b] rounded-md border-zinc-700"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                })}
              />
              <p>
                {errors.phoneNumber &&(
                  <span className="text-red-500
                  text-xs italic">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </p>
            </div>
            <div className="my-3">
              <input
                type="text"
                placeholder="Message"
                className="w-[426px] h-[109px] p-2  bg-[#23283b] rounded-md "
              />
              <p>
                {errors.message && (
                  <span className="text-red-500 text-xs italic">
                    {errors.message.message}
                  </span>
                )}
              </p>
            </div>
            <div>
              <button
                className="w-[426px] h-[43px] bg-[#763AF5] rounded-md"
                type="submit"
              >
                <div className="flex justify-center">
                  <p className="font-normal text-base ">Send it to the moon</p>
                  <img className="w-8 ml-4" src={racket} alt="racket" />
                </div>
              </button>
            </div>
          </div>
        </form>
        <DevTool control={control} />
        <div className="p-9 sm:hidden">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
