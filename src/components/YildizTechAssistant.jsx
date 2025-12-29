import React, { useEffect, useMemo, useRef, useState } from 'react';

const API_KEY = 'AIzaSyCNTuv9jZ9Xr7vOn93HmlnaPmu5Qk1mOj4';

const SYSTEM_PROMPT = `Sen YildizTech Asistanısın.
Amaç: ziyaretçiyi hızlıca anlayıp, doğru hizmete yönlendirmek ve iletişime geçirmek.
Dilin: Türkçe.
Kısa, net, profesyonel cevap ver.
Gerektiğinde 1-2 net soru sor.
Asla uydurma fiyat/teslim süresi verme; belirsizse keşif görüşmesi öner.
İletişim için: e-posta info.yildiztech@gmail.com ve WhatsApp yönlendirmesi önerebilirsin.`;

const MODEL = 'gemini-1.5-flash';

function buildRequestBody(history) {
  const contents = [];

  contents.push({
    role: 'user',
    parts: [{ text: SYSTEM_PROMPT }]
  });

  for (const msg of history) {
    contents.push({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    });
  }

  return {
    contents,
    generationConfig: {
      temperature: 0.4,
      topP: 0.9,
      maxOutputTokens: 512
    }
  };
}

async function callGemini(history) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildRequestBody(history))
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Gemini hata: ${res.status} ${text}`);
  }

  const data = await res.json();
  const candidate = data?.candidates?.[0];
  const parts = candidate?.content?.parts;
  const out = Array.isArray(parts) ? parts.map(p => p?.text).filter(Boolean).join('') : '';
  return out || 'Şu an yanıt üretilemedi. Lütfen tekrar deneyin.';
}

const YildizTechAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const [messages, setMessages] = useState(() => ([
    { role: 'assistant', text: 'Merhaba! Ben YildizTech Asistan. Hangi konuda yardımcı olabilirim?' }
  ]));

  const panelRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  const canSend = useMemo(() => input.trim().length > 0 && !busy, [input, busy]);

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;

    setError('');
    setBusy(true);
    setInput('');

    const nextMessages = [...messages, { role: 'user', text }];
    setMessages(nextMessages);

    try {
      const reply = await callGemini(nextMessages);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (e) {
      setError('Asistan şu an yanıt veremedi. Lütfen tekrar deneyin.');
    } finally {
      setBusy(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-4 left-4 z-50 px-4 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-white text-sm font-medium border border-white/10"
        aria-label="YildizTech Asistan"
      >
        Asistan
      </button>

      {open && (
        <div
          ref={panelRef}
          className="fixed bottom-20 left-4 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur-xl"
          role="dialog"
          aria-label="YildizTech Asistan Sohbet"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">YildizTech Asistan</p>
              <p className="text-[11px] text-gray-400">Hızlı soru-cevap</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-200"
              aria-label="Kapat"
            >
              Kapat
            </button>
          </div>

          <div ref={listRef} className="max-h-[50vh] overflow-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] rounded-2xl px-3 py-2 text-sm bg-brand-500 text-white'
                      : 'max-w-[85%] rounded-2xl px-3 py-2 text-sm bg-white/5 border border-white/10 text-gray-100'
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-3 py-2 text-sm bg-white/5 border border-white/10 text-gray-300">
                  Yazıyor…
                </div>
              </div>
            )}
            {error && (
              <div className="text-xs text-red-400">{error}</div>
            )}
          </div>

          <div className="px-4 py-3 border-t border-white/10">
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Mesaj yaz…"
                className="flex-1 resize-none px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              />
              <button
                type="button"
                onClick={send}
                disabled={!canSend}
                className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white text-sm font-medium disabled:opacity-60"
              >
                Gönder
              </button>
            </div>
            <p className="mt-2 text-[11px] text-gray-500">Not: Bu sohbet client-side çalışır; paylaşılan bilgiler herkese açık ağlarda iletilebilir.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default YildizTechAssistant;
