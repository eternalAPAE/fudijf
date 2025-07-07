<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>purge.sh</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: black;
      color: white;
      font-family: monospace;
      overflow: hidden;
    }
    .center-screen {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .enter-button {
      padding: 1rem 2rem;
      border: 2px solid white;
      color: white;
      font-size: 1.2rem;
      background: transparent;
      cursor: pointer;
      transition: 0.3s;
    }
    .enter-button:hover {
      background: white;
      color: black;
    }
    .hidden {
      display: none;
    }
    .member-carousel {
      display: flex;
      gap: 2rem;
      overflow-x: auto;
      padding: 2rem;
      scroll-snap-type: x mandatory;
      background: black;
      height: 100vh;
      align-items: center;
    }
    .member-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      padding: 1.5rem;
      min-width: 250px;
      scroll-snap-align: center;
      text-align: center;
      transition: transform 0.3s ease;
    }
    .member-card:hover {
      transform: scale(1.05);
    }
    .member-card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 1rem;
      border: 2px solid white;
    }
    .socials a {
      color: white;
      margin: 0 0.5rem;
      text-decoration: none;
      font-size: 0.9rem;
    }
    .info-box {
      padding: 2rem;
      background: black;
      color: white;
      font-family: monospace;
      text-align: center;
    }
    audio {
      display: none;
    }
  </style>
</head>
<body>
  <!-- Landing Page -->
  <div id="landing" class="center-screen">
    <button class="enter-button" onclick="enterSite()">ENTER PURGE.SH</button>
  </div>

  <!-- Main Content -->
  <div id="main" class="hidden">
    <div class="member-carousel">
      <div class="member-card"><img src="https://files.catbox.moe/d4bm08.png"><h3>Necro</h3><p>Founder</p></div>
      <div class="member-card"><img src="https://files.catbox.moe/ydp6oe.jpg"><h3>resired</h3><p>Co - Founder</p></div>
      <div class="member-card"><img src="https://files.catbox.moe/ueblmu.jpg"><h3>Wem</h3><p>Owner</p></div>
      <div class="member-card"><img src="https://files.catbox.moe/4zy9oq.jpg"><h3>faint</h3><p>Co Owner</p></div>
      <div class="member-card"><img src="https://via.placeholder.com/100"><h3>search</h3><p>Member</p></div>
      <div class="member-card"><img src="https://files.catbox.moe/t1nytw.jpg"><h3>frost</h3><p>Member</p></div>
      <div class="member-card"><img src="https://files.catbox.moe/lc31bl.jpg"><h3>grief</h3><p>Member</p></div>
      <div class="member-card"><img src=""><h3>Blue</h3><p>Member</p></div>
      <div class="member-card"><img src=""><h3>Malice</h3><p>Partner + Member</p></div>
    </div>

    <!-- Info Section -->
    <div class="info-box">
      <p><strong>Official purge.sh AE/AP channel:</strong><br>
      Any other channels or people impersonating purge.sh are LARPS.<br>
      The link will always be: <a href="https://t.me/purgeanc" target="_blank">https://t.me/purgeanc</a></p>

      <br><p>Our purpose is to put a full stop to extortion and pedophilia.<br>
      Our members have been chosen carefully and tested properly.<br>
      Apply today at <a href="https://t.me/authorizationUA" target="_blank">@authorizationUA</a> or <a href="https://t.me/resired" target="_blank">@resired</a>.</p>
    </div>
  </div>

  <!-- Background Music -->
  <audio autoplay loop>
    <source src="https://files.catbox.moe/conwsg.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <script>
    function enterSite() {
      document.getElementById('landing').classList.add('hidden');
      document.getElementById('main').classList.remove('hidden');
    }
  </script>
</body>
</html>
