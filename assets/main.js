(() => {
  const root = document.documentElement; // <html>
  const btn = document.getElementById("themeToggle");

  if (!btn) {
    console.error("[Theme] Tombol #themeToggle tidak ditemukan.");
    return;
  }
  console.log("[Theme] main.js dimuat. Tombol ditemukan.");

  // Ambil preferensi user atau fallback ke preferensi sistem
  const saved = localStorage.getItem("theme"); // 'dark' | 'light' | null
  const systemDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (systemDark ? "dark" : "light");

  function apply(mode) {
    if (mode === "dark") root.classList.add("theme-dark");
    else root.classList.remove("theme-dark");

    localStorage.setItem("theme", mode);
    const dark = root.classList.contains("theme-dark");
    btn.textContent = dark ? "☀️ Mode Terang" : "🌙 Mode Gelap";
    btn.setAttribute("aria-pressed", String(dark));
    console.log("[Theme] apply ->", mode);
  }

  apply(initial); // set awal

  btn.addEventListener("click", () => {
    const next = root.classList.contains("theme-dark") ? "light" : "dark";
    apply(next);
  });
})();
