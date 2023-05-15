module.exports = {
  content: ["./src/**/*.{html,js, css}"],
  theme: {
    extend: {
      colors: {
        "primary" : "#986eb4",
        "secondary" : "#ff477e",
      },
      screens: {
        xl: { max: "2000px"},
      
        lg: { max: "1440px"},
        
        md: { max: "800px"},
      
        sm: { max: "500px"},
      },
      backgroundImage: {
        'pict': "url('../assets/bird.jpg')",
      },




  plugins: [],
}
}
}

