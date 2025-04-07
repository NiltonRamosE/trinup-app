const WaveBackground = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="100%" height="900">
      <path
        d="
          M 0 90
          Q 20 40, 40 60 
          Q 60 80, 80 60 
          Q 100 40, 120 60 
          Q 140 80, 160 60 
          Q 180 40, 200 60 
          Q 220 80, 240 60 
          Q 260 40, 280 60 
          L 300 80"
        fill="none"
        stroke="#26B66E"
        strokeOpacity={0.3}
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export default WaveBackground;