
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

// Improved emoji encoding with better character mapping
export const encodeWithEmojis = (text: string): string => {
  console.log('🔄 Starting emoji encoding for text:', text);
  
  try {
    // Convert text to UTF-8 bytes and then to hex for reliable encoding
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    const hexString = Array.from(bytes)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
    
    console.log('🔢 Hex representation:', hexString);
    
    let encoded = '';
    
    // Convert each hex character to an emoji (0-9, a-f = 16 possibilities)
    for (let i = 0; i < hexString.length; i++) {
      const hexChar = hexString[i];
      const charValue = parseInt(hexChar, 16); // 0-15
      const emojiIndex = charValue * 13; // Spread across emoji set
      encoded += emojiSet[emojiIndex % emojiSet.length];
    }
    
    console.log('✅ Emoji encoded result:', encoded);
    return encoded;
  } catch (error) {
    console.error('❌ Emoji encoding error:', error);
    return 'Encoding failed';
  }
};

// Improved emoji decoding with better character reconstruction
export const decodeFromEmojis = (emojiText: string): string => {
  console.log('🔄 Starting emoji decoding for:', emojiText);
  
  try {
    const emojiArray = Array.from(emojiText);
    let hexString = '';
    
    // Convert each emoji back to hex character
    for (let emoji of emojiArray) {
      const emojiIndex = emojiSet.indexOf(emoji);
      if (emojiIndex === -1) {
        console.error('❌ Unknown emoji found:', emoji);
        return 'Invalid emoji in encoded message';
      }
      
      // Reverse the encoding process
      const charValue = Math.floor(emojiIndex / 13) % 16;
      const hexChar = charValue.toString(16);
      hexString += hexChar;
    }
    
    console.log('🔢 Reconstructed hex:', hexString);
    
    // Convert hex back to bytes and then to UTF-8 text
    const bytes = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < hexString.length; i += 2) {
      bytes[i / 2] = parseInt(hexString.substr(i, 2), 16);
    }
    
    const decoder = new TextDecoder('utf-8');
    const decodedText = decoder.decode(bytes);
    
    console.log('✅ Final decoded text:', decodedText);
    return decodedText;
  } catch (error) {
    console.error('❌ Emoji decoding error:', error);
    return 'Invalid emoji message or decoding error';
  }
};

// Enhanced password encoding with Unicode support
export const applyPasswordEncoding = (text: string, key: string): string => {
  console.log('🔐 Applying password encoding to:', text);
  
  try {
    let encoded = '';
    const textArray = Array.from(text);
    const keyArray = Array.from(key);
    
    for (let i = 0; i < textArray.length; i++) {
      const textChar = textArray[i].codePointAt(0) || 0;
      const keyChar = keyArray[i % keyArray.length].codePointAt(0) || 0;
      const encodedChar = String.fromCodePoint(((textChar + keyChar) % 1114111) + 1);
      encoded += encodedChar;
    }
    
    // Convert to Base64 for safe storage
    const result = btoa(unescape(encodeURIComponent(encoded)));
    console.log('✅ Password encoded result length:', result.length);
    return result;
  } catch (error) {
    console.error('❌ Password encoding error:', error);
    return 'Password encoding failed';
  }
};

// Enhanced password decoding with Unicode support
export const applyPasswordDecoding = (encodedText: string, key: string): string => {
  console.log('🔐 Applying password decoding to text of length:', encodedText.length);
  
  try {
    // Decode from Base64
    const decoded = decodeURIComponent(escape(atob(encodedText)));
    const decodedArray = Array.from(decoded);
    const keyArray = Array.from(key);
    let original = '';
    
    for (let i = 0; i < decodedArray.length; i++) {
      const encodedChar = decodedArray[i].codePointAt(0) || 0;
      const keyChar = keyArray[i % keyArray.length].codePointAt(0) || 0;
      const originalChar = String.fromCodePoint(((encodedChar - 1 - keyChar + 1114111) % 1114111));
      original += originalChar;
    }
    
    console.log('✅ Password decoded result:', original);
    return original;
  } catch (error) {
    console.error('❌ Password decoding error:', error);
    return 'Invalid encoded message or wrong password';
  }
};

// Main encoding function
export const encodeMessage = (text: string, key: string, method: string): string => {
  if (!text || !key) return '';
  
  console.log('🚀 Encoding message with method:', method, 'Text length:', text.length);
  
  try {
    if (method === 'emoji') {
      // For emoji method: password encode first, then convert to emojis
      const passwordEncoded = applyPasswordEncoding(text, key);
      return encodeWithEmojis(passwordEncoded);
    }
    
    // For text method: just password encoding
    return applyPasswordEncoding(text, key);
  } catch (error) {
    console.error('❌ Encoding failed:', error);
    return 'Encoding failed';
  }
};

// Main decoding function
export const decodeMessage = (encodedText: string, key: string, method: string): string => {
  if (!encodedText || !key) return '';
  
  console.log('🚀 Decoding message with method:', method, 'Encoded length:', encodedText.length);
  
  try {
    if (method === 'emoji') {
      // For emoji method: decode from emojis first, then password decode
      const emojiDecoded = decodeFromEmojis(encodedText);
      if (emojiDecoded.includes('Invalid') || emojiDecoded.includes('failed')) {
        return emojiDecoded;
      }
      return applyPasswordDecoding(emojiDecoded, key);
    }
    
    // For text method: just password decoding
    return applyPasswordDecoding(encodedText, key);
  } catch (error) {
    console.error('❌ Decoding failed:', error);
    return 'Invalid encoded message or wrong password';
  }
};
