import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileImage, Upload, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import useBlurOnScroll from "@/hooks/useBlurOnScroll";
import { useChatbot } from "@/context/ChatbotProvider";
const TumorClassifier = () => {
  const { isOpen, toggleChatbot } = useChatbot();
  const isBlurred = useBlurOnScroll();
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG)",
        duration: 5000,
      });
      return;
    }

    setUploadedFile(file);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setAnalysisComplete(false);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);

    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);

      toast({
        title: "Analysis Complete",
        description: "Your MRI scan has been successfully analyzed.",
        duration: 5000,
      });
    }, 3000);
  };

  return (
    <>
      <Navbar scroll={isBlurred} />
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-healthcare-soft-blue">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              AI Brain Tumor Classifier
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Upload your MRI scan for fast, accurate tumor classification
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="healthcare-card">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Upload Brain MRI Scan
              </h2>

              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center ${
                  dragActive
                    ? "border-healthcare-blue bg-healthcare-soft-blue/50"
                    : "border-gray-300"
                } ${uploadedFile ? "bg-healthcare-soft-blue/20" : ""}`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                {!uploadedFile ? (
                  <div>
                    <div className="mx-auto w-16 h-16 bg-healthcare-soft-blue rounded-full flex items-center justify-center mb-4">
                      <FileImage className="h-8 w-8 text-healthcare-blue" />
                    </div>
                    <p className="text-lg text-gray-700">
                      Drag & drop your MRI image here, or
                    </p>
                    <div className="mt-4">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="bg-healthcare-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
                          Browse Files
                        </span>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                      Supports: DICOM, JPG, PNG (max 10MB)
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <FileImage className="h-6 w-6 text-healthcare-blue mr-2" />
                        <span className="font-medium">{uploadedFile.name}</span>
                      </div>
                      <button
                        className="text-gray-500 hover:text-red-500"
                        onClick={removeFile}
                        aria-label="Remove file"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    {!analysisComplete && (
                      <Button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="w-full bg-healthcare-blue hover:bg-opacity-90"
                      >
                        {isAnalyzing ? (
                          <>
                            <div className="animate-spin mr-2">
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                            </div>
                            Analyzing MRI Scan...
                          </>
                        ) : (
                          <>
                            Analyze MRI Scan
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Analysis Results */}
              {analysisComplete && (
                <div className="mt-8 animate-fade-in">
                  <div className="bg-healthcare-soft-green rounded-lg p-6 border border-healthcare-green">
                    <div className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-healthcare-green mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        Analysis Results
                      </h3>
                    </div>

                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-64 flex items-center justify-center">
                          {/* Placeholder for the uploaded image */}
                          <div className="text-gray-400">MRI Scan Image</div>
                        </div>
                      </div>

                      <div>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-64 overflow-y-auto">
                          <h4 className="font-semibold text-gray-800">
                            Classification Results:
                          </h4>

                          <div className="mt-4 space-y-3">
                            <div>
                              <p className="text-sm text-gray-600">
                                Primary Classification:
                              </p>
                              <p className="font-medium">
                                Meningioma (WHO Grade I)
                              </p>
                              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-healthcare-blue h-2 rounded-full"
                                  style={{ width: "87%" }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Confidence: 87%</span>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-gray-600">
                                Secondary Classification:
                              </p>
                              <p className="font-medium">
                                Benign (Non-malignant)
                              </p>
                              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-healthcare-green h-2 rounded-full"
                                  style={{ width: "92%" }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Confidence: 92%</span>
                              </div>
                            </div>

                            <div className="pt-2">
                              <p className="text-sm text-gray-600 font-medium">
                                Key Observations:
                              </p>
                              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mt-2">
                                <li>
                                  Well-defined mass in the right frontal lobe
                                </li>
                                <li>No evidence of surrounding edema</li>
                                <li>No midline shift observed</li>
                                <li>
                                  No signs of infiltration into adjacent
                                  structures
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                      <h4 className="font-semibold text-gray-800">
                        AI Assessment Summary:
                      </h4>
                      <p className="mt-2 text-gray-700">
                        The image analysis suggests a meningioma (WHO Grade I)
                        with high confidence. The lesion appears well-defined
                        with typical characteristics of a benign meningioma.
                        There are no concerning features suggestive of
                        malignancy or aggressive behavior.
                      </p>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 italic">
                          Note: This is an AI-assisted analysis and should be
                          reviewed by a qualified healthcare professional. This
                          tool is not intended to replace clinical judgment or
                          expertise.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                      <Button className="bg-healthcare-blue hover:bg-opacity-90">
                        Download Full Report
                      </Button>
                      <Button
                        variant="outline"
                        className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-soft-blue"
                        onClick={removeFile}
                      >
                        Analyze Another Scan
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Usage Instructions */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                How to Use the Classifier
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Upload MRI Scan",
                    description:
                      "Drag and drop your MRI scan image or browse to select a file.",
                    icon: <Upload className="h-6 w-6 text-healthcare-blue" />,
                  },
                  {
                    title: "AI Analysis",
                    description:
                      "Our advanced neural network will process and analyze the brain image.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-healthcare-blue"
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
                    title: "View Results",
                    description:
                      "Get comprehensive classification results and assessment within seconds.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-healthcare-blue"
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
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-healthcare-soft-blue rounded-full flex items-center justify-center shrink-0">
                        {step.icon}
                      </div>
                      <h4 className="ml-3 font-semibold text-gray-800">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-healthcare-soft-blue rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Need help analyzing complex cases?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our chat assistant can answer questions about your results
                    and provide additional insights.
                  </p>
                </div>

                <div className="md:w-1/4 flex justify-end">
                  <Button
                    onClick={() => {
                      toggleChatbot();
                    }}
                    className="bg-healthcare-blue hover:bg-opacity-90"
                  >
                    Open Chat Assistant
                  </Button>
                </div>
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

export default TumorClassifier;
