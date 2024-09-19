import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Cardgenerator = () => {
  const { register, handleSubmit, reset } = useForm();
  const [usersCards, setUsersCards] = useState([]);

  const onSubmit = handleSubmit((data) => {
    setUsersCards((prevData) => {
      const result = [...prevData, data];
      reset();
      return result;
    });
  });

  return (
    <div className="ml-[500px] flex justify-center items-center h-screen"> {/* Agregado margen izquierdo */}
      <div className="border-8 border-black">
        <div className="flex justify-center items-center text-center text-white bg-purple-900 h-10">ID Card Generator</div>
        <div className="flex">
          <div className="flex flex-col gap-3 border p-4 pr-[50px] justify-start">
            <p className="text-center text-xl">Input form</p>
            <form className="flex flex-col gap-4 items-start text-xs" onSubmit={onSubmit}>
              <div className="flex justify-center w-full gap-3">
                <label className="min-w-[148px]" htmlFor="name">
                  Enter Name:
                </label>
                <input
                  className="border rounded text-center"
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                />
              </div>
              <div className="flex justify-center w-full gap-3">
                <label className="min-w-[148px]" htmlFor="college">
                  Enter College Name:
                </label>
                <input
                  className="border rounded text-center"
                  type="text"
                  placeholder="Your college"
                  {...register("college")}
                />
              </div>
              <div className="flex justify-center w-full gap-3">
                <label className="min-w-[148px]" htmlFor="location">
                  Enter Location:
                </label>
                <input
                  className="border rounded text-center"
                  type="text"
                  placeholder="Your location"
                  {...register("location")}
                />
              </div>
              <Button
                type="submit"
                className="flex text-center px-2 py-0 justify-center text-white rounded text-xs leading-4 bg-purple-900 shadow-md hover:bg-purple-900/75 transition-all duration-300"
              >
                Generate Card
              </Button>
            </form>
          </div>
          <div className="flex flex-col gap-3 border p-4 justify-center">
            <p className="text-center text-xl">Generated Card</p>
            <div className="flex flex-col gap-2">
              {usersCards.map((user, id) => (
                <div key={id} className="flex bg-yellow-200 p-2 min-h-52 min-w-[350px]">
                  <div className="flex items-center justify-center min-w-[90px] bg-green-400">
                    <User size={60} />
                  </div>
                  <div className="flex flex-col justify-center shadow-lg p-10 bg-white w-full">
                    <p>Name: {user.name}</p>
                    <p>College: {user.college}</p>
                    <p>Location: {user.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardgenerator;



