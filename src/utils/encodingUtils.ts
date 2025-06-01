
// Enhanced emoji set with better distribution across categories for stronger encoding
const emojiSet = [
  // Extended faces and emotions - better coverage
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩',
  '😘', '😗', '☺️', '😚', '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
  '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷',
  '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '🥸', '😎', '🤓', '🧐',
  
  // Animals with better Unicode coverage
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵',
  '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝',
  '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑',
  '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧',
  
  // Food with extended international coverage
  '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
  '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐',
  '🥖', '🍞', '🥨', '🥯', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭',
  '🍕', '🍟', '🥙', '🌮', '🌯', '🥗', '🥘', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤',
  
  // Objects and symbols with better distribution
  '⭐', '🌟', '✨', '⚡', '🔥', '💯', '💫', '🌙', '☀️', '🌈', '☔', '❄️', '⛄', '🌊', '💎', '🔮',
  '💰', '💴', '💵', '💶', '💷', '💸', '💳', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️', '🎫',
  '🎪', '🎨', '🎭', '🎪', '🎼', '🎵', '🎶', '🎤', '🎧', '📻', '🎷', '🎸', '🎹', '🎺', '🎻', '🪕',
  '🎯', '🎳', '🎮', '🎰', '🧩', '🃏', '🀄', '🎴', '🎲', '♠️', '♥️', '♦️', '♣️', '🎊', '🎉', '🎈',
  
  // Activities and sports
  '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍',
  '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸️', '🥌', '🎿',
  
  // Extended symbols for better security
  '🔐', '🔑', '🗝️', '🔒', '🔓', '🔏', '🔎', '🔍', '💡', '🔦', '🏮', '🪔', '📱', '💻', '⌨️', '🖥️',
  '🖨️', '🖱️', '🖲️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️'
];

// Enhanced salt generation for stronger security
const generateSalt = (password: string): string => {
  let salt = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    const saltIndex = (charCode * 7 + i * 13) % chars.length;
    salt += chars[saltIndex];
  }
  return salt;
};

// Strengthened emoji encoding with multiple layers of security
export const encodeWithEmojis = (text: string): string => {
  console.log('🔄 Starting enhanced emoji encoding for text:', text.substring(0, 50) + '...');
  
  try {
    // Convert text to UTF-8 bytes for universal language support
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    
    // Apply XOR transformation for additional security
    const transformedBytes = Array.from(bytes).map((byte, index) => {
      return byte ^ (index % 256); // XOR with position-based key
    });
    
    // Convert to base64 for stable intermediate representation
    const base64 = btoa(String.fromCharCode(...transformedBytes));
    console.log('🔢 Base64 intermediate length:', base64.length);
    
    let encoded = '';
    
    // Enhanced mapping: each character maps to 2 emojis for better security
    for (let i = 0; i < base64.length; i++) {
      const charCode = base64.charCodeAt(i);
      
      // First emoji based on character code
      const firstIndex = charCode % emojiSet.length;
      // Second emoji based on position and character code
      const secondIndex = (charCode + i * 17) % emojiSet.length;
      
      encoded += emojiSet[firstIndex] + emojiSet[secondIndex];
    }
    
    console.log('✅ Enhanced emoji encoded result length:', encoded.length);
    return encoded;
  } catch (error) {
    console.error('❌ Enhanced emoji encoding error:', error);
    return 'Encoding failed - invalid characters detected';
  }
};

// Strengthened emoji decoding
export const decodeFromEmojis = (emojiText: string): string => {
  console.log('🔄 Starting enhanced emoji decoding for text length:', emojiText.length);
  
  try {
    const emojiArray = Array.from(emojiText);
    
    // Ensure we have pairs of emojis
    if (emojiArray.length % 2 !== 0) {
      console.error('❌ Invalid emoji message: odd number of emojis');
      return 'Invalid emoji message format';
    }
    
    let base64 = '';
    
    // Decode pairs of emojis back to characters
    for (let i = 0; i < emojiArray.length; i += 2) {
      const firstEmoji = emojiArray[i];
      const secondEmoji = emojiArray[i + 1];
      
      const firstIndex = emojiSet.indexOf(firstEmoji);
      const secondIndex = emojiSet.indexOf(secondEmoji);
      
      if (firstIndex === -1 || secondIndex === -1) {
        console.error('❌ Unknown emoji found');
        return 'Invalid emoji characters in encoded message';
      }
      
      // Reverse the encoding: find character that produces these two emojis
      for (let charCode = 32; charCode <= 126; charCode++) {
        const expectedFirst = charCode % emojiSet.length;
        const expectedSecond = (charCode + (i / 2) * 17) % emojiSet.length;
        
        if (expectedFirst === firstIndex && expectedSecond === secondIndex) {
          base64 += String.fromCharCode(charCode);
          break;
        }
      }
    }
    
    console.log('🔢 Reconstructed base64 length:', base64.length);
    
    // Convert base64 back to bytes
    const binaryString = atob(base64);
    const transformedBytes = Array.from(binaryString).map(char => char.charCodeAt(0));
    
    // Reverse XOR transformation
    const originalBytes = transformedBytes.map((byte, index) => {
      return byte ^ (index % 256);
    });
    
    // Convert back to UTF-8 text
    const decoder = new TextDecoder('utf-8');
    const decodedText = decoder.decode(new Uint8Array(originalBytes));
    
    console.log('✅ Enhanced emoji decoding complete');
    return decodedText;
  } catch (error) {
    console.error('❌ Enhanced emoji decoding error:', error);
    return 'Decoding failed - corrupted emoji message';
  }
};

