
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Neurosurgeon",
    avatar: "SJ",
    quote: "NeuroScan AI has revolutionized the way we process MRI scans. The tumor classification is remarkably accurate and has significantly reduced our diagnosis time.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Radiologist",
    avatar: "MC",
    quote: "The Chat with PDF feature is incredibly helpful for quickly analyzing complex medical reports. It has become an essential tool in my daily practice.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Oncologist",
    avatar: "ER",
    quote: "This platform provides exceptional accuracy in identifying tumor characteristics. It serves as an excellent second opinion tool that I rely on regularly.",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-healthcare-soft-blue">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">What Medical Professionals Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by healthcare professionals worldwide
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="max-w-4xl mx-auto healthcare-card bg-white">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 bg-healthcare-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
                <div className="mt-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-12 w-12 text-healthcare-blue opacity-30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                  </svg>
                  <p className="relative text-lg text-gray-700 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-healthcare-blue text-healthcare-blue"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index ? 'bg-healthcare-blue scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-healthcare-blue text-healthcare-blue"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
