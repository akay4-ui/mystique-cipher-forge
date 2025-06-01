
// Comprehensive emoji set for encoding - includes all major emoji categories
const emojiSet = [
  // Faces and emotions
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩',
  '😘', '😗', '☺️', '😚', '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
  '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷',
  
  // Animals and nature
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵',
  '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝',
  '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑',
  
  // Food and drink
  '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
  '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐',
  '🥖', '🍞', '🥨', '🥯', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭',
  
  // Objects and symbols
  '⭐', '🌟', '✨', '⚡', '🔥', '💯', '💫', '🌙', '☀️', '🌈', '☔', '❄️', '⛄', '🌊', '💎', '🔮',
  '💰', '💴', '💵', '💶', '💷', '💸', '💳', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️', '🎫',
  '🎪', '🎨', '🎭', '🎪', '🎼', '🎵', '🎶', '🎤', '🎧', '📻', '🎷', '🎸', '🎹', '🎺', '🎻', '🪕',
  
  // Activities and sports
  '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍',
  '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸️', '🥌', '🎿',
  
  // Transport and travel
  '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🏍️', '🛵',
  '🚲', '🛴', '🛺', '🚟', '🚠', '🚡', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝',
  
  // Additional symbols for better coverage
  '💜', '💙', '💚', '💛', '🧡', '❤️', '🤍', '🖤', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖',
  '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈',
  '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳'
];

// Fixed emoji encoding that preserves Unicode data
export const encodeWithEmojis = (text: string): string => {
  console.log('Encoding text:', text);
  
  // Convert text to Base64 first to preserve Unicode
  const base64Text = btoa(unescape(encodeURIComponent(text)));
  console.log('Base64 text:', base64Text);
  
  let encoded = '';
  
  // Convert each character of base64 to emojis
  for (let i = 0; i < base64Text.length; i++) {
    const charCode = base64Text.charCodeAt(i);
    const emojiIndex = charCode % emojiSet.length;
    encoded += emojiSet[emojiIndex];
  }
  
  console.log('Encoded emojis:', encoded);
  return encoded;
};

// Fixed emoji decoding that properly reconstructs Unicode
export const decodeFromEmojis = (emojiText: string): string => {
  console.log('Decoding emojis:', emojiText);
  
  try {
    const emojiArray = Array.from(emojiText);
    let base64Text = '';
    
    // Convert each emoji back to base64 character
    for (let emoji of emojiArray) {
      const emojiIndex = emojiSet.indexOf(emoji);
      if (emojiIndex === -1) {
        console.log('Unknown emoji found:', emoji);
        throw new Error('Invalid emoji in encoded message');
      }
      
      // Find the original character that would map to this emoji index
      for (let charCode = 0; charCode < 256; charCode++) {
        if (charCode % emojiSet.length === emojiIndex) {
          base64Text += String.fromCharCode(charCode);
          break;
        }
      }
    }
    
    console.log('Reconstructed base64:', base64Text);
    
    // Decode from base64 back to original Unicode text
    const decodedText = decodeURIComponent(escape(atob(base64Text)));
    console.log('Final decoded text:', decodedText);
    
    return decodedText;
  } catch (error) {
    console.error('Emoji decoding error:', error);
    return 'Invalid emoji message or decoding error';
  }
};

export const applyPasswordEncoding = (text: string, key: string): string => {
  console.log('Applying password encoding to:', text);
  
  let encoded = '';
  const textArray = Array.from(text); // Properly handle Unicode characters
  const keyArray = Array.from(key);
  
  for (let i = 0; i < textArray.length; i++) {
    const textChar = textArray[i].codePointAt(0) || 0;
    const keyChar = keyArray[i % keyArray.length].codePointAt(0) || 0;
    const encodedChar = String.fromCodePoint(((textChar + keyChar) % 1114111) + 1);
    encoded += encodedChar;
  }
  
  const result = btoa(unescape(encodeURIComponent(encoded))); // Proper Unicode Base64 encoding
  console.log('Password encoded result:', result);
  return result;
};

export const applyPasswordDecoding = (encodedText: string, key: string): string => {
  console.log('Applying password decoding to:', encodedText);
  
  try {
    // Unicode-aware decoding
    const decoded = decodeURIComponent(escape(atob(encodedText))); // Proper Unicode Base64 decoding
    const decodedArray = Array.from(decoded);
    const keyArray = Array.from(key);
    let original = '';
    
    for (let i = 0; i < decodedArray.length; i++) {
      const encodedChar = decodedArray[i].codePointAt(0) || 0;
      const keyChar = keyArray[i % keyArray.length].codePointAt(0) || 0;
      const originalChar = String.fromCodePoint(((encodedChar - 1 - keyChar + 1114111) % 1114111));
      original += originalChar;
    }
    
    console.log('Password decoded result:', original);
    return original;
  } catch (error) {
    console.error('Password decoding error:', error);
    return 'Invalid encoded message or wrong password';
  }
};

// Enhanced cipher algorithm with Unicode support
export const encodeMessage = (text: string, key: string, method: string): string => {
  if (!text || !key) return '';
  
  console.log('Encoding message with method:', method);
  
  if (method === 'emoji') {
    // For emoji method, we first apply the password-based encoding, then convert to emojis
    const passwordEncoded = applyPasswordEncoding(text, key);
    return encodeWithEmojis(passwordEncoded);
  }
  
  // Unicode-aware encoding for all languages
  return applyPasswordEncoding(text, key);
};

export const decodeMessage = (encodedText: string, key: string, method: string): string => {
  if (!encodedText || !key) return '';
  
  console.log('Decoding message with method:', method);
  
  try {
    if (method === 'emoji') {
      // First decode from emojis, then apply password decoding
      const emojiDecoded = decodeFromEmojis(encodedText);
      if (emojiDecoded.includes('Invalid') || emojiDecoded.includes('error')) {
        return emojiDecoded;
      }
      return applyPasswordDecoding(emojiDecoded, key);
    }
    
    return applyPasswordDecoding(encodedText, key);
  } catch (error) {
    console.error('Decoding error:', error);
    return 'Invalid encoded message or wrong password';
  }
};
