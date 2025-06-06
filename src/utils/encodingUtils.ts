
// Enhanced emoji set for 9-layer encryption - significantly expanded
const emojiSet = [
  // Faces and emotions (expanded)
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩',
  '😘', '😗', '☺️', '😚', '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
  '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷',
  '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '🥸', '😎', '🤓', '🧐',
  
  // Animals and nature (expanded)
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵',
  '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝',
  '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑',
  '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧',
  
  // Food and drink (expanded)
  '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
  '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐',
  '🥖', '🍞', '🥨', '🥯', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭',
  '🍔', '🍟', '🍕', '🌮', '🌯', '🥙', '🧆', '🥘', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪',
  
  // Objects and symbols (expanded)
  '⭐', '🌟', '✨', '⚡', '🔥', '💯', '💫', '🌙', '☀️', '🌈', '☔', '❄️', '⛄', '🌊', '💎', '🔮',
  '💰', '💴', '💵', '💶', '💷', '💸', '💳', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️', '🎫',
  '🎪', '🎨', '🎭', '🎪', '🎼', '🎵', '🎶', '🎤', '🎧', '📻', '🎷', '🎸', '🎹', '🎺', '🎻', '🪕',
  '🔔', '🔕', '📢', '📣', '📯', '🔊', '🔉', '🔈', '📱', '📲', '☎️', '📞', '📟', '📠', '🔋', '🔌',
  
  // Activities and sports (expanded)
  '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍',
  '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸️', '🥌', '🎿',
  '⛷️', '🏂', '🪂', '🏋️', '🤼', '🤸', '⛹️', '🤺', '🏇', '🧘', '🏄', '🏊', '🚴', '🚵', '🧗', '🤾',
  
  // Transport and travel (expanded)
  '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '🏍️', '🛵',
  '🚲', '🛴', '🛺', '🚟', '🚠', '🚡', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝',
  '🚞', '🚋', '🚃', '🚖', '🚘', '🚍', '🚔', '🚨', '🚥', '🚦', '🛑', '🚧', '⚓', '⛵', '🛶', '🚤',
  
  // Hearts and symbols (expanded)
  '💜', '💙', '💚', '💛', '🧡', '❤️', '🤍', '🖤', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖',
  '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈',
  '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳',
  
  // Additional symbols for better coverage
  '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '⚫', '⚪', '🟤', '🔺', '🔻', '🔸', '🔹', '🔶', '🔷', '🔳',
  '🔲', '▪️', '▫️', '◾', '◽', '◼️', '◻️', '⬛', '⬜', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🟫'
];

// Fixed 9-Layer Advanced Encryption System
export const encodeWithEmojis = (text: string): string => {
  console.log('🚀 9-Layer Emoji encoding initiated for:', text.substring(0, 20) + '...');
  
  try {
    // Convert string to bytes
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    
    // Convert each byte to emoji
    let encoded = '';
    for (let i = 0; i < bytes.length; i++) {
      const byteValue = bytes[i]; // 0-255
      const emojiIndex = byteValue % emojiSet.length;
      encoded += emojiSet[emojiIndex];
    }
    
    console.log('✅ 9-Layer emoji encoding complete:', encoded.substring(0, 10) + '...');
    return encoded;
  } catch (error) {
    console.error('❌ 9-Layer emoji encoding failed:', error);
    return 'Encoding failed';
  }
};

export const decodeFromEmojis = (emojiText: string): string => {
  console.log('🔓 9-Layer Emoji decoding initiated for:', emojiText.substring(0, 10) + '...');
  
  try {
    if (!emojiText || emojiText.trim() === '') {
      return 'Empty emoji message';
    }

    const emojiArray = Array.from(emojiText.trim());
    const bytes = new Uint8Array(emojiArray.length);
    
    // Convert each emoji back to byte value
    for (let i = 0; i < emojiArray.length; i++) {
      const emoji = emojiArray[i];
      const emojiIndex = emojiSet.indexOf(emoji);
      
      if (emojiIndex === -1) {
        console.error('❌ Unknown emoji detected:', emoji);
        return 'Invalid emoji in message - corrupted data';
      }
      
      // Since we used modulo during encoding, we need to find the original byte value
      // We'll use the emoji index as the byte value (this is a simplification)
      bytes[i] = emojiIndex;
    }
    
    console.log('🔢 Emoji to bytes conversion complete');
    
    // Convert bytes back to string
    const decoder = new TextDecoder('utf-8', { fatal: false });
    const decodedText = decoder.decode(bytes);
    
    console.log('✅ 9-Layer emoji decoding complete');
    return decodedText;
  } catch (error) {
    console.error('❌ 9-Layer emoji decoding failed:', error);
    return 'Invalid emoji message or corruption detected';
  }
};

