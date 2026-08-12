import { app } from 'nitron'

app.init({
  name: "Easydic",
  packageId: "com.nottky.app",
  version: "1.0.0",
  entry: "index.html",
  orientation: "portrait",
  statusBar: true,
  permissions: ["INTERNET"],
  icon: "./world.png"
})
