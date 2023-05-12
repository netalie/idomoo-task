//transforms a given string to base64 
function encodeToBase64(text) {
    // Create a buffer from the input text
    const buffer = Buffer.from(text, 'utf-8');

    // Encode the buffer to Base64
    const base64 = buffer.toString('base64');

    return base64;
}

module.exports = { encodeToBase64 };