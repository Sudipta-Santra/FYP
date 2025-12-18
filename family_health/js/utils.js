// utils.js

export function formatRisk(level) {
  return level.toUpperCase();
}

export function showLoader(el, text = "Processing...") {
  el.innerHTML = `<em>${text}</em>`;
}

export function clearElement(el) {
  el.innerHTML = "";
}
