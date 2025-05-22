import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import Animation from "@/assets/ai.json";
import Lottie from "lottie-react";
import useBlurOnScroll from "@/hooks/useBlurOnScroll";
import { useChatbot } from "@/context/ChatbotProvider";
const About = () => {
  const blurNav = useBlurOnScroll();
  const { isOpen, toggleChatbot } = useChatbot();
  return (
    <>
      <Navbar scroll={blurNav} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              About NeuroScan AI
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Our mission is to enhance neurological diagnostic accuracy through
              AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Tumortalk AI is a capstone project developed in 2025 by Prince
                Shah and Sourav Sutradhar, students of Lovely Professional
                University, with the goal of using AI to advance brain tumor
                diagnosis. What started as a research initiative during our
                academic journey has grown into a platform that leverages
                artificial intelligence for more accurate and efficient
                diagnostic tools.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Initially conceived as a project for our final-year coursework,
                Tumortalk AI equips healthcare professionals with innovative
                tools for neurological diagnostics, showcasing how AI can be
                integrated into medical practices to improve diagnostic speed
                and precision.
              </p>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-healthcare-gray">
                <div className="aspect-w-16 aspect-h-9 w-full bg-healthcare-soft-blue flex items-center justify-center p-8">
                  <div className="relative w-full h-72">
                    <div className="absolute inset-0 bg-healthcare-blue opacity-10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 mx-auto  rounded-full flex items-center justify-center">
                          <Lottie
                            className="w-full lg:w-[90%] "
                            animationData={Animation}
                            loop={true}
                          />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-gray-800">
                          Founded in 2025
                        </h3>
                        <p className="mt-2 text-gray-600">By MCA students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to improving patient outcomes through
              technological innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accuracy",
                description:
                  "We prioritize diagnostic accuracy above all, with rigorous testing and continuous improvement of our algorithms.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-healthcare-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Innovation",
                description:
                  "We continuously push the boundaries of what's possible with AI in medical diagnostics and analysis.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-healthcare-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Accessibility",
                description:
                  "We believe advanced medical AI should be accessible to healthcare providers of all sizes, everywhere.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-healthcare-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotWidget isOpen={isOpen} toggleChat={toggleChatbot} />
    </>
  );
};

export default About;
