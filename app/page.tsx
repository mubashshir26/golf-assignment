"use client";
import { useState } from 'react';

export default function Home() {
  const [scores, setScores] = useState([42, 38, 35, 40, 37]); 
  const [newScore, setNewScore] = useState('');
  const subFee = 1000; 

  const addScore = () => {
    let val = parseInt(newScore);
    if (val >= 1 && val <= 45) { 
      // PRD Logic: Only latest 5 scores are retained [cite: 48]
      const updated = [val, ...scores.slice(0, 4)]; 
      setScores(updated);
      setNewScore('');
    } else {
      alert("Score 1-45 (Stableford) ke beech hona chahiye!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <header className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="text-4xl font-black text-emerald-400">GOLF CHARITY</h1>
        <p className="text-zinc-500 text-xs font-bold uppercase">Modern Impact Platform</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-zinc-900 p-8 rounded-[2rem] border border-zinc-800">
          <h2 className="text-xl font-bold mb-6">Enter Your Score</h2>
          <div className="flex gap-4 mb-8">
            <input type="number" value={newScore} onChange={(e)=>setNewScore(e.target.value)} 
              className="bg-zinc-800 p-4 rounded-2xl w-full outline-none border border-zinc-700" placeholder="1-45"/>
            <button onClick={addScore} className="bg-emerald-500 px-10 rounded-2xl font-black text-black">SAVE</button>
          </div>
          <p className="text-[10px] font-bold text-zinc-500 uppercase mb-4">Latest 5 Scores [cite: 48]</p>
          <div className="flex gap-3">
            {scores.map((s, i) => (
              <div key={i} className="bg-zinc-800 h-12 w-12 flex items-center justify-center rounded-xl border border-zinc-700 font-bold text-emerald-400">{s}</div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-[2rem] border border-zinc-800">
          <h2 className="text-xl font-bold mb-6 text-zinc-100">Charity Contribution</h2>
          <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20">
            <p className="text-zinc-500 text-xs uppercase font-bold">Minimum Contribution (10%) [cite: 77]</p>
            <p className="text-4xl font-black text-emerald-400 mt-2">₹{subFee * 0.10}</p>
            <p className="text-zinc-400 mt-4 text-sm">Partner: <span className="text-white">Green Fairways NGO</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}