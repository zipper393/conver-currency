const axios = require('axios');

class JustCurrencyConverter {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.apiUrl = 'https://api.currencystack.io';
  }

  async convert(amount, fromCurrency, toCurrency) {
    try {
      const response = await axios.get(`${this.apiUrl}/convert`, {
        params: {
          amount,
          from: fromCurrency,
          to: toCurrency,
          apiKey: this.apiKey
        }
      });

      if (response.data.success) {
        return response.data.result;
      } else {
        throw new Error(response.data.error.message);
      }
    } catch (error) {
      throw new Error(`Failed to convert currency: ${error.message}`);
    }
  }
}

module.exports = JustCurrencyConverter;