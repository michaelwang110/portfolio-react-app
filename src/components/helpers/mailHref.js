// src: https://www.30secondsofcode.org/react/s/mailto
export const mailHref = () => {
  const email = 'michael.mhw1@gmail.com';
  const subject = '';
  const body = '';
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return `mailto:${email}${params}`;
};