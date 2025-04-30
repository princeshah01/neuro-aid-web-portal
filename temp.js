<div className="relative w-full max-w-md">
    <div className="absolute inset-0 bg-white opacity-40 rounded-full blur-3xl"></div>
    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg">
        <div className="h-48 bg-healthcare-gray rounded-lg flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-healthcare-blue rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                    </svg>
                </div>
                <p className="mt-4 text-gray-600">
                    Upload your MRI scan
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    DICOM, JPG, PNG formats accepted
                </p>
            </div>
        </div>
        <div className="mt-4 flex justify-center">
            <Button className="bg-healthcare-blue hover:bg-opacity-90 w-full">
                Upload Scan
            </Button>
        </div>
    </div>
</div>