import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaDiscord, href: 'https://discord.com', label: 'Discord' },
  ];

  const features = [
    'Task Management',
    'Team Collaboration',
    'Progress Tracking',
    'Priority Settings',
    'Due Date Reminders',
    'Custom Categories',
  ];

  return (
    <footer className="glass-effect mt-auto border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">TaskMaster</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Streamline your productivity with our intuitive task management platform. Stay organized, focused, and accomplish more.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Features</h3>
            <ul className="grid grid-cols-1 gap-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="h-4 w-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Have questions? We're here to help!
              </p>
              <a 
                href="mailto:support@taskmaster.com"
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@taskmaster.com
              </a>
              <div className="pt-4">
                <button className="btn btn-primary w-full">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {year} TaskMaster. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}