import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {
  pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register } = useForm<Inputs>();

  return (
    <div className="h-screen flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I've got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">Let's Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>{pageInfo.email}</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          action={`https://formsubmit.co/${pageInfo.email}`}
          method="POST"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              name="name"
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              name="email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            name="message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-sm text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
