const endDate = new Date("Dec 12, 2026 23:59:59").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = endDate - now;

  if (diff < 0) return;

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("hours").innerText =
    Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("seconds").innerText =
    Math.floor((diff / 1000) % 60);

}, 1000);
