// ===============================
// Keypad Mapping
// ===============================

// Multi-tap keypad mapping (like old phones)
const multiTapMap = {
  a:"2", b:"22", c:"222",
  d:"3", e:"33", f:"333",
  g:"4", h:"44", i:"444",
  j:"5", k:"55", l:"555",
  m:"6", n:"66", o:"666",
  p:"7", q:"77", r:"777", s:"7777",
  t:"8", u:"88", v:"888",
  w:"9", x:"99", y:"999", z:"9999"
};

// Reverse map (tap sequence -> letter)
const tapsToChar = {};
for (let [ch, taps] of Object.entries(multiTapMap)) {
  tapsToChar[taps] = ch;
}

// Symbols to replace spaces randomly
const spaceSymbols = ["_", "@", "(", "$"];

// ===============================
// Encrypt Function
// ===============================
function encrypt() {
  const msg = document.getElementById('inputMsg').value;
  const keyRaw = document.getElementById('keyInput').value;
  const out = document.getElementById('outputMsg');
  const status = document.getElementById('status');
  out.value = ''; 
  status.textContent = 'Working...';

  if (!msg) return alert('Enter a message');
  const key = parseInt(keyRaw, 10);
  if (!key || key <= 0) return alert('Key must be positive');

  const length = msg.length; // total length including spaces
  let tokens = [];

  for (let ch of msg) {
    if (/[a-zA-Z]/.test(ch)) {
      const lower = ch.toLowerCase();
      const taps = multiTapMap[lower];
      const tapsNum = parseInt(taps, 10);
      const en = tapsNum * key * length;
      tokens.push('L' + en);
    } else if (ch === ' ') {
      // pick random symbol for space
      const sym = spaceSymbols[Math.floor(Math.random() * spaceSymbols.length)];
      tokens.push('X' + sym);
    } else {
      // other characters (symbols/numbers) handled as ASCII
      const ascii = ch.charCodeAt(0);
      const en = ascii * key * length;
      tokens.push('S' + en);
    }
  }

  // attach length in binary
  const binaryLength = length.toString(2);
  const cipher = tokens.join('.') + '|' + binaryLength;

  out.value = cipher;
  status.textContent = `Encrypted ✓ (len=${length}, binary=${binaryLength})`;
}

// ===============================
// Decrypt Function
// ===============================
function decrypt() {
  const input = document.getElementById('inputMsg').value.trim();
  const keyRaw = document.getElementById('keyInput').value;
  const out = document.getElementById('outputMsg');
  const status = document.getElementById('status');
  out.value = ''; 
  status.textContent = 'Working...';

  if (!input) return alert('Paste ciphertext');
  const key = parseInt(keyRaw, 10);
  if (!key || key <= 0) return alert('Key must be positive');

  const parts = input.split('|');
  if (parts.length !== 2) return alert('Invalid ciphertext format');
  const tokensStr = parts[0];
  const binaryLength = parts[1];
  const length = parseInt(binaryLength, 2); // binary -> integer

  const tokens = tokensStr.split('.');
  let reconstructed = '';
  const denom = key * length;

  for (let tok of tokens) {
    if (!tok) continue;
    const prefix = tok[0];
    const payload = tok.slice(1);

    if (prefix === 'L') {
      const en = parseInt(payload, 10);
      const tapsNum = en / denom;
      reconstructed += tapsToChar[String(tapsNum)];
    } else if (prefix === 'X') {
      reconstructed += ' ';
    } else if (prefix === 'S') {
      const en = parseInt(payload, 10);
      const ascii = en / denom;
      reconstructed += String.fromCharCode(ascii);
    }
  }

  out.value = reconstructed;
  status.textContent = `Decrypted ✓ (length=${length})`;
}

// ===============================
// Reset Function
// ===============================
function resetAll() {
  document.getElementById('inputMsg').value = '';
  document.getElementById('keyInput').value = '';
  document.getElementById('outputMsg').value = '';
  document.getElementById('status').textContent = '';
}

// ===============================
// Copy Output Function
// ===============================
function copyOutput() {
  const out = document.getElementById('outputMsg');
  out.select(); 
  document.execCommand('copy');
  document.getElementById('status').textContent = 'Output copied!';
}
