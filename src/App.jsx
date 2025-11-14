import React, { useState } from 'react';
import { Shield, Lock, Eye, AlertTriangle, Users, ChevronRight } from 'lucide-react';

export default function CyberSafetyWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const threats = [
    { icon: AlertTriangle, title: 'Cyberbullying', desc: 'Harassment through digital platforms including hurtful messages, spreading rumors, and excluding others online', color: 'from-red-500 to-orange-500' },
    { icon: Eye, title: 'Privacy Risks', desc: 'Personal data exposure online through oversharing, weak privacy settings, and location tracking', color: 'from-purple-500 to-pink-500' },
    { icon: Lock, title: 'Hacking', desc: 'Unauthorized access to accounts through password breaches, keyloggers, and security vulnerabilities', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, title: 'Social Engineering', desc: 'Manipulation techniques to reveal information including impersonation, pretexting, and building false trust', color: 'from-green-500 to-teal-500' },
    { icon: Shield, title: 'Phishing', desc: 'Fake emails and messages designed to steal data by impersonating trusted sources and creating urgency', color: 'from-yellow-500 to-orange-500' },
    { icon: AlertTriangle, title: 'Malware', desc: 'Viruses and harmful software including ransomware, spyware, and trojans that damage devices or steal data', color: 'from-pink-500 to-red-500' },
    { icon: Eye, title: 'Identity Theft', desc: 'Stealing personal information like names, photos, and credentials to impersonate or commit fraud', color: 'from-indigo-500 to-purple-500' },
    { icon: Lock, title: 'Online Scams', desc: 'Fraudulent schemes including fake shopping sites, prize scams, and too-good-to-be-true offers', color: 'from-cyan-500 to-blue-500' }
  ];

  const tips = [
    'Use strong, unique passwords for each account',
    'Enable two-factor authentication everywhere',
    'Think before you click on links or download files',
    'Keep your personal information private',
    'Verify who you\'re talking to online',
    'Report suspicious activity immediately',
    'Update your apps and devices regularly',
    'Use privacy settings on social media',
    'Never share passwords with anyone, even friends',
    'Be careful about what you post - it stays online forever',
    'Avoid using public Wi-Fi for sensitive activities',
    'Don\'t accept friend requests from strangers',
    'Use a VPN when connecting to public networks',
    'Back up your important data regularly',
    'Be skeptical of messages asking for personal info',
    'Log out of accounts when using shared devices'
  ];

  const quizQuestions = [
    {
      question: "What is cyberbullying?",
      options: ["Sending friendly messages", "Harassment through digital platforms", "Playing online games", "Creating social media accounts"],
      correct: 1,
      explanation: "Cyberbullying is harassment through digital platforms including hurtful messages, spreading rumors, and excluding others online. It's a serious crime in the UAE."
    },
    {
      question: "What should you do if you receive a suspicious email asking for your password?",
      options: ["Reply with your password", "Click all the links", "Delete it and report it", "Forward it to friends"],
      correct: 2,
      explanation: "Never share your password with anyone! Suspicious emails are often phishing attempts. Always delete and report them immediately."
    },
    {
      question: "What is phishing?",
      options: ["A type of sport", "Fake messages designed to steal data", "A social media app", "A video game"],
      correct: 1,
      explanation: "Phishing involves fake emails and messages designed to steal your data by impersonating trusted sources and creating urgency. Always verify before clicking!"
    },
    {
      question: "Under UAE law, what is the maximum fine for cyberbullying?",
      options: ["AED 10,000", "AED 100,000", "AED 500,000", "AED 1,000,000"],
      correct: 2,
      explanation: "Under UAE Federal Decree-Law No. 34 of 2021, cyberbullying can lead to fines up to AED 500,000 and imprisonment. Take online harassment seriously!"
    },
    {
      question: "What is two-factor authentication?",
      options: ["Using two passwords", "An extra security layer for accounts", "A type of malware", "A social media feature"],
      correct: 1,
      explanation: "Two-factor authentication (2FA) is an extra security layer that requires not just a password, but also something you have (like a code sent to your phone). Always enable it!"
    },
    {
      question: "Is hacking someone's account illegal in the UAE?",
      options: ["Yes, it's a serious crime", "No, it's allowed", "Only on weekends", "Only for students"],
      correct: 0,
      explanation: "Yes! Accessing someone's device, account, or data without permission is illegal in the UAE. Penalties include imprisonment and fines from AED 100,000 to AED 3 million."
    },
    {
      question: "What is malware?",
      options: ["A gaming website", "Harmful software like viruses", "A photo editing app", "A search engine"],
      correct: 1,
      explanation: "Malware is harmful software including ransomware, spyware, and trojans that can damage your devices or steal your data. Keep your antivirus updated!"
    },
    {
      question: "Should you accept friend requests from strangers online?",
      options: ["Yes, always", "No, it's risky", "Only if they seem nice", "Only on Fridays"],
      correct: 1,
      explanation: "Never accept friend requests from strangers! They could be scammers, hackers, or people with bad intentions. Only connect with people you know in real life."
    },
    {
      question: "What does VPN stand for?",
      options: ["Very Private Network", "Virtual Private Network", "Video Playing Network", "Verified Personal Network"],
      correct: 1,
      explanation: "VPN stands for Virtual Private Network. It encrypts your internet connection and protects your privacy, especially when using public Wi-Fi."
    },
    {
      question: "Is spreading false information online legal in the UAE?",
      options: ["Yes, it's fine", "No, it's illegal", "Only on social media", "Only in English"],
      correct: 1,
      explanation: "Spreading false information, fake news, or rumors online is illegal in the UAE. This includes content that harms public order or damages reputations."
    },
    {
      question: "What is identity theft?",
      options: ["Borrowing someone's book", "Stealing personal information to impersonate someone", "Forgetting your password", "Sharing photos"],
      correct: 1,
      explanation: "Identity theft is stealing personal information like names, photos, and credentials to impersonate someone or commit fraud. It's a serious crime with severe penalties in the UAE."
    },
    {
      question: "Why should you use strong passwords?",
      options: ["To remember them easily", "To protect accounts from hackers", "To impress friends", "It doesn't matter"],
      correct: 1,
      explanation: "Strong, unique passwords protect your accounts from hackers who use automated tools to guess weak passwords. Use a mix of letters, numbers, and symbols!"
    },
    {
      question: "What is social engineering in cybersecurity?",
      options: ["Building social media apps", "Manipulation to reveal information", "Engineering software", "Making friends online"],
      correct: 1,
      explanation: "Social engineering is manipulation techniques used to trick people into revealing information, including impersonation, pretexting, and building false trust. Always verify who you're talking to!"
    },
    {
      question: "Should you share someone's private photos without their permission in the UAE?",
      options: ["Yes, if they're funny", "No, it's illegal and violates privacy laws", "Only with friends", "Only on weekends"],
      correct: 1,
      explanation: "The UAE has strict laws protecting personal data. Sharing someone's private information, photos, or videos without consent is illegal and punishable by law. Always respect privacy!"
    },
    {
      question: "What should you do before clicking on a link?",
      options: ["Click immediately", "Think and verify if it's safe", "Share it with everyone", "Ignore all links"],
      correct: 1,
      explanation: "Always think before you click! Verify the source, check if the URL looks legitimate, and be cautious of links in unexpected messages. They could be phishing attempts or malware."
    }
  ];

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex
    });
  };

  const submitQuiz = () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <span className="text-blue-400 font-semibold">TechnoVista 2025 • WebWeavers Challenge</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          Cyber Safety for Teens
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-200 mb-4">
          Building a Secure Digital Future for UAE 2030
        </p>
        
        <p className="text-lg text-slate-300 mb-8">
          India International School Sharjah
        </p>
        
        <p className="text-xl text-blue-300 mb-8 font-semibold">
          Created by: K. Harshan
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => changePage('threats')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105 flex items-center justify-center"
          >
            Explore Threats <ChevronRight className="ml-2" />
          </button>
          <button 
            onClick={() => changePage('tips')}
            className="bg-slate-800 border border-blue-500/30 px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition"
          >
            Safety Tips
          </button>
        </div>
      </div>
    </div>
  );

  const ThreatsPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Know the <span className="text-blue-400">Threats</span>
          </h2>
          <p className="text-xl text-slate-300">Understanding risks is the first step to staying safe online</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((threat, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <div className={`w-16 h-16 bg-gradient-to-br ${threat.color} rounded-lg flex items-center justify-center mb-4`}>
                <threat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{threat.title}</h3>
              <p className="text-lg text-slate-400">{threat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TipsPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">16 Essential</span> Safety Tips
          </h2>
          <p className="text-xl text-slate-300">Your digital armor for staying safe online</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-lg p-6 flex items-start space-x-4 hover:border-cyan-400/50 transition transform hover:translate-x-2">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-lg">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const VisionPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">UAE Cybersecurity</span> Laws & Rules
          </h2>
          <p className="text-xl text-slate-300">Understanding legal protections and responsibilities</p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg p-3 flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Cyberbullying is a Crime</h3>
                <p className="text-lg text-slate-300">Under UAE Federal Decree-Law No. 34 of 2021, cyberbullying and online harassment can lead to fines up to AED 500,000 and imprisonment. The law protects individuals from defamation, threats, and harassment online.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-3 flex-shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Hacking & Unauthorized Access</h3>
                <p className="text-lg text-slate-300">Accessing someone's device, account, or data without permission is illegal. Penalties include imprisonment and fines ranging from AED 100,000 to AED 3 million depending on severity.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-3 flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Privacy & Data Protection</h3>
                <p className="text-lg text-slate-300">The UAE has strict laws protecting personal data. Sharing someone's private information, photos, or videos without consent is illegal and punishable by law. Always respect others' privacy online.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-lg p-3 flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Identity Theft & Fraud</h3>
                <p className="text-lg text-slate-300">Creating fake accounts, impersonating others, or using someone's identity for fraud is a serious crime. Offenders face severe penalties including imprisonment and heavy fines.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-3 flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Spreading False Information</h3>
                <p className="text-lg text-slate-300">Sharing fake news, rumors, or misleading information online is illegal in the UAE. This includes spreading content that harms public order or damages reputations.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/40 rounded-2xl p-8 mt-12">
            <h3 className="text-3xl font-bold text-center text-cyan-400 mb-4">Our Responsibility</h3>
            <p className="text-xl text-center text-slate-200 leading-relaxed">
              As digital citizens of the UAE, we have a responsibility to use technology ethically and legally. Following these laws keeps us safe and helps build a secure digital future for UAE 2030.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const QuizPage = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Test Your</span> Knowledge
          </h2>
          <p className="text-xl text-slate-300">How well do you know cyber safety?</p>
        </div>

        {quizSubmitted ? (
          <div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 text-center mb-8">
              <Shield className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-4xl font-bold mb-4">Quiz Complete!</h3>
              <p className="text-6xl font-bold text-cyan-400 mb-4">{quizScore}/15</p>
              <p className="text-2xl text-slate-300 mb-8">
                {quizScore >= 13 ? "Outstanding! You're a cyber safety expert! 🏆" :
                 quizScore >= 10 ? "Great job! You know your stuff! 🌟" :
                 quizScore >= 7 ? "Good effort! Keep learning! 💪" :
                 "Keep studying! You'll get better! 📚"}
              </p>
              <button 
                onClick={resetQuiz}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
              >
                Retake Quiz
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center text-cyan-400 mb-8">Review Your Answers</h3>
              {quizQuestions.map((q, qIndex) => {
                const userAnswer = quizAnswers[qIndex];
                const isCorrect = userAnswer === q.correct;
                
                return (
                  <div key={qIndex} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                    isCorrect ? 'border-green-500/50' : 'border-red-500/50'
                  }`}>
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`rounded-full p-2 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                        {isCorrect ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-cyan-400 mb-2">
                          Question {qIndex + 1}: {q.question}
                        </h4>
                        
                        {!isCorrect && (
                          <div className="mb-3">
                            <p className="text-red-400 mb-1">Your answer: {q.options[userAnswer]}</p>
                            <p className="text-green-400">Correct answer: {q.options[q.correct]}</p>
                          </div>
                        )}
                        
                        {isCorrect && (
                          <p className="text-green-400 mb-3">Correct! ✓</p>
                        )}
                        
                        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mt-3">
                          <p className="text-slate-200 leading-relaxed">
                            <span className="font-bold text-cyan-400">Explanation: </span>
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {quizQuestions.map((q, qIndex) => (
              <div key={qIndex} className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  Question {qIndex + 1}: {q.question}
                </h3>
                <div className="space-y-3">
                  {q.options.map((option, oIndex) => (
                    <button
                      key={oIndex}
                      onClick={() => handleQuizAnswer(qIndex, oIndex)}
                      className={`w-full text-left p-4 rounded-lg border transition ${
                        quizAnswers[qIndex] === oIndex
                          ? 'bg-blue-600 border-blue-400 text-white'
                          : 'bg-slate-700/50 border-slate-600 hover:border-blue-400'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="text-center pt-8">
              <button 
                onClick={submitQuiz}
                disabled={Object.keys(quizAnswers).length !== 15}
                className={`px-12 py-4 rounded-lg font-bold text-lg transition transform ${
                  Object.keys(quizAnswers).length === 15
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105'
                    : 'bg-slate-700 cursor-not-allowed opacity-50'
                }`}
              >
                Submit Quiz
              </button>
              {Object.keys(quizAnswers).length !== 15 && (
                <p className="text-slate-400 mt-4">Answer all questions to submit</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                CyberSecurity
              </span>
            </div>
            
            <div className="flex space-x-8">
              <button 
                onClick={() => changePage('home')} 
                className={`hover:text-blue-400 transition ${currentPage === 'home' ? 'text-blue-400' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => changePage('threats')} 
                className={`hover:text-blue-400 transition ${currentPage === 'threats' ? 'text-blue-400' : ''}`}
              >
                Threats
              </button>
              <button 
                onClick={() => changePage('tips')} 
                className={`hover:text-blue-400 transition ${currentPage === 'tips' ? 'text-blue-400' : ''}`}
              >
                Safety Tips
              </button>
              <button 
                onClick={() => changePage('vision')} 
                className={`hover:text-blue-400 transition ${currentPage === 'vision' ? 'text-blue-400' : ''}`}
              >
                UAE Laws
              </button>
              <button 
                onClick={() => changePage('quiz')} 
                className={`hover:text-blue-400 transition ${currentPage === 'quiz' ? 'text-blue-400' : ''}`}
              >
                Quiz
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'threats' && <ThreatsPage />}
        {currentPage === 'tips' && <TipsPage />}
        {currentPage === 'vision' && <VisionPage />}
        {currentPage === 'quiz' && <QuizPage />}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-semibold">CyberSecurity UAE 2030</span>
          </div>
          <p className="text-slate-400 mb-2">TechnoVista 2025 • WebWeavers Challenge</p>
          <p className="text-slate-500">India International School Sharjah • Created by K. Harshan</p>
          <p className="text-blue-400 mt-4 font-semibold">#TechnoVista2025 • My Website. My Vision for UAE 2030.</p>
        </div>
      </footer>
    </div>
  );
}

