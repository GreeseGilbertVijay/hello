
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-2xl font-bold">
                <span className="text-blue-400">SA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-orange-500 font-bold text-lg leading-tight">{t('company.name').split(' ')[0].toUpperCase()}</span>
                <span className="text-orange-500 font-bold text-lg leading-tight">{t('company.name').split(' ')[1].toUpperCase()}</span>
                <span className="text-orange-300 text-xs font-medium">{t('company.tagline')}</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {t('footer.mission')}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500" />
                <span className="text-sm text-slate-300">support@samatvaawareness.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500" />
                <span className="text-sm text-slate-300">+91 9606914500 / 9789511937</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/credit-health" className="text-slate-300 hover:text-orange-400 transition-colors">{t('nav.creditHealth')}</Link></li>
              <li><Link to="/impact" className="text-slate-300 hover:text-orange-400 transition-colors">{t('nav.impact')}</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-orange-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-orange-400 transition-colors">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-500">{t('footer.contactInfo')}</h4>
            <div className="space-y-3 text-slate-300">
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-white mb-2">{t('footer.phone')}:</p>
                <p>+91 9606914500</p>
                <p>+91 9789511937</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-white mb-2">CIN:</p>
                <p>U70200TN2024PTC167249</p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-white mb-2">{t('footer.address')}:</p>
                <p>No.25, Shanthi Apartments, Flat No 3, 1st Floor, Vyasar Street, T.Nagar, Chennai - 600017</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-xs text-slate-400">
                {t('footer.rbiNote')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
