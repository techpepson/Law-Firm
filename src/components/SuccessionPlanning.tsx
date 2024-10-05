import React from "react";
import { succession, willDrafter } from "../assets/images";
import {
  Button,
  Container,
  Heading,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { icons } from "../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { staffData } from "../data/homeData";
import { motion } from "framer-motion";
import { Footer, Header } from "./component-exports";
import { Helmet } from "react-helmet";

const SuccessionPlanning: React.FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const locationSplit = currentLocation.split("/").pop();
  return (
    <>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Spicy+Rice&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&family=Spicy+Rice&display=swap');
        </style>
        <title>Home</title>
        <meta
          name="description"
          content="The official succession planning page of Fortuna Legal Services."
        />
        <title>Succession Planning</title>
        <meta
          name="keywords"
          content="Fortuna, draft, law, succession planning, successor, will drafting, attorney, lawyer, legal, lawyers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Succession Planning" />
        <meta
          property="og:description"
          content="The official succession planning page of Fortuna Legal Services."
        />
        <meta
          property="og:image"
          content="https://fortuna-legal.com/practice-areas/succession-planning"
        />
        <meta
          property="og:url"
          content="https://fortuna-legal.com/practice-areas/succession-planning"
        />
      </Helmet>
      <div className="bg-gradient-to-t from-slate-100 to-slate-200">
        <Header />
        <section className="bg-gray-100 py-4 shadow-md">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading className="text-4xl">
              <span className="font-bold text-gray-800 oleo-script-regular">
                Fortuna Succession Planning Lawyers in Singapore.
              </span>
            </Heading>
          </motion.div>
        </section>

        {/*path section*/}
        <section className="bg-white py-4 shadow-md">
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-lg font-semibold text-gray-800">
              Fortuna Legal
            </span>

            <motion.button
              className="focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {icons.longRightArrow}
            </motion.button>

            <span className="text-lg font-semibold text-gray-800">
              {locationSplit === "succession-planning" && "Succession Planning"}
            </span>
          </motion.div>
        </section>

        {/*intro section*/}
        <Container>
          <section className="bg-gray-50 py-10">
            {/* Upper section container */}
            <div className="px-6 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading className="text-gray-800 mb-4">
                  <span className="oleo-script-regular">
                    What is Succession Planning?
                  </span>
                </Heading>
                <motion.p
                  className="text-gray-700 mb-4 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Succession planning is a strategic process that ensures the
                  seamless transition of assets and responsibilities upon the
                  passing of an individual. It involves identifying and
                  preparing designated individuals to take over management of
                  one's estate, ensuring that personal and financial wishes are
                  honored.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-4 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Effective succession planning encompasses a comprehensive
                  understanding of one’s assets, wishes, and the legal framework
                  governing estate management. This planning not only provides
                  clarity and direction for beneficiaries but also minimizes
                  potential conflicts or disputes that may arise among family
                  members or heirs. By establishing a clear succession plan,
                  individuals can safeguard their legacy and provide peace of
                  mind to their loved ones.
                </motion.p>
                <motion.p
                  className="text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  At Fortuna Legal, we specialize in guiding clients through the
                  intricacies of succession planning, helping you create a plan
                  that reflects your personal circumstances and goals.
                </motion.p>
              </motion.div>
              {/* Key Terminologies Section */}
              <section className="mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Heading className="text-gray-800 mb-4">
                    <span className="oleo-script-regular">
                      Key Terminologies in Succession Planning
                    </span>
                  </Heading>
                  <ul className="list-disc pl-5 mb-4">
                    {[
                      {
                        term: "Executor",
                        description:
                          "The individual appointed to carry out the terms of a will. The executor is responsible for managing the estate, paying debts, and distributing assets according to the deceased's wishes.",
                      },
                      {
                        term: "Testamentary Capacity",
                        description:
                          "The legal ability of an individual to make a valid will. This means that the person must be of sound mind and understand the implications of their decisions regarding their estate.",
                      },
                      {
                        term: "Beneficiary",
                        description:
                          "A person or entity designated to receive assets or benefits from an estate, trust, or will. Beneficiaries are typically family members, friends, or charities.",
                      },
                      {
                        term: "Trust",
                        description:
                          "A legal arrangement where one party (the trustee) holds assets for the benefit of another (the beneficiary). Trusts can help manage and protect assets during an individual's lifetime and after their passing.",
                      },
                      {
                        term: "Intestate",
                        description:
                          "The condition of an individual who dies without a valid will. When this occurs, the distribution of the estate is determined by state laws rather than personal wishes.",
                      },
                      {
                        term: "Power of Attorney",
                        description:
                          "A legal document that grants an individual (the agent) the authority to make decisions on behalf of another person (the principal) regarding financial or medical matters. This authority can be limited to specific tasks or general management.",
                      },
                      {
                        term: "Legacy",
                        description:
                          "The assets, values, and memories passed down from one generation to another. Planning for a legacy involves deciding how one's wealth and personal values will be preserved and transferred.",
                      },
                    ].map((item, index) => (
                      <li key={index} className="mb-2">
                        <strong>{item.term}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">
                    Understanding these key terms is crucial for effective
                    succession planning. At Fortuna Legal, we can assist you in
                    navigating these concepts and ensuring your plan aligns with
                    your intentions.
                  </p>
                </motion.div>
              </section>
              {/* Processes of Succession Planning Section */}
              <section className="mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <Heading className="text-gray-800 mb-4">
                    <span className="oleo-script-regular">
                      Processes of Succession Planning
                    </span>
                  </Heading>
                  {[
                    {
                      step: "Assessing Current Situation",
                      description:
                        "The first step in succession planning is to assess your current situation. This includes evaluating your assets, liabilities, and any existing estate planning documents. Understanding your financial landscape helps in making informed decisions about your succession plan.",
                    },
                    {
                      step: "Defining Goals and Objectives",
                      description:
                        "Clearly define your goals and objectives for your succession plan. Consider what you want to achieve, such as protecting your family’s financial future, ensuring business continuity, or preserving your legacy. This will guide the development of your plan.",
                    },
                    {
                      step: "Identifying Key Individuals",
                      description:
                        "Identify the key individuals involved in your succession plan. This may include family members, business partners, or trusted advisors who will play a role in managing your estate or business after your passing.",
                    },
                    {
                      step: "Creating a Comprehensive Plan",
                      description:
                        "Develop a comprehensive succession plan that outlines how your assets will be distributed, who will serve as the executor, and any trusts that may be established. Ensure that the plan reflects your goals and complies with legal requirements.",
                    },
                    {
                      step: "Communicating the Plan",
                      description:
                        "Communicate your succession plan to relevant individuals, such as family members and beneficiaries. Open discussions can help manage expectations and reduce the potential for disputes in the future.",
                    },
                    {
                      step: "Implementing the Plan",
                      description:
                        "Once your plan is finalized, take steps to implement it. This may involve updating legal documents, establishing trusts, or designating beneficiaries. Ensure all necessary paperwork is in order to avoid complications later.",
                    },
                    {
                      step: "Regularly Reviewing and Updating",
                      description:
                        "Regularly review and update your succession plan to account for changes in your circumstances, such as significant life events, changes in assets, or shifts in family dynamics. Keeping your plan current ensures it remains effective and relevant.",
                    },
                    {
                      step: "Consulting Professionals",
                      description:
                        "Engage with experienced legal and financial professionals throughout the succession planning process. Their expertise can provide valuable insights and help ensure that your plan is legally sound and strategically effective.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                      className="mb-6"
                    >
                      <h3 className="text-gray-800 font-semibold">
                        {index + 1}. {item.step}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
              <motion.p
                className="text-gray-700 leading-relaxed mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                At Fortuna Legal, we understand that planning for the future of
                your estate is a vital step in preserving your legacy. Our
                skilled attorneys are dedicated to helping you create a
                comprehensive succession plan tailored to your needs. We ensure
                that your wishes are clearly outlined and respected, providing
                you and your family with peace of mind.
              </motion.p>
              {/* Location Container */}
              <motion.div
                className="mt-6 flex items-center italic font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <button className="text-gray-600">{icons.locationIcon}</button>
                <p className="ml-2 text-gray-700">
                  Our services extend across Singapore, including Orchard,
                  Marina Bay, Raffles Place, Bukit Timah, Sentosa, and Jurong.
                </p>
              </motion.div>
            </div>
          </section>
        </Container>

        {/*detail section*/}
        <Container>
          <section className="bg-white py-10">
            <div className="px-6 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading>
                  <span className="oleo-script-regular text-gray-800 text-3xl md:text-4xl">
                    EXPERT SUCCESSION PLANNING ATTORNEYS IN SINGAPORE
                  </span>
                </Heading>
                <motion.p
                  className="text-gray-700 mt-4 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Fortuna Legal is your trusted partner in succession planning.
                  We specialize in creating effective and legally sound
                  strategies that ensure your assets are managed and distributed
                  according to your desires. Our team possesses deep knowledge
                  of the complexities involved in estate management, enabling us
                  to craft solutions that minimize disputes and streamline the
                  succession process. We prioritize understanding your unique
                  situation, guiding you through every detail to secure your
                  legacy effectively.
                </motion.p>
              </motion.div>
            </div>
          </section>
        </Container>

        {/*considerations for succession planning*/}
        <Container>
          <section className="bg-gray-50 py-10">
            <div className="px-6 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading className="text-gray-800 mb-4">
                  <span className="oleo-script-regular">
                    ESSENTIAL FACTORS IN SUCCESSION PLANNING
                  </span>
                </Heading>
                <motion.img
                  src={succession}
                  alt="an image representing succession planning"
                  className="w-full h-auto mb-4 rounded-lg shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="text-gray-700 mb-4">
                    When devising your succession plan, it is crucial to address
                    several key factors to ensure its effectiveness and
                    legality:
                  </p>
                  <ul className="ml-5 list-disc mb-4">
                    {[
                      {
                        heading: "Clear Objectives",
                        description:
                          "Establishing clear goals regarding the distribution of your assets helps to ensure your wishes are honored.",
                      },
                      {
                        heading: "Choosing the Right Beneficiaries",
                        description:
                          "Thoughtfully selecting beneficiaries who will receive your assets can prevent potential family disputes.",
                      },
                      {
                        heading: "Incorporating Trusts",
                        description:
                          "Using trusts can offer financial benefits and control over how and when your assets are distributed.",
                      },
                      {
                        heading: "Tax Implications",
                        description:
                          "Understanding potential tax implications for your estate can help in planning effectively and minimizing tax burdens.",
                      },
                      {
                        heading: "Involvement of Professionals",
                        description:
                          "Consulting with legal and financial professionals is vital to ensure that your succession plan is comprehensive and effective.",
                      },
                    ].map((item, index) => (
                      <li key={index} className="mb-2">
                        <strong>{item.heading}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">
                    A well-structured succession plan takes into account all
                    relevant aspects of your life and estate, allowing for a
                    smooth transition of assets to your beneficiaries. At
                    Fortuna Legal, we work closely with you to understand your
                    specific needs and circumstances, ensuring that your
                    succession plan is robust and effective.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </Container>

        {/*succession planning representation*/}
        <section className="bg-gray-50 py-10 ">
          <div className="px-6 mx-auto mt-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading className="text-gray-800 mb-4 text-center">
                <span className="oleo-script-regular">
                  Secure Your Future with Our Succession Planning Expertise.
                </span>
              </Heading>

              <motion.p
                className="text-gray-700 mb-4 leading-relaxed text-center italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                If you are ready to take the next step in securing your legacy,
                reach out to our skilled succession planning attorneys today.
                We’re here to provide the guidance and support you need to
                create an effective succession plan tailored to your unique
                needs.
              </motion.p>

              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="flex cursor-pointer items-center bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition duration-300">
                  <span className="mr-2">
                    Get Started with Your Succession Planning
                  </span>
                  <button>{icons.longRightArrow}</button>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/*section for who should consider succession planning*/}
        <section className="bg-gray-50 py-10">
          <div className="px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-bold text-2xl text-gray-800 mb-4 text-center oleo-script-regular">
                Who Should Consider Succession Planning?
              </h2>

              <motion.p
                className="text-gray-700 mb-4 text-center leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Succession planning is essential for anyone who wants to ensure
                their wishes are honored after their passing. The following
                groups of individuals should consider developing a succession
                plan:
              </motion.p>

              <motion.ul
                className="list-disc pl-5 mb-4 flex flex-col gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li className="font-bold flex">
                  Families with Dependents:
                  <p className="text-gray-700 ml-5">
                    If you have children or dependents, establishing a
                    succession plan helps ensure their financial security and
                    well-being.
                  </p>
                </li>

                <li className="font-bold flex">
                  Individuals with Complex Assets:
                  <p className="text-gray-700 ml-5">
                    Those with real estate, investments, or business interests
                    should consider succession planning to effectively manage
                    and distribute these assets.
                  </p>
                </li>

                <li className="font-bold flex">
                  High Net-Worth Individuals:
                  <p className="text-gray-700 ml-5">
                    For individuals with substantial assets, a comprehensive
                    succession plan is critical to minimize tax implications and
                    maximize the value of their estate for heirs.
                  </p>
                </li>

                <li className="font-bold flex">
                  Business Owners:
                  <p className="text-gray-700 ml-5">
                    Business owners should prioritize succession planning to
                    ensure a smooth transition of business ownership and to
                    protect their business interests.
                  </p>
                </li>
              </motion.ul>

              <motion.p
                className="text-gray-700 text-center italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Consulting with experienced professionals is crucial to
                understanding your specific needs and the legal requirements of
                succession planning in Singapore.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/*section for ensuring legal validity*/}
        <section className="bg-gray-50 py-10">
          <div className="px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading className="text-gray-800 mb-4 text-center">
                <span className="oleo-script-regular">
                  Ensuring Your Succession Plan is Legally Valid
                </span>
              </Heading>

              <motion.p
                className="text-gray-700 mb-4 text-center leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                A legally valid succession plan is vital to avoiding disputes
                and ensuring your wishes are carried out. By working with
                Fortuna Legal, you can ensure that your plan meets all legal
                requirements and is structured to reflect your intentions
                clearly.
              </motion.p>

              <motion.ul
                className="list-disc ml-5 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li className="text-gray-700 mb-2">
                  Collaborate with professionals to draft legally binding
                  documents.
                </li>
                <li className="text-gray-700 mb-2">
                  Ensure your plan is compliant with local laws and regulations.
                </li>
                <li className="text-gray-700 mb-2">
                  Regularly review and adjust your plan to keep it aligned with
                  your current wishes and circumstances.
                </li>
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/*section for importance of choosing the right executor*/}
        <Container>
          <section className="bg-gray-50 py-10">
            <div className="px-6 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading className="text-gray-800 mb-4">
                  <span className="oleo-script-regular">
                    Choosing the Right Executor for Your Estate
                  </span>
                </Heading>
                <motion.ul
                  className="ml-5 list-disc mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <li className="text-gray-700 mb-2">
                    The executor you choose will be responsible for managing
                    your estate and ensuring your wishes are followed.
                  </li>
                  <li className="text-gray-700 mb-2">
                    Selecting someone trustworthy and capable is essential for a
                    smooth transition and effective estate management.
                  </li>
                  <li className="text-gray-700 mb-2">
                    Fortuna Legal is here to assist you in selecting an executor
                    who will uphold your legacy and fulfill your wishes.
                  </li>
                </motion.ul>
                <div className="flex justify-center">
                  <motion.img
                    src={willDrafter}
                    alt="an image representing executor responsibilities."
                    className="w-full max-w-lg rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </Container>

        <Container>
          <section className="bg-white py-10">
            <div className="px-6 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading className="text-gray-800 mb-4">
                  <span className="oleo-script-regular">
                    WHY CHOOSE FORTUNA LEGAL FOR SUCCESSION PLANNING
                  </span>
                </Heading>
                <motion.p
                  className="text-gray-700 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Fortuna Legal is dedicated to providing personalized and
                  professional succession planning services. By choosing our
                  firm, you can expect:
                </motion.p>
                <motion.ul
                  className="ml-5 list-decimal mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <li className="text-gray-700 mb-2">
                    <strong>In-Depth Knowledge</strong>: Our attorneys possess
                    extensive knowledge of succession planning laws in
                    Singapore, ensuring compliance and efficacy.
                  </li>
                  <li className="text-gray-700 mb-2">
                    <strong>Tailored Solutions</strong>: We develop customized
                    succession plans that reflect your individual goals and
                    family dynamics.
                  </li>
                  <li className="text-gray-700 mb-2">
                    <strong>Thorough Communication</strong>: We prioritize clear
                    communication, ensuring you understand every aspect of your
                    succession plan.
                  </li>
                  <li className="text-gray-700 mb-2">
                    <strong>Ongoing Support</strong>: Our team is available to
                    assist you with updates and changes to your succession plan
                    as needed.
                  </li>
                  <li className="text-gray-700 mb-2">
                    <strong>Asset Protection</strong>: We focus on safeguarding
                    your assets and ensuring they are transferred according to
                    your wishes.
                  </li>
                </motion.ul>
                <motion.p
                  className="text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Trust Fortuna Legal to guide you through the succession
                  planning process with expertise and care, ensuring that your
                  legacy is protected for generations to come.
                </motion.p>
              </motion.div>
            </div>
          </section>
        </Container>

        {/*section for team*/}
        <section>
          <div className="py-10">
            <Heading className="text-START text-4xl mb-8">
              <span className="oleo-script-regular">WE ARE HERE FOR YOU</span>
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffData.map((staff) => (
                <Link key={staff.name} to={staff.link}>
                  <motion.div
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src={staff.image}
                      alt={`An image of ${staff.name}`}
                      className="w-[32rem] h-[32rem] object-right-top rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05 }} // Scale up on hover
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">{staff.name}</p>
                      <p className="text-gray-500">{staff.title}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="py-10">
            <div className="text-center mb-8">
              <Heading className="text-4xl mb-4">
                <span className="elsie-swash-caps-regular">Reach Us</span>
              </Heading>
              <Heading className="text-2xl">
                <span className="elsie-swash-caps-regular">
                  Schedule a Consultation With Fortuna Legal Services
                </span>
              </Heading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Unordered list data */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Fortuna Legal specializes in comprehensive succession planning
                  services. Our experienced attorneys are dedicated to ensuring
                  that your succession plan is legally sound and clearly
                  reflects your intentions, minimizing the risk of future
                  disputes. With a focus on personalized service, we will
                  carefully assess your unique situation and guide you through
                  every step of the planning process. Contact us today for
                  expert assistance!
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
                  <li>We have three attorneys to assist you</li>
                  <li>
                    We will return your initial call or email inquiry within one
                    hour
                  </li>
                </ul>
                {/* Disclaimer section */}
                <div className="text-center">
                  <Link
                    to="/disclaimer"
                    className="text-blue-500 hover:underline"
                  >
                    <p>Disclaimer</p>
                  </Link>
                </div>
              </motion.div>

              {/* Form field to book consultation */}
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
                      Email**
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
                      Practice Area*
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
                    <Button className="w-full">
                      Get Your Free Consultation
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default SuccessionPlanning;
