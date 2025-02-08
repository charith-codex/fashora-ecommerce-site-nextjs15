import { generateAccessToken } from '../lib/paypal';

// Generate a PayPal access token
test('generates a PayPal access token', async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  // Should be a string that is not empty
  expect(typeof tokenResponse).toBe('string');
  expect(tokenResponse.length).toBeGreaterThan(0);
});