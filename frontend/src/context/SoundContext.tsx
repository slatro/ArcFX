import React, { createContext, useContext, useCallback, useRef } from 'react';

type SoundType = 'success' | 'click' | 'error' | 'processing' | 'points';

interface SoundContextType {
  play: (type: SoundType) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const SOUND_URLS: Record<SoundType, string> = {
  success: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3', // Coin Clink
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',   // Interface Click
  error: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',   // Error/Thud
  processing: 'https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3', // Subtle hum/process
  points: 'https://assets.mixkit.co/active_storage/sfx/2436/2436-preview.mp3'    // Level up/Point gain
};

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRefs = useRef<Partial<Record<SoundType, HTMLAudioElement>>>({});

  const play = useCallback((type: SoundType) => {
    try {
      // Lazy load audio
      if (!audioRefs.current[type]) {
        audioRefs.current[type] = new Audio(SOUND_URLS[type]);
        audioRefs.current[type]!.volume = type === 'click' ? 0.1 : 0.25;
      }

      const audio = audioRefs.current[type]!;
      audio.currentTime = 0;
      audio.play().catch(e => console.log('Audio playback blocked until user interaction.'));
    } catch (err) {
      console.warn('Sound playback failed:', err);
    }
  }, []);

  return (
    <SoundContext.Provider value={{ play }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) throw new Error('useSound must be used within a SoundProvider');
  return context;
};
