import ChatbotWidget from "@/components/ChatbotWidget";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import useBlurOnScroll from "@/hooks/useBlurOnScroll";
import { useChatbot } from "@/context/ChatbotProvider";
import { BackgroundBeams } from "@/components/ui/background";
const Index = () => {
  const blurNav = useBlurOnScroll();
  const { isOpen, toggleChatbot } = useChatbot();
  return (
    <>
      <div className="relative w-full bg-gradient-to-b from-healthcare-soft-blue to-white">
        <BackgroundBeams />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <Navbar scroll={blurNav} />
        <Hero />
      </div>
      <Features />

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto gap-5 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our advanced AI system provides fast and accurate tumor
              classification
            </p>
          </div>

          <div className="mt-12 mb-[10rem]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Upload Your Scan",
                  description:
                    "Upload your MRI scan in DICOM, JPG, or PNG format.",
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "AI Processing",
                  description:
                    "Our neural network analyzes the scan using advanced algorithms.",
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
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "View Results",
                  description:
                    "Receive detailed classification results with visual indicators.",
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
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="healthcare-card relative">
                  <span className="absolute -top-4 -left-4 w-12 h-12 bg-healthcare-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </span>
                  <div className="pt-6 text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-healthcare-blue hover:bg-opacity-90"
              >
                <Link
                  to="/services/tumor-classifier"
                  className="flex items-center"
                >
                  Try It Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Chat Section */}
      <section className="py-16 bg-gradient-to-b from-white to-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800">
                Chat with PDF
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Upload your medical reports and let our AI assistant analyze
                them and answer your questions.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Extract key findings from medical reports",
                  "Ask questions about technical terminology",
                  "Get summaries of complex documents",
                  "Compare results across multiple reports",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-healthcare-green mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-healthcare-blue hover:bg-opacity-90"
                >
                  <Link
                    to="/services/chat-with-pdf"
                    className="flex items-center"
                  >
                    Try Chat with PDF
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="md:w-1/2  ">
              <div className="bg-white rounded-lg shadow-xl border border-healthcare-gray p-4">
                <div className="bg-healthcare-soft-blue rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-healthcare-blue flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-800">
                        NeuroScan AI
                      </p>
                      <p className="text-xs text-gray-500">Now</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-800">
                      Based on the MRI report uploaded, I found evidence of a
                      2.3cm lesion in the left temporal lobe consistent with a
                      meningioma. The report indicates WHO Grade I
                      characteristics with no signs of invasion into surrounding
                      tissue.
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500 italic">
                      You can ask follow-up questions about this report...
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="relative">
                    <input
                      type="text"
                      disabled
                      placeholder="Ask about your medical report..."
                      className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-healthcare-blue text-white p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10rem]"></div>
      </section>
      <Footer />
      <ChatbotWidget isOpen={isOpen} toggleChat={toggleChatbot} />
    </>
  );
};

export default Index;
