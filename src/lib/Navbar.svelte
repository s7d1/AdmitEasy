<!-- <script lang="ts">
  import logo from '../assets/logo.svg'
</script> -->

<!-- <nav class="navbar" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href={'#/'}>
      <img src={logo} alt="ChatGPT-web" width="28" height="28" />
      <p class="ml-2 is-size-4 has-text-weight-bold">ChatGPT-web aaaaaaaaaa</p>
    </a>
  </div>
</nav> -->

<link rel="icon" type="image/x-icon" href="/logo1.png">

  <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}

body, html {
  height: 100%;
  line-height: 1.8;
}

/* Full height image header */
.bgimg-1 {
  background-position: center;
  background-size: cover;
  background-image: url("https://www.w3schools.com/w3images/mac.jpg");
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}
.w3-bar .logo {
  padding: 0px;
}
</style>

<script>
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }
  </script>

<div class="w3-top">
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" class="w3-bar-item logo" style="margin-right: 30px;"><img src="/logo1.png" width="64" height="auto"></a>
    <div class="w3-center w3-hide-small" style="display: flex; justify-content: center; align-items: center; height: 100%;">
      <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
      <a href="chat.html" class="w3-bar-item w3-button"><i class="fa fa-user"></i> CHAT</a>
      <a href="resume_review.html" class="w3-bar-item w3-button"><i class="fa fa-th"></i> RÉSUMÉ REVIEWS</a>
      <a href="essays.html" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> ESSAYS</a>
      <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
    </div>

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>