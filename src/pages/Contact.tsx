import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import useBlurOnScroll from "@/hooks/useBlurOnScroll";
import { useChatbot } from "@/context/ChatbotProvider";
const Contact = () => {
  const { isOpen, toggleChatbot } = useChatbot();
  const { toast } = useToast();
  const isBlurred = useBlurOnScroll();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description:
          "Thank you for contacting us. We'll get back to you shortly.",
        duration: 5000,
      });

      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };

  return (
    <>
      <Navbar scroll={isBlurred} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Contact Us
            </h1>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">
                      Prince.rjb839@gmail.com
                    </p>
                    <p className="text-gray-600">shuvsutradhar@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      +91-9334326203 / +91-7002692443
                    </p>
                    <p className="text-gray-600">9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Location
                    </h3>
                    <p className="text-gray-600">Chandigarh, Sector-13</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="healthcare-card">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
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
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
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

      <Footer />
      <ChatbotWidget isOpen={isOpen} toggleChat={toggleChatbot} />
    </>
  );
};

export default Contact;
