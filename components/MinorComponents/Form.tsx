import { Button } from "@radix-ui/themes";
import React from "react";

const Form = () => {
  return (
    <div>
      <form action="https://formspree.io/f/xpwjozwe" method="POST">
        <div>
          {/* Name Input */}
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full h-15 px-4 py-3 mt-3 bg-neutral-700 text-white rounded-2xl placeholder-neutral-400 outline-none hover:ring-1 hover:ring-neutral-500 focus:ring-1 focus:ring-neutral-100"
          />
          {/* Email Input */}
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full h-15 px-4 py-3 mt-3 bg-neutral-700 text-white rounded-2xl placeholder-neutral-400 outline-none hover:ring-1 hover:ring-neutral-500 focus:ring-1 focus:ring-neutral-100"
          />
          {/* Message Input */}
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            className="w-full h-30 px-4 py-3 mt-3 bg-neutral-700 text-white rounded-2xl placeholder-neutral-400 outline-none hover:ring-1 hover:ring-neutral-500 focus:ring-1 focus:ring-neutral-100 resize-none"
          ></textarea>
        </div>
        {/* Submit Button */}
        <Button
          size="4"
          variant="solid"
          radius="full"
          color="gray"
          className="!h-15 !mt-9 !bg-white !w-full !text-black !font-urbanist !text-[14px] !font-semibold hover:!bg-gray-50 hover:!shadow-[0_0_10px_0_rgba(0,0,0,0.3)]"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Form;
