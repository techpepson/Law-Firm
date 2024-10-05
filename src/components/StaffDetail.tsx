import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer motion for animations
import { staffData } from "../data/homeData";
import { Footer, Header } from "./component-exports";
import { Helmet } from "react-helmet";

const StaffDetail: React.FC = () => {
  const { id } = useParams();
  const selectedStaff = staffData.find((staff) => staff.id === id); // Find the staff by id

  if (!selectedStaff) {
    return <div>Staff not found</div>; // Fallback if no staff is found
  }

  const {
    name,
    title,
    description,
    placeOfBirth,
    university,
    program,
    phone,
    email,
    firstMemberShip,
    secondMembership,
    thirdMembership,
    image,
  } = selectedStaff;

  return (
    <>
      <Helmet>
        <title>Attorney Detail</title>
        <meta
          name="description"
          content="The official attorney detail page of Fortuna Legal Services."
        />
        <meta
          name="keywords"
          content="Fortuna, law, will drafting, attorney, lawyer, legal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Attornney Detail" />
        <meta
          property="og:description"
          content="The official about page of Fortuna Legal Services."
        />
        <meta
          property="og:image"
          content={`https://fortuna-legal.com/attorney/${id}`}
        />
        <meta property="og:url" content={`https://fortuna-legal.com/attorney/${id}`} />
      </Helmet>
      <div className="container mx-auto py-10 px-5">
        <Header />
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center bg-white shadow-md rounded-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Section */}
          <motion.img
            src={image}
            alt={name}
            className="w-full md:w-1/3 rounded-lg mb-6 md:mb-0 md:mr-10"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Staff Info Section */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-3">{name}</h2>
            <h3 className="text-lg text-gray-600 mb-5">{title}</h3>

            <p className="mb-5">{description}</p>

            <motion.h4
              className="text-xl font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Personal Details
            </motion.h4>
            <ul className="list-disc list-inside mb-5 text-gray-700">
              <li>
                <strong>Place of Birth:</strong> {placeOfBirth}
              </li>
              <li>
                <strong>University:</strong> {university}
              </li>
              <li>
                <strong>Program:</strong> {program}
              </li>
              <li>
                <strong>Phone:</strong> {phone}
              </li>
              <li>
                <strong>Email:</strong> {email}
              </li>
            </ul>

            <motion.h4
              className="text-xl font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Memberships
            </motion.h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>{firstMemberShip}</li>
              <li>{secondMembership}</li>
              <li>{thirdMembership}</li>
            </ul>
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default StaffDetail;
