(() => {
  const button = document.getElementById("copy-citation");
  const citation = document.getElementById("citation-text");
  const status = document.getElementById("copy-status");
  if (!button || !citation || !status) return;
  button.hidden = false;
  button.addEventListener("click", async () => {
    status.textContent = "";
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(citation.textContent.trim());
      status.textContent = "Citation copied.";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Automatic copying is unavailable. Select and copy the citation above.";
    }
  });
})();

