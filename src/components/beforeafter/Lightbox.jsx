import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-[rgba(4,16,22,0.92)] backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X size={22} />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[1000px] w-full flex flex-col gap-4"
      >
        <img
          src={item.image}
          alt={`Before and after tattoo removal — ${item.title}`}
          className="w-full h-auto max-h-[80vh] object-contain rounded-2xl border border-white/15"
        />
        <div className="flex flex-col gap-1 text-center">
          <h3 className="m-0 text-xl sm:text-2xl font-extrabold text-white tracking-[-0.01em]">{item.title}</h3>
          <p className="m-0 text-sm text-dark-muted">Full-spectrum laser · {item.sessions} sessions · {item.category}</p>
        </div>
      </div>
    </div>
  );
}