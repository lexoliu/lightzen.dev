const Background: React.FC = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(
    90deg,
            #ff0000 0%,
            #ff0000 14.28%,
            #ff8c00 14.28%,
            #ff8c00 28.56%,
            #ffd700 28.56%,
            #ffd700 42.84%,
            #32cd32 42.84%,
            #32cd32 57.12%,
            #00bfff 57.12%,
            #00bfff 71.4%,
            #4169e1 71.4%,
            #4169e1 85.68%,
            #8a2be2 85.68%,
            #8a2be2 100%
          )`,
      }}
    ></div>
  );
};

export default Background;
