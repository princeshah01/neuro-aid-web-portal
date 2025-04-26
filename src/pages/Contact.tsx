
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';
import { Button } from '@/components/ui/button';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "Thank you for contacting us. We'll get back to you shortly.",
        duration: 5000,
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-6 text-xl text-gray-600">
              Have questions about our platform? Our team is here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">support@neuroscan.ai</p>
                    <p className="text-gray-600">sales@neuroscan.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Office</h3>
                    <p className="text-gray-600 mt-1">123 Innovation Way</p>
                    <p className="text-gray-600">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-healthcare-soft-blue rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Support Hours</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday-Friday</span>
                    <span className="font-medium">9:00am - 5:00pm PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">10:00am - 2:00pm PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="healthcare-card">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                      placeholder="Hospital or Institution"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-healthcare-blue"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-healthcare-blue hover:bg-opacity-90"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about our platform
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What file formats do you support for brain scan uploads?",
                  answer: "Our platform supports DICOM, JPG, and PNG formats for brain scan uploads. For best results, we recommend using the original DICOM files from your MRI machine."
                },
                {
                  question: "Is my patient data secure on your platform?",
                  answer: "Yes, all data uploaded to our platform is encrypted both in transit and at rest. We are fully HIPAA compliant and implement strict access controls to protect patient information."
                },
                {
                  question: "How accurate is your AI tumor classification system?",
                  answer: "Our system has been validated to have a 97% accuracy rate when compared to diagnoses from expert neuroradiologists. However, our AI is designed to be a supportive tool for healthcare professionals, not a replacement for expert medical judgment."
                },
                {
                  question: "Do you offer integration with hospital EMR systems?",
                  answer: "Yes, we offer integration with major EMR systems including Epic, Cerner, and Allscripts. Our team can work with your IT department to ensure seamless integration."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="w-8 h-8 bg-healthcare-blue rounded-full flex items-center justify-center text-white font-bold">
                        Q
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <div className="mt-2 flex items-start">
                        <div className="mr-4">
                          <div className="w-8 h-8 bg-healthcare-green rounded-full flex items-center justify-center text-white font-bold">
                            A
                          </div>
                        </div>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default Contact;
