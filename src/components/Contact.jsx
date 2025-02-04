import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="text-center">
          <p className="text-lg mb-8">
            Feel free to reach out to me via my social media profiles or email.
          </p>
          <div className="flex justify-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/SabirinMohamudAdan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18bc9c] hover:text-[#449e8c] transition-colors duration-300"
            >
              <i className="fab fa-github text-4xl"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18bc9c] hover:text-[#449e8c] transition-colors duration-300"
            >
              <i className="fab fa-linkedin text-4xl"></i>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18bc9c] hover:text-[#449e8c] transition-colors duration-300"
            >
              <i className="fab fa-twitter text-4xl"></i>
            </a>
            {/* Email */}
            <a
              href="mailto:youremail@example.com"
              className="text-[#18bc9c] hover:text-[#449e8c] transition-colors duration-300"
            >
              <i className="fas fa-envelope text-4xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;