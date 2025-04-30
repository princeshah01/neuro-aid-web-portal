import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Animation1 from "../assets/Animation1.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 ">
      <div className="container mx-auto px-4 lg:px-20 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Advanced AI for{" "}
              <span className="text-healthcare-blue">Brain Tumor</span>{" "}
              Classification
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Our AI-powered system provides accurate, fast, and reliable
              classification of brain tumors from MRI scans, helping medical
              professionals make informed decisions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-healthcare-blue hover:bg-opacity-90"
              >
                <Link
                  to="/services/tumor-classifier"
                  className="flex items-center"
                >
                  Try Tumor Classifier
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-soft-blue"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-healthcare-green flex items-center justify-center text-white text-xs">
                  MD
                </div>
                <div className="w-8 h-8 rounded-full bg-healthcare-blue flex items-center justify-center text-white text-xs">
                  RN
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs">
                  DR
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by 500+ healthcare professionals
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="rounded-xl overflow-hidden ">
              <div className="aspect-w-16 aspect-h-9 w-full flex items-center justify-center p-8">
                <Lottie
                  className="w-full lg:w-[70%] "
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
