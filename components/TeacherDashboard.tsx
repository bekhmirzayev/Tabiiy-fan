import React, { useState, useEffect } from 'react';
import { Lock, User, Eye, X, BarChart2, Calendar, Search, RefreshCw, LogOut, Loader2 } from 'lucide-react';

// SAME URL as Quiz.tsx
const GOOGLE_SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbx_rdLPcOx55hUQtcgwES2-J4QF5fifqBqVJXMRBOaYnauC-FLkxPE7hvMxo637ZakE/exec";

interface StudentResult {
  timestamp: string;
  studentName: string;
  topicTitle: string;
  score: number;
  totalQuestions: number;
  detailedReport: string;
}

interface TeacherDashboardProps {
  onBack: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [results, setResults] = useState<StudentResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedResult, setSelectedResult] = useState<StudentResult | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // AUTHENTICATION
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'najotteacher') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Parol noto'g'ri!");
      setPassword('');
    }
  };

  // DATA FETCHING
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL);
      const data = await response.json();
      if (Array.isArray(data)) {
        setResults(data);
      } else {
        console.error("Data format error:", data);
        alert("Ma'lumotlarni yuklashda xatolik.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Internet bilan aloqa yo'q yoki Script URL noto'g'ri.");
    } finally {
      setLoading(false);
    }
  };

  // PARSING REPORT STRING
  // Format: "1. Question...: ✅ | 2. Question...: ❌ (Tanladi: Option)"
  const parseReport = (reportStr: string) => {
    if (!reportStr || reportStr === "N/A") return [];
    
    // Split by | allowing for optional spaces around it
    return reportStr.split(/\|/).map((item, idx) => {
      const trimmed = item.trim();
      if (!trimmed) return null;

      const isCorrect = trimmed.includes('✅');
      // Use first colon to separate
      const colonIndex = trimmed.indexOf(':');
      
      let questionText = `Savol ${idx + 1}`;
      let statusText = trimmed;
      
      if (colonIndex !== -1) {
        questionText = trimmed.substring(0, colonIndex).trim();
        statusText = trimmed.substring(colonIndex + 1).trim();
      }

      return {
        question: questionText,
        status: statusText,
        isCorrect
      };
    }).filter(Boolean) as { question: string, status: string, isCorrect: boolean }[];
  };

  // RENDER LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 px-4">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">O'qituvchi Kabineti</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Kirish uchun parolni kiriting</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-center text-xl tracking-wider p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Parol..."
              autoFocus
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Chiqish
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-transform active:scale-95 shadow-lg shadow-blue-500/30"
              >
                Kirish
              </button>
            </div>
          </form>
          <p className="text-center text-xs text-slate-400 mt-6">Demo Parol: najotteacher</p>
        </div>
      </div>
    );
  }

  // CALCULATE STATS
  const totalStudents = results.length;
  const avgScore = results.length > 0 
    ? (results.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions), 0) / results.length * 100).toFixed(1) 
    : 0;
  
  const filteredResults = results.filter(r => 
    r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.topicTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-8 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <BarChart2 className="text-blue-600 dark:text-blue-400" />
              Natijalar Tahlili
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">O'quvchilarning o'zlashtirish ko'rsatkichlari</p>
          </div>
          <div className="flex items-center gap-3">
             <button 
              onClick={fetchData} 
              disabled={loading}
              className={`p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:border-blue-300 transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              title="Yangilash"
            >
              <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
            </button>
            <button 
              onClick={() => { setIsAuthenticated(false); setPassword(''); }} 
              className="flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors font-medium text-sm"
            >
              <LogOut size={16} className="mr-2" /> Chiqish
            </button>
            <button 
              onClick={onBack} 
              className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 transition-colors font-medium text-sm"
            >
              Bosh sahifa
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Jami Testlar</div>
            <div className="text-4xl font-extrabold text-slate-900 dark:text-white">{totalStudents}</div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">O'rtacha Natija</div>
            <div className={`text-4xl font-extrabold ${Number(avgScore) > 80 ? 'text-green-500' : Number(avgScore) > 50 ? 'text-orange-500' : 'text-red-500'}`}>
              {avgScore}%
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Eng faol mavzu</div>
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400 truncate">
              {results.length > 0 ? results[0].topicTitle : "-"}
            </div>
          </div>
        </div>

        {/* Search & Table */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
            <Search className="text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Ism yoki mavzu bo'yicha qidirish..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold">Sana</th>
                  <th className="p-4 font-semibold">O'quvchi</th>
                  <th className="p-4 font-semibold">Mavzu</th>
                  <th className="p-4 font-semibold text-center">Natija</th>
                  <th className="p-4 font-semibold text-center">Batafsil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-12">
                      <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400 mb-2" />
                        <p>Ma'lumotlar yuklanmoqda...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredResults.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500">Ma'lumot topilmadi</td>
                  </tr>
                ) : (
                  filteredResults.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <td className="p-4 text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {new Date(row.timestamp).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="p-4 font-medium text-slate-800 dark:text-slate-200">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                            {row.studentName.charAt(0)}
                          </div>
                          {row.studentName}
                        </div>
                      </td>
                      <td className="p-4 text-slate-600 dark:text-slate-300 text-sm max-w-[200px] truncate">{row.topicTitle}</td>
                      <td className="p-4 text-center">
                        <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          (row.score / row.totalQuestions) >= 0.8 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                          (row.score / row.totalQuestions) >= 0.5 ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' : 
                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {row.score} / {row.totalQuestions}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <button 
                          onClick={() => setSelectedResult(row)}
                          className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* DETAILED VIEW MODAL */}
      {selectedResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{selectedResult.studentName}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{selectedResult.topicTitle}</p>
              </div>
              <button 
                onClick={() => setSelectedResult(null)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4">
              {(() => {
                const report = selectedResult.detailedReport;
                const parsed = parseReport(report);
                
                if (parsed.length > 0) {
                  return parsed.map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${item.isCorrect ? 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/10' : 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-900/10'}`}>
                      <div className="flex justify-between items-start gap-4">
                        <span className="font-medium text-slate-700 dark:text-slate-200 text-sm sm:text-base">{item.question}</span>
                        <span className="text-lg shrink-0">{item.isCorrect ? '✅' : '❌'}</span>
                      </div>
                      {!item.isCorrect && (
                        <div className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium bg-white dark:bg-slate-900/50 p-2 rounded-lg border border-red-100 dark:border-red-900/30">
                          {item.status.replace('❌', '').replace('(', '').replace(')', '').trim()}
                        </div>
                      )}
                    </div>
                  ));
                } else if (report && report !== "N/A") {
                  // Fallback for raw data if parsing failed but data exists
                  return (
                     <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                        <p className="text-xs text-slate-400 mb-2">Qabul qilingan ma'lumot (parsing failed):</p>
                        <code className="text-sm text-slate-700 dark:text-slate-300 break-words">{report}</code>
                     </div>
                  );
                } else {
                  return <p className="text-center text-slate-500">Batafsil ma'lumot mavjud emas (Eski ma'lumot bo'lishi mumkin).</p>;
                }
              })()}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
              <button 
                onClick={() => setSelectedResult(null)}
                className="px-6 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-600"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};