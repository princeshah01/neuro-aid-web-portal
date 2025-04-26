
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-healthcare-soft-blue to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Advanced AI for <span className="text-healthcare-blue">Brain Tumor</span> Classification
            </h1>
            
            <p className="mt-6 text-lg text-gray-600">
              Our AI-powered system provides accurate, fast, and reliable classification 
              of brain tumors from MRI scans, helping medical professionals make 
              informed decisions.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-healthcare-blue hover:bg-opacity-90">
                <Link to="/services/tumor-classifier" className="flex items-center">
                  Try Tumor Classifier
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-soft-blue">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-healthcare-green flex items-center justify-center text-white text-xs">MD</div>
                <div className="w-8 h-8 rounded-full bg-healthcare-blue flex items-center justify-center text-white text-xs">RN</div>
                <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs">DR</div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by 500+ healthcare professionals
              </p>
            </div>
          </div>
          
          <div className="mt-10 md:mt-0 md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl border border-healthcare-gray">
              <div className="aspect-w-16 aspect-h-9 w-full bg-healthcare-soft-blue flex items-center justify-center p-8">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-white opacity-40 rounded-full blur-3xl"></div>
                  <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg">
                    <div className="h-48 bg-healthcare-gray rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-healthcare-blue rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <p className="mt-4 text-gray-600">Upload your MRI scan</p>
                        <p className="mt-2 text-sm text-gray-500">DICOM, JPG, PNG formats accepted</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Button className="bg-healthcare-blue hover:bg-opacity-90 w-full">Upload Scan</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
