
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">About NeuroScan AI</h1>
            <p className="mt-6 text-xl text-gray-600">
              Our mission is to enhance neurological diagnostic accuracy through AI-powered solutions
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
                Founded in 2022 by a team of neurologists and AI researchers, NeuroScan AI was born from the 
                recognition that early and accurate brain tumor diagnosis directly impacts patient outcomes.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                What started as a research project at Stanford University has evolved into a comprehensive 
                platform that empowers healthcare professionals with cutting-edge AI tools for neurological diagnostics.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, our platform is used in over 200 medical facilities worldwide, helping diagnose 
                potential brain tumors with remarkable accuracy and speed.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-healthcare-gray">
                <div className="aspect-w-16 aspect-h-9 w-full bg-healthcare-soft-blue flex items-center justify-center p-8">
                  <div className="relative w-full h-72">
                    <div className="absolute inset-0 bg-healthcare-blue opacity-10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto bg-healthcare-blue rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                        <h3 className="mt-6 text-2xl font-bold text-gray-800">Founded in 2022</h3>
                        <p className="mt-2 text-gray-600">By neurologists and AI specialists</p>
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
            <h2 className="text-3xl font-bold text-gray-800">Our Mission & Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to improving patient outcomes through technological innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Accuracy",
                description: "We prioritize diagnostic accuracy above all, with rigorous testing and continuous improvement of our algorithms.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-healthcare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible with AI in medical diagnostics and analysis.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-healthcare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Accessibility",
                description: "We believe advanced medical AI should be accessible to healthcare providers of all sizes, everywhere.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-healthcare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the experts behind our innovative healthcare AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. James Wilson",
                title: "CEO & Co-Founder",
                bio: "Neurologist with 15+ years of experience and former Head of Neurology at Stanford Medical Center.",
                avatar: "JW"
              },
              {
                name: "Dr. Maria Rodriguez",
                title: "Chief Medical Officer",
                bio: "Renowned neuro-oncologist specializing in advanced tumor classification techniques.",
                avatar: "MR"
              },
              {
                name: "Alex Chen",
                title: "CTO",
                bio: "AI researcher with expertise in deep learning and computer vision for medical applications.",
                avatar: "AC"
              }
            ].map((member, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-24 h-24 mx-auto bg-healthcare-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-healthcare-blue font-medium">{member.title}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
                
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-healthcare-blue transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-healthcare-blue transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-healthcare-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to experience the future of neurological diagnostics?</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Join our growing community of healthcare professionals using AI to improve patient outcomes.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-healthcare-blue hover:bg-opacity-90">
              <Link to="/services/tumor-classifier">Try Our Platform</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default About;
