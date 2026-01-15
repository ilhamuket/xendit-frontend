// config.js - Frontend Configuration
// Load this file BEFORE payment-qris.html script

// Environment configuration
const ENV = {
  development: {
    API_BASE_URL: 'http://localhost:3000',
  },
  staging: {
    API_BASE_URL: 'https://xen-platform.vercel.app',
  },
  production: {
    API_BASE_URL: 'https://xen-platform.vercel.app',
  },
};

// Detect environment (default to development)
const CURRENT_ENV = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'development'
  : window.location.hostname.includes('staging')
  ? 'staging'
  : 'production';

// Set global API_BASE_URL
window.API_BASE_URL = ENV[CURRENT_ENV].API_BASE_URL;

console.log('🔧 Environment:', CURRENT_ENV);
console.log('🌐 API Base URL:', window.API_BASE_URL);