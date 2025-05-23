# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
# esport-fe

## 🚀 Development Setup

# Install dependencies
npm install

# Run the dev server
npm run dev
Open http://localhost:5174 to view it in the browser.

# Build to Platform
npm run build

# Output
- dist/soccer-app.js
- dist/assets (folder)

# Deploy
places the output files into (platform directory)/public/

# Implement
template: <soccer-app></soccer-app>
script: 
onMounted(() => {
     if (!customElements.get('lotto-app')) {
      const script = document.createElement('script')
       script.src = '/lotto-app.js'
       script.type = 'module' // Or remove if built without ESM
       document.body.appendChild(script)
     }
   })