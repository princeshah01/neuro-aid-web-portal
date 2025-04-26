
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Advanced AI Classification',
      description: 'Our state-of-the-art neural network provides up to 97% accuracy in tumor classification.',
      icon: (
        <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-healthcare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
      ),
    },
    {
      title: 'Rapid Results',
      description: 'Get detailed analysis in seconds rather than waiting days for traditional review.',
      icon: (
        <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-healthcare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
    },
    {
      title: 'PDF Chat Analysis',
      description: 'Upload medical reports and get AI-powered insights and explanations instantly.',
      icon: (
        <div className="w-12 h-12 bg-healthcare-soft-blue rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-healthcare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Advanced Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our AI-powered platform offers cutting-edge tools for medical professionals
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="healthcare-card hover:translate-y-[-5px]"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-healthcare-soft-blue rounded-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">HIPAA Compliant & Secure</h3>
              <p className="mt-2 text-gray-600">
                Our platform meets the highest standards for healthcare data security and patient privacy protection.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['End-to-end encryption', 'Secure data storage', 'Role-based access', 'Audit logging'].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-healthcare-green mr-2" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="w-full md:w-40 h-40 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-healthcare-blue opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
