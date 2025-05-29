const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const fs = require("fs");

// Carrega manualmente o arquivo .env
const dotenv = fs.existsSync(".env") ? require("dotenv").config().parsed : {};

module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
  // Define as variáveis de ambiente explicitamente
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      const env = process.env;
      args[0]["process.env"] = {
        ...args[0]["process.env"],
        VUE_APP_SUPABASE_URL: JSON.stringify(
          env.VUE_APP_SUPABASE_URL || dotenv.VUE_APP_SUPABASE_URL
        ),
        VUE_APP_SUPABASE_ANON_KEY: JSON.stringify(
          env.VUE_APP_SUPABASE_ANON_KEY || dotenv.VUE_APP_SUPABASE_ANON_KEY
        ),
      };
      return args;
    });
  },
});
