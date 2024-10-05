import { Container, Heading } from "@radix-ui/themes";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { lawDocs, lawStatue, lawWeigh } from "../assets/images";
import { TypewriterEffectSmoothDemo } from "./util/TypeWriterEffectDemo";
import { aboutPageStyles } from "../styles/utilityStyles";
import { Footer, Header } from "./component-exports";
import { staffData } from "../data/homeData";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  //animate number entrance
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    // animate the number from 0 to 100
    const controls = animate(count, 500, { duration: 3 });

    // Clean up the animation when the component unmounts
    return () => controls.stop();
  }, [count]); // run only once on mount

  return (
    <>
      <Helmet>
        <title>About Fortuna</title>
        <meta
          name="description"
          content="The official about page of Fortuna Legal Services."
        />
        <meta
          name="keywords"
          content="Fortuna, law, will drafting, attorney, lawyer, legal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About Fortuna" />
        <meta
          property="og:description"
          content="The official about page of Fortuna Legal Services."
        />
        <meta property="og:image" content="https://fortuna-legal.com/about" />
        <meta property="og:url" content="https://fortuna-legal.com/about" />
      </Helmet>

      {/*header*/}
      <header>
        <Header />
      </header>
      {/* Page Content */}
      <div className="flex flex-col gap-5 bg-black bg-opacity-25 h-full ">
        {/* Header Section */}

        <div className={`relative w-full h-full bg-opacity-55 bg-black`}>
          <div className={`absolute w-full h-full -z-[999]`}>
            <img
              src={lawWeigh}
              alt="An image of a law firm weigh "
              className="w-full h-full"
            />
          </div>
          <section>
            <div className="relative">
              <Heading>
                <TypewriterEffectSmoothDemo />
              </Heading>
            </div>
          </section>
          {/* Animated Number Section */}
          <motion.section>
            <div className="text-center mt-10 flex flex-col w-full h-full">
              {/* Display animated number */}
              <div>
                <Heading className="text-3xl text-slate-100">Over</Heading>
              </div>
              <motion.div style={{ fontSize: "48px", fontWeight: "bold" }}>
                <motion.span className="text-8xl text-orange-200">
                  {rounded}
                </motion.span>
              </motion.div>
              {/*text section container*/}
              <div>
                <Heading className="text-xl text-slate-100">
                  Clients have shown satisfaction in our services
                </Heading>
              </div>
            </div>
          </motion.section>
        </div>

        {/*vision and mission section*/}
        <section className="flex flex-col gap-5">
          {/*container for mission and vision statements*/}
          <div className="grid max-2xl::grid-cols-1 md:grid-cols-2 gap-5">
            {/*vision container*/}
            <div className={`${aboutPageStyles.textImageStyles}`}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={lawStatue}
                alt="an image of a law firm statue"
                className="rounded-xl"
              />
              {/*container for vision texts*/}
              <div className={`${aboutPageStyles.textStylesVariant}`}>
                <Heading
                  className={`${aboutPageStyles.headingStyles} text-slate-700`}
                >
                  Our Vision
                </Heading>
                <span>
                  At Fortuna Legal Services, our vision is to be a beacon of
                  excellence in the legal landscape, transforming how legal
                  services are perceived and delivered. We aspire to create an
                  environment where legal support is accessible, transparent,
                  and highly personalized, ensuring every client feels empowered
                  and supported throughout their legal journey. We aim to
                  redefine the traditional approach to law by embracing
                  innovation, leveraging cutting-edge technology, and fostering
                  a client-centered approach that emphasizes clarity and
                  efficiency. Our commitment is to provide actionable solutions,
                  not just legal advice, ensuring that every case we handle
                  leads to meaningful, positive outcomes for our clients. Our
                  long-term vision is not just to be a legal service provider,
                  but a trusted partner—one that our clients can rely on for
                  expert counsel and strategic guidance, no matter how complex
                  or routine the legal matter. At Fortuna, we see a future where
                  legal challenges are met with confidence, solutions are
                  delivered with precision, and the path to success is clear for
                  every individual, business, and organization we serve.
                </span>
              </div>
            </div>
            {/*mission container*/}
            <div className={`${aboutPageStyles.textImageStyles}`}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={lawDocs}
                alt="an image of a legal document"
                className={` rounded-xl`}
              />
              {/*mission texts container*/}
              <div className={`${aboutPageStyles.textStylesVariant}`}>
                <Heading className={`${aboutPageStyles.headingStyles}`}>
                  Our Mission
                </Heading>
                <span>
                  At Fortuna Legal Services, our mission is to simplify the
                  legal process by providing clear, concise, and actionable
                  legal advice that meets the unique needs of every client. We
                  are committed to guiding our clients through complex legal
                  challenges with expertise, integrity, and transparency. Our
                  goal is to ensure that every client, whether an individual or
                  a business, can make well-informed decisions with confidence.
                  We believe in reducing the stress and complexity of legal
                  matters by stripping away unnecessary jargon and focusing on
                  practical, results-driven solutions. By aligning our services
                  with the specific objectives of our clients, we aim to deliver
                  outcomes that not only solve immediate problems but also
                  support long-term success. Fortuna is dedicated to fostering
                  strong client relationships built on trust, responsiveness,
                  and personalized attention. Every case we handle is approached
                  with the utmost care, precision, and a commitment to
                  excellence, ensuring that our clients always feel empowered
                  and well-represented.
                </span>
              </div>
            </div>
            {/*people section*/}
          </div>
          <section>
            <Container>
              <div className="py-10">
                <Heading className={`${aboutPageStyles.headingStyles}`}>
                  <span>THE FORTUNA TEAM</span>
                </Heading>
                <span>
                  At Fortuna Legal Services, our team is the backbone of our
                  success, consisting of a diverse group of legal professionals
                  dedicated to delivering exceptional service. Each member
                  brings a unique set of skills, experiences, and perspectives
                  that enrich our collective ability to address the varied needs
                  of our clients. We believe that the best legal solutions arise
                  from collaboration, and our attorneys work closely together,
                  leveraging their individual strengths to foster innovative
                  approaches to problem-solving. This collaborative spirit
                  extends beyond our legal team; we actively engage with clients
                  to understand their needs deeply, ensuring that every voice is
                  heard and valued. Our team members specialize in a wide array
                  of legal disciplines, from family law and estate planning to
                  corporate law and litigation. This diverse expertise allows us
                  to provide comprehensive legal solutions tailored to the
                  unique challenges faced by individuals and businesses alike.
                  Whether you need guidance in navigating a complex legal issue
                  or straightforward advice, you can trust that our team has the
                  knowledge and experience to assist you effectively. We are
                  also committed to continuous learning and professional growth.
                  Our team regularly engages in ongoing education and training
                  to stay abreast of the latest legal developments and industry
                  trends. This dedication ensures that we remain at the
                  forefront of legal practice, equipped to offer our clients the
                  most relevant and effective advice. Beyond our practice, our
                  team is actively involved in the community. We believe in
                  giving back and supporting local initiatives that align with
                  our values. Whether through pro bono work, legal education
                  workshops, or community outreach programs, our team strives to
                  make a positive impact beyond the walls of our firm. Our
                  leadership team is composed of seasoned attorneys with a
                  proven track record of success. They not only lead with
                  integrity and vision but also mentor and guide our junior
                  staff, fostering a culture of support and excellence. Their
                  commitment to ethical practice and client service is the
                  foundation of our firm’s reputation.
                </span>
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
            </Container>
          </section>
        </section>
        {/*section for company story*/}
        <Container>
          <div>
            <Heading className={`${aboutPageStyles.headingStylesVariant}`}>
              The <span>Fortuna</span> Story
            </Heading>
            <div>
              Fortuna Legal Services was born out of a shared vision among a
              group of dedicated attorneys who believed that legal services
              could—and should—be delivered with greater transparency,
              efficiency, and compassion. Our story began with the realization
              that too many individuals and businesses face legal complexities
              that feel overwhelming, often due to the use of confusing jargon
              and convoluted processes. We saw an opportunity to transform how
              legal support is provided, placing the client’s understanding and
              empowerment at the heart of everything we do.
            </div>
            {/*fortuna beginnings*/}
            <div>
              <Heading className={`${aboutPageStyles.headingStylesVariant}`}>
                Our Beginnings
              </Heading>
              <span>
                Founded by a small team of legal professionals with diverse
                backgrounds, Fortuna was established with a singular mission: to
                simplify the legal journey for clients without compromising on
                the quality or effectiveness of our services. Early on, we made
                the decision to focus on clarity. We recognized that behind
                every case was a person or business in need of a clear path
                forward. Whether it was drafting a will, resolving a contract
                dispute, or providing corporate counsel, we knew that legal
                advice should not only be expert and reliable but also
                accessible and easy to understand.
              </span>
            </div>
            {/*growth section*/}
            <div>
              <Heading className={`${aboutPageStyles.headingStylesVariant}`}>
                Growth and Expansion
              </Heading>
              <span>
                As Fortuna grew, so did our team and our capabilities. We
                expanded into new practice areas, always staying true to our
                core belief that the best legal solutions are those that are
                both effective and understandable. Over time, we built a
                reputation as a firm that not only gets results but also cares
                deeply about the client experience.We took this commitment
                further by embracing innovation. Recognizing the power of
                technology, we began integrating cutting-edge tools into our
                workflow to make legal services more efficient and responsive.
                This allowed us to serve a wider range of clients, from
                individuals and small businesses to large corporations, without
                ever losing sight of our commitment to clarity and precision.
                Today, we continue to leverage modern legal tech, providing
                seamless virtual consultations and secure digital platforms that
                keep our clients informed and involved every step of the way.
              </span>
            </div>
            {/*approach*/}
            <div>
              <Heading className={`${aboutPageStyles.headingStylesVariant}`}>
                A client-Centered Approach
              </Heading>
              <span>
                At Fortuna, we believe that every client’s case is unique and
                deserves tailored attention. From the beginning, we’ve sought to
                foster relationships based on trust, communication, and results.
                Our approach to legal representation is simple but powerful:
                listen closely, offer practical and actionable advice, and
                deliver outcomes that matter. Over the years, we’ve handled a
                broad spectrum of cases, from individual disputes to complex
                corporate matters, always with the same goal in mind—making the
                legal process as straightforward and stress-free as possible. We
                view ourselves not just as legal representatives but as partners
                in our clients' success, guiding them through their legal
                challenges with expertise, integrity, and a deep understanding
                of their needs.
              </span>
            </div>
            {/*legacy*/}
            <div>
              <Heading className={`${aboutPageStyles.headingStylesVariant}`}>
                Building A Legacy
              </Heading>
              <span>
                Our journey has been one of consistent growth and evolution,
                driven by the same values we held from day one. We’re proud of
                the impact we’ve made in our clients’ lives, whether by helping
                families secure their futures through estate planning or by
                supporting businesses as they navigate regulatory hurdles. But
                our story is far from over. We continue to expand, refine our
                services, and seek new ways to serve our clients better. Our
                vision for the future is clear: to be more than just a legal
                service provider—to be a trusted advisor and advocate for every
                client who walks through our doors or connects with us online.
              </span>
            </div>
            {/*promise*/}
            <div>
              <Heading className={`${aboutPageStyles.headingStylesVariant}`}>
                Our Promise
              </Heading>
              <span>
                At Fortuna Legal Services, we are committed to delivering legal
                solutions that don’t just solve problems but create
                opportunities. We understand that the legal landscape can be
                daunting, and our promise to our clients is to demystify the
                process, reduce the stress, and provide the clear, actionable
                guidance they need to achieve their goals. Whether it’s
                navigating complex litigation, securing a favorable contract, or
                providing advice on business growth, we’re here to ensure that
                our clients have a partner they can rely on at every step. We’re
                proud of our past and excited for what’s to come, and we look
                forward to continuing to provide the legal expertise, precision,
                and care that have come to define Fortuna Legal Services.
              </span>
            </div>
          </div>
        </Container>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
