import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="w-full min-h-[600px] bg-white p-6 md:p-10 lg:p-14 border-t-4 border-blue-600 ">
          
          <div className="flex flex-col xl:flex-row h-full gap-10 xl:gap-20">

            {/* Info */}
            <div className="flex-1 space-y-5">
              <h2 className="text-3xl font-bold text-gray-900">
                Contact Information
              </h2>

              <p className="text-gray-600">
                Reach out to the Nepal-China Exchange Forum for partnerships,
                collaborations, or general inquiries.
              </p>

              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@ncef.org</p>
                <p><strong>Phone:</strong> +977-98XXXXXXXX</p>
                <p><strong>Address:</strong> Kathmandu, Nepal</p>
              </div>

              {/* Map */}
              <div className="w-full h-60 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14451.043173791115!2d85.30612113427442!3d27.70148815422921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19006da38c97%3A0xeb1680160e08401c!2sRatna%20Park!5e0!3m2!1sen!2snp!4v1770902286472"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Request A Quote
              </h2>

              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              <Form />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
