"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactInfo } from "@/lib/data";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none w-full xl:flex-1">
            <form className="flex flex-col gap-5 p-8 bg-[#27272c] rounded-2xl">
              <h3 className="text-2xl font-bold text-accent">Let&apos;s Work Together</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Whether you need a website, UI/UX design, or any digital
                solution &mdash; feel free to reach out. I&apos;d love to hear
                about your project.
              </p>

              {/* Name & contact fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>

              {/* Service selector */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="software">Software Application</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                className="h-[130px]"
                placeholder="Type your message here."
              />

              {/* Submit */}
              <Button size="md" className="max-w-40 text-sm">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0 xl:max-w-[320px]">
            <ul className="flex flex-col gap-6 w-full">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-5">
                  <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] bg-white/5 border border-white/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-[22px]">{item.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/60 text-xs uppercase tracking-wider font-medium">{item.title}</p>
                    <h3 className="text-white font-semibold text-sm mt-0.5 break-words">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;