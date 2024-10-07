import React from "react";
import { motion } from "framer-motion";
import { Button, Select, Text, TextArea, TextField } from "@radix-ui/themes";

const Consultation: React.FC = () => {
  return (
    <>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form action="">
          {/* Name text field */}
          <div className="mb-4">
            <Text as="label" className="block mb-1">
              Name*
            </Text>
            <TextField.Root
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* Phone text field */}
          <div className="mb-4">
            <Text as="label" className="block mb-1">
              Phone*
            </Text>
            <TextField.Root
              placeholder="Enter phone number"
              type="text"
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* Email text field */}
          <div className="mb-4">
            <Text as="label" className="block mb-1">
              Email*
            </Text>
            <TextField.Root
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* Select section */}
          <div className="mb-4">
            <Text as="label" className="block mb-1">
              Practice Areas*
            </Text>
            <Select.Root value="estate-admin">
              <Select.Trigger className="p-2 w-full" />
              <Select.Content>
                <Select.Item value="estate-admin">
                  Estate Administration
                </Select.Item>
                <Select.Item value="trust-admin">
                  Trust Administration
                </Select.Item>
                <Select.Item value="will-drafting">
                  Will Drafting & Review
                </Select.Item>
                <Select.Item value="inheritance-disputes">
                  Inheritance Disputes
                </Select.Item>
                <Select.Item value="succession-planning">
                  Succession Planning
                </Select.Item>
              </Select.Content>
            </Select.Root>
            {/* Text area section */}
            <div className="mb-4">
              <Text as="label" className="block mb-1">
                Case Description
              </Text>
              <TextArea
                placeholder="Enter case description"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
          <div>
            <Button className="w-full">Get Your Free Consultation</Button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default Consultation;
