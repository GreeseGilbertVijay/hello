import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Shield, TrendingUp, Linkedin, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t,currentLanguage } = useLanguage();

  // Get advantages with fallback to empty array
  const advantages = Array.isArray(t('about.whyChoose.advantages')) ? t('about.whyChoose.advantages') : [];

  return (
    <div className="min-h-screen bg-gray-50 font-raleway" lang={currentLanguage}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        @media (max-width: 1920px) {
          h1 { font-size: 56px; }
          h2 { font-size: 48px; }
          h3 { font-size: 36px; }
          h4 { font-size: 28px; }
          h5 { font-size: 24px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h5 { font-size: 22px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          h3 { font-size: 32px; }
          h4 { font-size: 28px; }
          h5 { font-size: 20px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h4 { font-size: 22px; }
          [lang]:not([lang="en"]) h5 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 28px; }
          h5 { font-size: 18px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 20px; }
          h5 { font-size: 20px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 20px; }
          [lang]:not([lang="en"]) h3 { font-size: 18px; }
          [lang]:not([lang="en"]) h4 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-800 to-blue-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-bold mb-8 leading-tight animate-slide-in-right">
                {t('about.hero.title')}
              </h1>
              <div className="space-y-4">
                <h5 className="font-bold text-orange-400">
                {t('about.hero.subtitle1')} 
                </h5>
              </div>
              <p className="text-orange-100 mt-8 leading-relaxed animate-fade-in stagger-5">
                {t('about.hero.description')}
              </p>
            </div>
            <div className="lg:flex lg:justify-end animate-scale-in">
              <img alt="Debt Counselling Session" className="w-full max-w-lg rounded-2xl shadow-2xl" src="/lovable-uploads/ab1e075d-5cb7-4bb7-8eb3-58065d670483.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto p-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className=" font-bold text-gray-900 mb-6">
              {t('about.leadership.title')}
            </h2>
            <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed">
              {t('about.leadership.description1')}
            </p>
            <p className="text-orange-600 pl-2 pr-2 font-semibold mt-6">
              {t('about.leadership.description2')}
            </p>
            <p className="text-gray-700 mb-6">
              {t('about.leadership.description3')}
            </p>
            <p className="text-gray-700">
              {t('about.leadership.description4')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
        <div className="pt-16 pb-12 pl-2 pr-2 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl mb-16 animate-scale-in mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center animate-slide-in-right">
                <img alt="Credit Counselling Session" className="w-full max-w-lg rounded-2xl shadow-xl" src="/lovable-uploads/9dd940b1-1ee3-42df-afda-f23fd6651851.png" />
              </div>
              <div className="animate-fade-in text-center lg:text-left">
                <h3 className="font-bold text-gray-900 mb-6">
                  {t('about.process.title')}
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="animate-fade-in stagger-1">{t('about.process.step1')}</p>
                  <p className="animate-fade-in stagger-2">{t('about.process.step2')}</p>
                  <p className="animate-fade-in stagger-3">{t('about.process.step3')}</p>
                  <p className="animate-fade-in stagger-4">{t('about.process.step4')}</p>
                  <p className="text-blue-600 font-semibold animate-fade-in stagger-5">{t('about.process.step5')}</p>
                </div>
              </div>
            </div>
        </div>
   
      {/* Why Choose Samatva Section */}
      <section className="pt-16 pb-12 bg-slate-900 w-full">
        <div className="max-w-7xl p-4 mx-auto ">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-bold text-white mb-6">
              {t('about.whyChoose.title')} 
            </h2>
            <p className="text-gray-300 mx-auto">
              {t('about.whyChoose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage: any, index: number) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-6">
                  {index === 0 && (
                    <div className="w-16 h-16 mx-auto bg-green-500 rounded-lg flex items-center justify-center">
                      <Check className="text-white" size={32} />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-16 h-16 mx-auto bg-blue-500 rounded-lg flex items-center justify-center">
                      <Shield className="text-white" size={32} />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-16 h-16 mx-auto bg-purple-500 rounded-lg flex items-center justify-center">
                      <Users className="text-white" size={32} />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="w-16 h-16 mx-auto bg-orange-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={32} />
                    </div>
                  )}
                </div>
                <h5 className="font-bold text-white mb-4">
                  {advantage.title}
                </h5>
                <p className="text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-bold text-gray-900 mb-4">
              {t('about.management.title')}
            </h2>
            <p className="text-2xl text-gray-600">{t('about.management.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Thallam Sreekumar Card */}
            <Card className="bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl animate-scale-in">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <Avatar className="w-24 h-24 flex-shrink-0">
                    <AvatarImage src="/lovable-uploads/ab813c16-4fd4-44c0-9aeb-9bb826c497fe.png" alt={t('about.management.thallam.name')} />
                    <AvatarFallback className="bg-gradient-to-br from-gray-400 to-gray-600 text-white text-xl font-bold">
                      TS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-500">{t('about.management.thallam.name')}</h3>
                      <a href="https://www.linkedin.com/in/thallam-sreekumar-6421a6a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-blue-600 cursor-pointer hover:text-blue-800 mt-2 md:mt-0" size={24} />
                      </a>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{t('about.management.thallam.position')}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {t('about.management.thallam.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Venkatramanan TM Card */}
            <Card className="bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl animate-scale-in stagger-1">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <Avatar className="w-24 h-24 flex-shrink-0">
                    <AvatarImage src="/lovable-uploads/0ae1de65-54ad-4d58-a130-a5e80efa8ba7.png" alt={t('about.management.venkat.name')} />
                    <AvatarFallback className="bg-gradient-to-br from-gray-400 to-gray-600 text-white text-xl font-bold">
                      VT
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-500">{t('about.management.venkat.name')}</h3>
                      <a href="https://www.linkedin.com/in/venkatramanan-murthy-1434687/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-blue-600 cursor-pointer hover:text-blue-800 mt-2 md:mt-0" size={24} />
                      </a>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{t('about.management.venkat.position')}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {t('about.management.venkat.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </div>
            
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl animate-scale-in">
              <h4 className="text-2xl font-bold text-orange-500 mb-6">{t('about.contact.title')}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <a href="tel:+91 63820 97967" className="text-lg hover:text-orange-500 transition-colors">+91 63820 97967</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <a href="mailto:support@samatvaawareness.in" className="text-lg hover:text-orange-500 transition-colors">support@samatvaawareness.in</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>CIN: U70200TN2024PTC167249</span>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm leading-relaxed">
                    {t('about.contact.address')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
