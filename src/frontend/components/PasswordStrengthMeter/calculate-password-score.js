const calculatePasswordScore = ({ value, isValid }) => {
  if (!isValid) return 0;

  let score = 0;
  if (value.length > 6) score += 0.5;
  if (/\d/.test(value)) score += 0.3;
  if (/[-_&%$!]/.test(value)) score += 0.2;
  return score;
};

export default calculatePasswordScore;
