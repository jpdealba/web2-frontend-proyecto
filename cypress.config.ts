import { defineConfig } from 'cypress'
import { environment } from 'src/environments/environment'

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200',
    supportFile: false,
    videoCompression: 15,
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },

    specPattern: '**/*.cy.ts'
  }

})
