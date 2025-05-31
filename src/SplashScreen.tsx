// filepath: d:\siteperso\src\SplashScreen.tsx
import { useEffect } from 'react';

interface Props {
  onFinish: () => void;
  duration?: number;
}

export default function SplashScreen({ onFinish, duration = 2000 }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-base-100 flex flex-col items-center justify-center z-50">
      {/* Logo ou titre */}
      <h1 className="text-4xl font-bold mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>
        DELMA
      </h1>
      {/* Spinner CSS Tailwind */}
      <div className="w-16 h-16 border-5 border-t-4 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
}