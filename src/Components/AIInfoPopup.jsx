import React, { useState, useEffect } from "react";
import { getHerbDescription } from "../utils/gemini";

export default function AIInfoPopup({ plantName, onClose }) {
  const [aiInfo, setAiInfo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAIInfo = async () => {
      setLoading(true);
      try {
        const text = await getHerbDescription(plantName);
        if (!text) {
          setAiInfo("❌ No information found. Try again later.");
        } else
        setAiInfo(text);
      } catch (err) {
        console.error("AI Error:", err);
        setAiInfo("❌ Failed to fetch AI info. Try again later.");
      }
      setLoading(false);
    };
    fetchAIInfo();
  }, [plantName]);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed w-11/12 max-w-5xl h-5/6 bg-emerald-100 rounded-xl shadow-2xl overflow-y-auto p-6 transform transition-transform duration-300 animate-slideUp">
          
          <button
            className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold mb-2">{plantName} - AI Herb Info</h2>

          {loading ? (
            <div className="flex justify-center items-center h-full text-2xl">
              <span className=" text-emerald-400">AI is thinking...</span>
            </div>
          ) : (
            <div className="space-y-4 text-gray-800 text-base">
              {aiInfo.split("\n").map((line, idx) => (
                  
                line.trim() ? <h3 key={idx}>{line}</h3> : null

              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}




