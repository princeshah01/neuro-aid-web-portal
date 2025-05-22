import { ArrowRight, BotMessageSquare, Pin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Animation1 from "../assets/Animation1.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <section className="relative  pb-16 md:pt-24 md:pb-24 pt-24 ">
      <div className="container mx-auto px-4 lg:pl-10 lg:pr-0 pt-8 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-6 ">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Advanced AI for{" "}
              <span className="text-healthcare-blue">Brain Tumor</span>{" "}
              Classification
            </h1>

            <p className="mt-6 text-lg text-gray-600 text-justify">
              Upload MRI scans to classify brain tumors instantly, generate
              detailed medical PDFs, talk to your reports, and get
              health-related answers through our intelligent chatbot — all in
              one seamless platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-healthcare-blue hover:bg-opacity-90"
              >
                <Link
                  to="/services/chat-with-pdf"
                  className="flex items-center"
                >
                  Smart PDF Chat
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-soft-blue"
              >
                <Link to="/services/tumor-classifier">Upload MRI</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-centers">
              <BotMessageSquare size={20} />
              <p className="text-sm font-medium px-2 rounded-lg text-black opacity-80 text-nowrap">
                Get smart answers to your brain health questions, anytime
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="overflow-hidden ">
              <div className="aspect-w-16 aspect-h-9 w-full flex items-center justify-end p-8">
                <Lottie
                  className="w-full lg:w-[90%] "
                  animationData={Animation1}
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
