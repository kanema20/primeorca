import { useEffect } from "react";

export default function usePoofScript(url: any) {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = url;
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
}