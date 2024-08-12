import axios from 'axios';
import { useState, useEffect } from 'react';

interface banner {
  description: string;
  duration: number;
  link: string;
  isVisible: boolean;
}
export const Banner = () => {
  const [banner, setBanner] = useState<banner | null>(null);
  const [numHours, setNumHours] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(3600);

  useEffect(() => {
    const storedTimeLeft = localStorage.getItem('timeLeft');
    if (storedTimeLeft) {
      setTimeLeft(parseInt(storedTimeLeft));
    }
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        localStorage.setItem('timeLeft', String(timeLeft - 1));
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/create-banner',
          {}
        );
        setBanner(response.data.banner);
        localStorage.setItem('bannerId', response.data.banner.id);
        if (response.data.banner) {
          setNumHours(response.data.banner.duration);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    return `${h}h ${m}m ${s}s`;
  };

  if (!banner || banner?.isVisible === false) return null;
  else {
    return (
      <div>
        <div className="text-white text-md bg-red text-center p-2 tracking-widest">
          {banner?.description}
          <span className="underline underline-offset-4 font-bold">
            <a href={banner?.link} target="_blank">
              Buy Today
            </a>
          </span>
          <br />
          <span className="font-bold text-xl">
            Ends in {formatTime(timeLeft * numHours)}
          </span>
        </div>
      </div>
    );
  }
};
