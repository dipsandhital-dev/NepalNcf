import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Form = () => {
  return (
    <form className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email Address" />
      </div>

      {/* Phone */}
      <Input type="tel" placeholder="Phone Number" />

    

      {/* Message */}
      <Textarea placeholder="Write your message..." className="min-h-[120px]" />

      {/* Submit Button (inline) */}
      <button
        type="submit"
        className="
          w-full h-[52px]
          bg-blue-600 text-white
          rounded-full font-semibold text-lg
          shadow-md
          hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
          active:scale-95
          transition-all duration-300
        "
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
