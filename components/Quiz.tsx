import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, RefreshCw, Loader2, XCircle, Check } from 'lucide-react';
import { QuizQuestion } from '../types';

// Placeholder URL - User will replace this with their deployed script URL
const GOOGLE_SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbx_rdLPcOx55hUQtcgwES2-J4QF5fifqBqVJXMRBOaYnauC-FLkxPE7hvMxo637ZakE/exec"; 

interface QuizProps {
  questions: QuizQuestion[];
  topicTitle: string;
}

export const Quiz: React.FC<QuizProps> = ({ questions, topicTitle }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [score, setScore] = useState(0);

  // Reset quiz state when questions prop changes (new topic selected)
  useEffect(() => {
    setAnswers({});
    setStatus('idle');
    setScore(0);
  }, [questions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (status === 'submitted') return; // Prevent changing answers after submission
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const submitToGoogleSheets = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Object.keys(answers).length < questions.length || !formData.firstName || !formData.lastName) {
      alert("Iltimos, ism-familiyangizni kiriting va barcha savollarga javob bering!");
      return;
    }

    setStatus('submitting');

    let calculatedScore = 0;
    
    // 1. Calculate Score and Generate Detailed Report
    const reportParts = questions.map((q, idx) => {
      const isCorrect = answers[q.id] === q.correctAnswer;
      if (isCorrect) calculatedScore++;
      
      const userOptionText = q.options[answers[q.id]];
      // Truncate question text for brevity in report
      const shortQ = q.question.length > 20 ? q.question.substring(0, 20) + "..." : q.question;
      
      // Removed spaces around separator to be safer
      return `${idx + 1}. ${shortQ}: ${isCorrect ? '✅' : `❌ (Tanladi: ${userOptionText})`}`;
    });

    setScore(calculatedScore);

    const payload = {
      timestamp: new Date().toISOString(),
      studentName: `${formData.firstName} ${formData.lastName}`,
      topicTitle: topicTitle,
      score: calculatedScore,
      totalQuestions: questions.length,
      detailedReport: reportParts.join('|') // Changed separator to just pipe
    };

    try {
      if (GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_APPS_SCRIPT")) {
        console.warn("Google Script URL not set. Simulating success.");
        await new Promise(resolve => setTimeout(resolve, 1500)); 
      } else {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(payload)
        });
      }
      setStatus('submitted');
      // Scroll to top to see results
      document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error("Error submitting quiz:", error);
      setStatus('error');
      alert("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    }
  };

  const resetQuiz = () => {
    setStatus('idle');
    setAnswers({});
    setScore(0);
    // Keep name filled in for convenience
  };

  const isSubmitted = status === 'submitted';

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-800 transition-colors duration-300" id="quiz-section">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Sinov</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            {isSubmitted ? "Natijalar tahlili" : "O'rganganlaringizni tekshiring"}
          </h2>
        </div>

        {/* Success Card shown at top when submitted */}
        {isSubmitted && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-3xl p-8 mb-10 text-center animate-in zoom-in duration-300">
             <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full text-green-600 dark:text-green-200 mb-4">
               <CheckCircle size={32} />
             </div>
             <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Barakalla, {formData.firstName}!</h3>
             <div className="mt-4 text-5xl font-extrabold text-slate-900 dark:text-white">
               <span className={score === questions.length ? "text-green-600 dark:text-green-400" : score > questions.length / 2 ? "text-blue-600 dark:text-blue-400" : "text-orange-500"}>
                 {score}
               </span> 
               <span className="text-2xl text-slate-400"> / {questions.length}</span>
             </div>
             <p className="text-slate-600 dark:text-slate-400 mt-2">Quyida xatolaringizni ko'rib chiqing.</p>
          </div>
        )}

        <form onSubmit={submitToGoogleSheets} className="space-y-8">
          {/* Personal Info - Disable after submit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Ismingiz</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                disabled={status !== 'idle' && status !== 'error'}
                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-70 disabled:bg-slate-100 dark:disabled:bg-slate-700"
                placeholder="Ali"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Familiyangiz</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                disabled={status !== 'idle' && status !== 'error'}
                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-70 disabled:bg-slate-100 dark:disabled:bg-slate-700"
                placeholder="Valiyev"
              />
            </div>
          </div>

          {/* Questions Loop */}
          <div className="space-y-6">
            {questions.map((q, qIdx) => {
              // Logic for Review Mode styling
              const userAnswer = answers[q.id];
              const isCorrectAnswer = userAnswer === q.correctAnswer;
              
              let cardBorderClass = "border-slate-200 dark:border-slate-700";
              if (isSubmitted) {
                cardBorderClass = isCorrectAnswer ? "border-green-500 bg-green-50/30 dark:bg-green-900/20" : "border-red-300 dark:border-red-800 bg-red-50/30 dark:bg-red-900/20";
              }

              return (
                <div key={q.id} className={`border rounded-2xl p-6 transition-all bg-white dark:bg-slate-800 ${cardBorderClass} ${!isSubmitted && 'hover:shadow-md dark:hover:border-blue-500'}`}>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-start">
                    <span className="mr-2 text-blue-500 dark:text-blue-400 min-w-[24px]">{qIdx + 1}.</span> 
                    <span className="flex-1">{q.question}</span>
                    {isSubmitted && (
                       isCorrectAnswer 
                        ? <CheckCircle className="text-green-500 dark:text-green-400 ml-2 shrink-0" /> 
                        : <XCircle className="text-red-500 dark:text-red-400 ml-2 shrink-0" />
                    )}
                  </h3>
                  
                  <div className="space-y-2">
                    {q.options.map((option, oIdx) => {
                      // Detailed logic for option styling in Review Mode
                      const isSelected = answers[q.id] === oIdx;
                      const isActuallyCorrect = q.correctAnswer === oIdx;
                      
                      let optionClass = "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300"; // Default
                      
                      if (isSubmitted) {
                        if (isActuallyCorrect) {
                          // Always highlight the correct answer in Green
                          optionClass = "bg-green-100 dark:bg-green-900/40 border-green-500 text-green-800 dark:text-green-300 font-bold"; 
                        } else if (isSelected && !isActuallyCorrect) {
                          // Highlight the wrong selection in Red
                          optionClass = "bg-red-100 dark:bg-red-900/40 border-red-500 text-red-800 dark:text-red-300";
                        } else {
                          // Dim the rest
                          optionClass = "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500 opacity-70";
                        }
                      } else if (isSelected) {
                         // Normal Selection State
                         optionClass = "bg-blue-50 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300";
                      }

                      return (
                        <label 
                          key={oIdx} 
                          className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${optionClass}`}
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={oIdx}
                            checked={isSelected}
                            onChange={() => handleOptionSelect(q.id, oIdx)}
                            disabled={isSubmitted || status === 'submitting'}
                            className="h-4 w-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500 border-gray-300 dark:border-gray-600 mr-3 disabled:cursor-not-allowed bg-transparent"
                          />
                          <span className="flex-1">{option}</span>
                          {isSubmitted && isActuallyCorrect && <Check size={16} className="text-green-600 dark:text-green-400 ml-2" />}
                        </label>
                      );
                    })}
                  </div>
                  
                  {isSubmitted && !isCorrectAnswer && (
                    <div className="mt-3 text-sm text-green-700 dark:text-green-300 font-medium bg-green-100 dark:bg-green-900/30 inline-block px-3 py-1 rounded-lg">
                      To'g'ri javob: {q.options[q.correctAnswer]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            {!isSubmitted ? (
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Yuborilmoqda...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Javoblarni yuborish
                  </>
                )}
              </button>
            ) : (
              <button 
                type="button"
                onClick={resetQuiz}
                className="w-full flex justify-center items-center py-4 px-6 border border-blue-200 dark:border-blue-700 rounded-2xl shadow-sm text-lg font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <RefreshCw size={20} className="mr-2"/> Qayta topshirish
              </button>
            )}

            {!isSubmitted && (
              <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                <AlertCircle size={12} /> Natijalar o'qituvchiga yuboriladi
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};