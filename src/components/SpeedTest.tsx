import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Gauge, Download, Upload, Activity } from 'lucide-react';

interface SpeedResult {
  download: number;
  upload: number;
  ping: number;
}

export function SpeedTest() {
  const [isTesting, setIsTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<SpeedResult | null>(null);
  const [currentSpeed, setCurrentSpeed] = useState(0);

  const simulateSpeedTest = () => {
    setIsTesting(true);
    setProgress(0);
    setResult(null);
    setCurrentSpeed(0);

    // Simulate test progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });

      // Simulate fluctuating speed
      setCurrentSpeed(Math.floor(Math.random() * 50) + 20);
    }, 100);

    // Complete test
    setTimeout(() => {
      setIsTesting(false);
      setResult({
        download: Math.floor(Math.random() * 50) + 30,
        upload: Math.floor(Math.random() * 30) + 10,
        ping: Math.floor(Math.random() * 20) + 5,
      });
      setCurrentSpeed(0);
    }, 5000);
  };

  const resetTest = () => {
    setResult(null);
    setProgress(0);
    setCurrentSpeed(0);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-orange text-orange hover:bg-orange/10 hover:text-orange"
        >
          <Gauge className="w-5 h-5 mr-2" />
          Test Your Speed
        </Button>
      </DialogTrigger>
      
      <DialogContent className="bg-tech-gray border-tech-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-center text-2xl">
            Internet Speed Test
          </DialogTitle>
        </DialogHeader>

        <div className="py-8">
          <AnimatePresence mode="wait">
            {!isTesting && !result && (
              <motion.div
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gauge className="w-12 h-12 text-orange" />
                </div>
                <p className="text-tech-text mb-6">
                  Test your internet connection speed in seconds
                </p>
                <Button
                  onClick={simulateSpeedTest}
                  className="bg-orange hover:bg-orange-dark text-black font-semibold px-8"
                >
                  Start Test
                </Button>
              </motion.div>
            )}

            {isTesting && (
              <motion.div
                key="testing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#1a1a1a"
                      strokeWidth="12"
                      fill="none"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#dd8854"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${progress * 4.4} 440`}
                      transition={{ duration: 0.1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-orange">{currentSpeed}</span>
                    <span className="text-sm text-tech-text">Mbps</span>
                  </div>
                </div>
                <p className="text-white animate-pulse">Testing your connection...</p>
              </motion.div>
            )}

            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-tech-dark rounded-lg p-4">
                    <Download className="w-6 h-6 text-orange mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{result.download}</p>
                    <p className="text-xs text-tech-text">Download Mbps</p>
                  </div>
                  <div className="bg-tech-dark rounded-lg p-4">
                    <Upload className="w-6 h-6 text-orange mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{result.upload}</p>
                    <p className="text-xs text-tech-text">Upload Mbps</p>
                  </div>
                  <div className="bg-tech-dark rounded-lg p-4">
                    <Activity className="w-6 h-6 text-orange mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">{result.ping}</p>
                    <p className="text-xs text-tech-text">Ping ms</p>
                  </div>
                </div>
                <Button
                  onClick={resetTest}
                  variant="outline"
                  className="border-orange text-orange hover:bg-orange/10"
                >
                  Test Again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
