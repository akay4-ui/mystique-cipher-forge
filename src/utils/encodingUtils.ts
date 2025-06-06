
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
  '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳'
];

// Fixed hex-to-emoji conversion for 9-layer security
export const encodeWithEmojis = (text: string): string => {
  console.log('🚀 9-Layer Emoji encoding initiated for:', text.substring(0, 20) + '...');
  
  try {
    // Convert hex string to emojis
    const hexPairs = text.match(/.{2}/g);
    if (!hexPairs) {
      return 'Invalid hex format';
    }
    
    let encoded = '';
    for (const hexPair of hexPairs) {
      const byteValue = parseInt(hexPair, 16); // Convert hex to decimal (0-255)
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
    let hexString = '';
    
    // Convert each emoji back to hex
    for (const emoji of emojiArray) {
      const emojiIndex = emojiSet.indexOf(emoji);
      
      if (emojiIndex === -1) {
        console.error('❌ Unknown emoji detected:', emoji);
        return 'Invalid emoji in message - corrupted data';
      }
      
      // Convert emoji index back to hex (pad with 0 if needed)
      const hexValue = emojiIndex.toString(16).padStart(2, '0');
      hexString += hexValue;
    }
    
    console.log('✅ 9-Layer emoji decoding complete');
    return hexString;
  } catch (error) {
    console.error('❌ 9-Layer emoji decoding failed:', error);
    return 'Invalid emoji message or corruption detected';
  }
};

// Enhanced 9-layer password encoding with better error handling
export const applyPasswordEncoding = (text: string, key: string): string => {
  console.log('🔐 9-Layer password encoding initiated');
  
  try {
    if (!text || !key) {
      return 'Missing text or key';
    }

    // Layer 9: Anti-tamper header with timestamp
    const timestamp = Date.now().toString(36);
    const enhancedText = `${timestamp}:${text}:${timestamp}`;
    
    // Convert to base64 first for safe processing
    const base64Text = btoa(unescape(encodeURIComponent(enhancedText)));
    
    let encoded = '';
    const textArray = Array.from(base64Text);
    const keyArray = Array.from(key);
    
    // 9-layer encoding with multiple rounds
    for (let round = 0; round < 9; round++) {
      encoded = '';
      for (let i = 0; i < textArray.length; i++) {
        const textChar = textArray[i].charCodeAt(0);
        const keyChar = keyArray[i % keyArray.length].charCodeAt(0);
        const saltValue = (i + round + 1) * 17; // Dynamic salt
        const encodedValue = (textChar + keyChar + saltValue) % 256; // Keep within byte range
        const encodedChar = encodedValue.toString(16).padStart(2, '0'); // Convert to hex
        encoded += encodedChar;
      }
      textArray.length = 0;
      textArray.push(...encoded.match(/.{2}/g)?.map(hex => String.fromCharCode(parseInt(hex, 16))) || []);
    }
    
    console.log('✅ 9-Layer password encoding complete');
    return encoded;
  } catch (error) {
    console.error('❌ 9-Layer password encoding failed:', error);
    return 'Password encoding failed';
  }
};

// Enhanced 9-layer password decoding with better error handling
export const applyPasswordDecoding = (encodedText: string, key: string): string => {
  console.log('🔓 9-Layer password decoding initiated');
  
  try {
    if (!encodedText || encodedText.trim() === '' || !key) {
      return 'Empty encoded message or missing key';
    }

    // Validate hex format
    if (!/^[0-9a-fA-F]+$/.test(encodedText) || encodedText.length % 2 !== 0) {
      return 'Invalid hex format';
    }

    let textArray = encodedText.match(/.{2}/g)?.map(hex => String.fromCharCode(parseInt(hex, 16))) || [];
    const keyArray = Array.from(key);
    
    // Reverse the 9-layer encoding process
    for (let round = 8; round >= 0; round--) {
      let original = '';
      for (let i = 0; i < textArray.length; i++) {
        const encodedChar = textArray[i].charCodeAt(0);
        const keyChar = keyArray[i % keyArray.length].charCodeAt(0);
        const saltValue = (i + round + 1) * 17;
        const originalValue = (encodedChar - keyChar - saltValue + 256) % 256;
        original += String.fromCharCode(originalValue);
      }
      
      // Convert back to hex for next iteration (except last)
      if (round > 0) {
        const hexString = Array.from(original).map(char => 
          char.charCodeAt(0).toString(16).padStart(2, '0')
        ).join('');
        textArray = hexString.match(/.{2}/g)?.map(hex => String.fromCharCode(parseInt(hex, 16))) || [];
      } else {
        textArray = Array.from(original);
      }
    }
    
    const result = textArray.join('');
    
    // Decode from base64
    const decodedBase64 = decodeURIComponent(escape(atob(result)));
    
    // Layer 9: Verify anti-tamper header
    const parts = decodedBase64.split(':');
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
    // Apply password encoding first
    const passwordEncoded = applyPasswordEncoding(text, key);
    if (passwordEncoded.includes('failed') || passwordEncoded.includes('Missing')) {
      return passwordEncoded;
    }
    
    if (method === 'emoji') {
      // Convert hex to emojis
      return encodeWithEmojis(passwordEncoded);
    }
    
    // Text method: return hex directly
    return passwordEncoded;
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
    let hexData = encodedText;
    
    if (method === 'emoji') {
      // Decode from emojis to hex first
      hexData = decodeFromEmojis(encodedText);
      if (hexData.includes('Invalid') || hexData.includes('failed') || hexData.includes('Empty') || hexData.includes('corrupted')) {
        return hexData;
      }
    }
    
    // Apply password decoding
    return applyPasswordDecoding(hexData, key);
  } catch (error) {
    console.error('❌ 9-Layer decoding failed:', error);
    return 'Invalid message or wrong password';
  }
};
