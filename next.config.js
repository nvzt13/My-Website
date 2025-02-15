// next.config.js
module.exports = {
  experimental: {
    serverActionsBodySizeLimit: '5mb', // Server Actions için body limitini 5mb olarak ayarlıyoruz
    serverActions: true,  // Server Actions özelliğini etkinleştir
  },
};