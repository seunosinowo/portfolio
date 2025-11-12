import React, { useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_KEY = '53162de4-b933-422e-85d8-284be6830a0f';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [modal, setModal] = useState<{ open: boolean; type: 'success' | 'error'; message: string }>({ open: false, type: 'success', message: '' });
  const [loading, setLoading] = useState(false);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    const formData = new FormData(form.current);
    formData.append('access_key', WEB3FORMS_KEY);
    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setModal({ open: true, type: 'success', message: 'Your message has been sent successfully! I will get back to you soon.' });
        form.current?.reset();
      } else {
        setModal({ open: true, type: 'error', message: 'Failed to send message. Please try again later.' });
      }
    } catch (error) {
      setModal({ open: true, type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 overflow-x-hidden">
      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className={`bg-white dark:bg-dark rounded-lg shadow-lg p-8 max-w-sm w-full text-center border ${modal.type === 'success' ? 'border-green-400' : 'border-red-400'}`}> 
            <div className="mb-4">
              {modal.type === 'success' ? (
                <span className="inline-block text-4xl text-green-500 mb-2">✔️</span>
              ) : (
                <span className="inline-block text-4xl text-red-500 mb-2">❌</span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${modal.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{modal.type === 'success' ? 'Success!' : 'Error'}</h3>
              <p className="text-text-light">{modal.message}</p>
            </div>
            <button
              className="btn btn-secondary w-full mt-2"
              onClick={() => setModal({ ...modal, open: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">
            Start the Conversation
          </p>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 max-w-4xl mx-auto items-center">
          {/* Left: Contact Form */}
          <div className="card-bg rounded-custom p-10 shadow-custom flex flex-col justify-center items-center w-full max-w-md mx-auto">
            <form ref={form} onSubmit={sendForm} className="w-full">
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <div className="mb-5">
                <label className="block mb-2 text-text-light">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full px-4 py-3.5 bg-dark/50 border border-card-border rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-text-light">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-3.5 bg-dark/50 border border-card-border rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-text-light">Services</label>
                <select
                  name="service"
                  className="w-full px-4 py-3.5 bg-gray-800 border border-primary rounded-lg text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary appearance-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="custom-website">Custom website development</option>
                  <option value="web-applications">Web applications</option>
                  <option value="fullstack-applications">Fullstack applications</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-text-light">Budget</label>
                <select
                  name="budget"
                  className="w-full px-4 py-3.5 bg-gray-800 border border-primary rounded-lg text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary appearance-none"
                  required
                >
                  <option value="">Select your budget</option>
                  <option value="below-2000">Below $2000</option>
                  <option value="2000-4000">$2000 - $4000</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-text-light">Project Details <span className="text-xs text-text-light">(optional)</span></label>
                <textarea 
                  name="details"
                  rows={4}
                  className="w-full px-4 py-3.5 bg-dark/50 border border-card-border rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Tell me about your project (optional)"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn w-full py-3.5 px-4 text-center"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          {/* OR Separator */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full">
            <span className="text-text-light text-sm px-4 py-2 bg-dark/70 rounded-full border border-card-border shadow">or</span>
          </div>
          {/* Right: Contact Links */}
          <div className="card-bg rounded-custom shadow-custom flex flex-col justify-center items-center w-full max-w-md mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 w-full">
              <a href="https://calendly.com/oluwaseunpaul98/30min" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full flex items-center justify-center">Book a call</a>
              <a href="https://www.linkedin.com/in/seun-osinowo-0174a1215/" target="_blank" rel="noopener noreferrer" className="btn w-full flex items-center justify-center gap-2"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;