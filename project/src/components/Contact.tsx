import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // EmailJS configuration - Replace with your actual service details
    const serviceId = 'your_service_id'; // Get from EmailJS dashboard
    const templateId = 'your_template_id'; // Create a template in EmailJS
    const publicKey = 'your_public_key'; // Get from EmailJS dashboard

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'kalyanachyuta@gmail.com', // Replace with your actual email
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kalyanachyuta@gmail.com', // Replace with your actual email
      link: 'mailto:kalyanachyuta@gmail.com', // Replace with your actual email
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9989468536',
      link: 'tel:+919989468536',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India, Bangalore, KA',
      link: 'https://www.google.com/maps/place/Bangalore,+Karnataka,+India',
    },
  ];

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/achyutakalyan' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/kalyan-achyuta' },
    { icon: Twitter, label: 'Twitter', link: 'https://x.com/AchyutaKalyan' },
  ];

  return (
    <section id="get-in-touch" className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 py-20 px-6 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-pink-500 font-semibold text-xs md:text-sm tracking-widest">GET IN TOUCH</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Let's Connect</h2>
        <p className="text-gray-400 text-sm md:text-base mb-12 md:mb-16 max-w-2xl">
          I'm always open to new opportunities and interesting projects. Feel free to reach out to me through any of the following channels.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      className="flex items-start gap-4 p-4 md:p-6 bg-slate-900/50 border border-slate-800/50 rounded-lg hover:border-blue-400/30 transition-all duration-300 group"
                    >
                      <div className="text-blue-400 mt-1 flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs md:text-sm font-medium mb-1">{contact.label}</p>
                        <p className="text-white font-semibold text-sm md:text-base group-hover:text-blue-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-900/50 border border-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium text-sm md:text-base mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 md:py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition-all text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium text-sm md:text-base mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 md:py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition-all text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium text-sm md:text-base mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 md:py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/30 transition-all text-sm md:text-base resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {status && <p className="text-green-400 text-sm font-medium">{status}</p>}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 md:py-4 rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>
    </section>
  );
}