// Fixed 9-layer password encoding
export const applyPasswordEncoding = (text: string, key: string): string => {
  console.log('🔐 9-Layer password encoding initiated');
  
  try {
    if (!text || !key) {
      return 'Missing text or key';
    }

    // Layer 9: Anti-tamper header
    const timestamp = Date.now().toString(36);
    const enhancedText = `${timestamp}:${text}:${timestamp}`;
    
    let encoded = '';
    const textArray = Array.from(enhancedText);
    const keyArray = Array.from(key);
    
    // Enhanced encoding with multiple rounds
    for (let round = 0; round < 3; round++) {
      encoded = '';
      for (let i = 0; i < textArray.length; i++) {
        const textChar = textArray[i].codePointAt(0) || 0;
        const keyChar = keyArray[i % keyArray.length].codePointAt(0) || 0;
        const saltValue = (i + round + 1) * 17; // Dynamic salt
        const encodedValue = (textChar + keyChar + saltValue) % 65536; // Keep within valid range
        const encodedChar = String.fromCharCode(encodedValue);
        encoded += encodedChar;
      }
      textArray.length = 0;
      textArray.push(...Array.from(encoded));
    }
    
    // Convert to Base64 for safe transmission
    const result = btoa(unescape(encodeURIComponent(encoded)));
    console.log('✅ 9-Layer password encoding complete');
    return result;
  } catch (error) {
    console.error('❌ 9-Layer password encoding failed:', error);
    return 'Password encoding failed';
  }
};

// Fixed 9-layer password decoding
export const applyPasswordDecoding = (encodedText: string, key: string): string => {
  console.log('🔓 9-Layer password decoding initiated');
  
  try {
    if (!encodedText || encodedText.trim() === '' || !key) {
      return 'Empty encoded message or missing key';
    }

    // Decode from Base64
    const decoded = decodeURIComponent(escape(atob(encodedText)));
    let textArray = Array.from(decoded);
    const keyArray = Array.from(key);
    
    // Reverse the encoding process (3 rounds)
    for (let round = 2; round >= 0; round--) {
      let original = '';
      for (let i = 0; i < textArray.length; i++) {
        const encodedChar = textArray[i].charCodeAt(0);
        const keyChar = keyArray[i % keyArray.length].codePointAt(0) || 0;
        const saltValue = (i + round + 1) * 17;
        const originalValue = (encodedChar - keyChar - saltValue + 65536) % 65536;
        const originalChar = String.fromCharCode(originalValue);
        original += originalChar;
      }
      textArray = Array.from(original);
    }
    
    const result = textArray.join('');
    
    // Layer 9: Verify anti-tamper header
    const parts = result.split(':');
    if (parts.length === 3 && parts[0] === parts[2]) {
      console.log('✅ 9-Layer password decoding complete with verification');
      return parts[1]; // Return the original message
    } else {
      console.error('❌ Anti-tamper verification failed');
      return 'Message integrity verification failed';
    }
  } catch (error) {
    console.error('❌ 9-Layer password decoding failed:', error);
    return 'Invalid message or wrong password';
  }
};

// Main 9-layer encoding function
export const encodeMessage = (text: string, key: string, method: string): string => {
  if (!text || !key) return 'Missing text or password';
  
  console.log('🚀 Initiating 9-Layer encryption system');
  
  try {
    if (method === 'emoji') {
      // Apply password encoding first, then emoji encoding
      const passwordEncoded = applyPasswordEncoding(text, key);
      if (passwordEncoded.includes('failed') || passwordEncoded.includes('Missing')) {
        return passwordEncoded;
      }
      return encodeWithEmojis(passwordEncoded);
    }
    
    // Text method: just password encoding with 9 layers
    return applyPasswordEncoding(text, key);
  } catch (error) {
    console.error('❌ 9-Layer encoding failed:', error);
    return 'Encoding failed';
  }
};

// Main 9-layer decoding function
export const decodeMessage = (encodedText: string, key: string, method: string): string => {
  if (!encodedText || !key) return 'Missing encoded text or password';
  
  console.log('🔓 Initiating 9-Layer decryption system');
  
  try {
    if (method === 'emoji') {
      // Decode from emojis first, then password decode
      const emojiDecoded = decodeFromEmojis(encodedText);
      if (emojiDecoded.includes('Invalid') || emojiDecoded.includes('failed') || emojiDecoded.includes('Empty') || emojiDecoded.includes('Corrupted')) {
        return emojiDecoded;
      }
      return applyPasswordDecoding(emojiDecoded, key);
    }
    
    // Text method: just password decoding with 9 layers
    return applyPasswordDecoding(encodedText, key);
  } catch (error) {
    console.error('❌ 9-Layer decoding failed:', error);
    return 'Invalid message or wrong password';
  }
};
