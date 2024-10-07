import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Select, Text, TextArea, TextField } from "@radix-ui/themes";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/config/store.config";
import {
  updateName,
  updateEmail,
  updateDescription,
  updatePhone,
  updatePractice,
} from "../../store/email/send-email.slice";
import { sendEmailThunk } from "../../store/email/send-email.reducer";
import { EmailPayload } from "../../types/email.types";
import { toast } from "react-toastify";

const Consultation: React.FC = () => {
  //selector for the initial states of the send email reducers
  const { name, email, phone, description, practice, toastMessage, loading } =
    useSelector((store: RootState) => store.sendEmail);
  const dispatch = useDispatch<AppDispatch>();

  //update functions for the form fields
  const updateNameFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(updateName(e.target.value));
  };

  //email update function
  const updateEmailFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(updateEmail(e.target.value));
  };

  const editedResponse = practice.split("-").join(" ").toUpperCase();
  //email function payload
  const emailPayload: EmailPayload = {
    name,
    email,
    phone,
    description,
    editedResponse,
  };

  //function to send email to server
  const submit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(sendEmailThunk(emailPayload));
  };
  //phone number update function
  const updatePhoneFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(updatePhone(e.target.value));
  };

  //phone number update function
  const updateDescriptionFunction = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    dispatch(updateDescription(e.target.value));
  };

  //react-toastify function

  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage);
    }
  }, [toastMessage]);
  return (
    <>
      <motion.div
        id="form"
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
              onChange={updateNameFunction}
              value={name}
              type="text"
              name="name"
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
              onChange={updatePhoneFunction}
              name="phone"
              value={phone}
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
              onChange={updateEmailFunction}
              value={email}
              name="email"
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
            <Select.Root
              value={practice}
              name="practice-area"
              onValueChange={(value) => {
                dispatch(updatePractice(value));
              }}
            >
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
                onChange={updateDescriptionFunction}
                value={description}
                name="case-description"
                placeholder="Enter case description"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
          <div>
            <Button
              onClick={submit}
              className={`cursor-pointer ${
                loading && "loading loading-bars text-sky-700 loading-md"
              }`}
            >
              Get Your Free Consultation
            </Button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default Consultation;