// Enhanced password encoding with stronger cryptographic approach
export const applyPasswordEncoding = (text: string, key: string): string => {
  console.log('🔐 Applying enhanced password encoding');
  
  try {
    const salt = generateSalt(key);
    const combinedKey = key + salt;
    
    // Convert to UTF-8 bytes for universal language support
    const encoder = new TextEncoder();
    const textBytes = encoder.encode(text);
    const keyBytes = encoder.encode(combinedKey);
    
    // Apply multiple rounds of encryption-like transformation
    let encoded = Array.from(textBytes);
    
    // Round 1: XOR with expanded key
    for (let i = 0; i < encoded.length; i++) {
      const keyByte = keyBytes[i % keyBytes.length];
      encoded[i] = encoded[i] ^ keyByte;
    }
    
    // Round 2: Position-based transformation
    for (let i = 0; i < encoded.length; i++) {
      encoded[i] = (encoded[i] + i * 7 + keyBytes.length) % 256;
    }
    
    // Round 3: Reverse XOR with different key pattern
    for (let i = 0; i < encoded.length; i++) {
      const keyByte = keyBytes[(i * 3) % keyBytes.length];
      encoded[i] = encoded[i] ^ keyByte;
    }
    
    // Convert to base64 for safe transmission
    const result = btoa(String.fromCharCode(...encoded));
    console.log('✅ Enhanced password encoding complete, length:', result.length);
    return result;
  } catch (error) {
    console.error('❌ Enhanced password encoding error:', error);
    return 'Password encoding failed';
  }
};

// Enhanced password decoding
export const applyPasswordDecoding = (encodedText: string, key: string): string => {
  console.log('🔐 Applying enhanced password decoding');
  
  try {
    const salt = generateSalt(key);
    const combinedKey = key + salt;
    
    // Decode from base64
    const binaryString = atob(encodedText);
    let encoded = Array.from(binaryString).map(char => char.charCodeAt(0));
    
    const encoder = new TextEncoder();
    const keyBytes = encoder.encode(combinedKey);
    
    // Reverse Round 3: Reverse XOR with different key pattern
    for (let i = 0; i < encoded.length; i++) {
      const keyByte = keyBytes[(i * 3) % keyBytes.length];
      encoded[i] = encoded[i] ^ keyByte;
    }
    
    // Reverse Round 2: Position-based transformation
    for (let i = 0; i < encoded.length; i++) {
      encoded[i] = (encoded[i] - i * 7 - keyBytes.length + 256 * 256) % 256;
    }
    
    // Reverse Round 1: XOR with expanded key
    for (let i = 0; i < encoded.length; i++) {
      const keyByte = keyBytes[i % keyBytes.length];
      encoded[i] = encoded[i] ^ keyByte;
    }
    
    // Convert back to UTF-8 text
    const decoder = new TextDecoder('utf-8');
    const decodedText = decoder.decode(new Uint8Array(encoded));
    
    console.log('✅ Enhanced password decoding complete');
    return decodedText;
  } catch (error) {
    console.error('❌ Enhanced password decoding error:', error);
    return 'Invalid password or corrupted message';
  }
};

// Main encoding function with enhanced security
export const encodeMessage = (text: string, key: string, method: string): string => {
  if (!text || !key) return '';
  
  console.log('🚀 Enhanced encoding with method:', method, 'Text length:', text.length, 'Languages supported: All Unicode');
  
  try {
    if (method === 'emoji') {
      // For emoji: password encode first, then convert to emojis
      const passwordEncoded = applyPasswordEncoding(text, key);
      return encodeWithEmojis(passwordEncoded);
    }
    
    // For text: enhanced password encoding only
    return applyPasswordEncoding(text, key);
  } catch (error) {
    console.error('❌ Enhanced encoding failed:', error);
    return 'Encoding failed - please check your input';
  }
};

// Main decoding function with enhanced security
export const decodeMessage = (encodedText: string, key: string, method: string): string => {
  if (!encodedText || !key) return '';
  
  console.log('🚀 Enhanced decoding with method:', method, 'Encoded length:', encodedText.length);
  
  try {
    if (method === 'emoji') {
      // For emoji: decode from emojis first, then password decode
      const emojiDecoded = decodeFromEmojis(encodedText);
      if (emojiDecoded.includes('Invalid') || emojiDecoded.includes('failed') || emojiDecoded.includes('Decoding failed')) {
        return emojiDecoded;
      }
      return applyPasswordDecoding(emojiDecoded, key);
    }
    
    // For text: enhanced password decoding only
    return applyPasswordDecoding(encodedText, key);
  } catch (error) {
    console.error('❌ Enhanced decoding failed:', error);
    return 'Decoding failed - invalid message or wrong password';
  }
};
