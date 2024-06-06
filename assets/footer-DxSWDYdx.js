(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let i=`<header>
<nav class="container flex space-between">
  <div class="logo">
    <h2>ADITYA</h2>
    <h2>STORE</h2>
  </div>
  <div class="right">
    <a href="/">home</a>
    <a href="about.html">about</a>
    <a href="product.html">products</a>
    <a href="contact.html">contact</a>
    <a href="addToCart.html">
      <div class="cart">
        <img src="images/icons/new cart.png" alt="cart image">
        <p class="cart-value">0</p>
      </div>
    </a>
  </div>
  <div class="bar">
    <img src="images/icons/bar.png" alt="menu image" class="menu">
    <img src="images/icons/close.png" alt="close image" class="close">
  </div>
</nav>
</header>`,c=document.querySelector(".header-nav");c.insertAdjacentHTML("afterbegin",i);let l=`<footer class="section-footer">
  <div class="flex space-between container footer-sec">
    <div class="foot-item">
      <div class="logo">
        <h2>ADITYA</h2>
        <h2>STORE</h2>
      </div>
      <p>Welcome to Aditya EcomStore, your ultimate destination for cutting-edge gadgets!</p>
      <div class="icons">
        <img src="public/images/icons/logo1.png" alt="">
      </div>
    </div>
    <div class="foot-item">
      <h2>shopping</h2>
      <div class="line"></div>
      <a href="product.html">watches store</a>
      <a href="product.html">television</a>
      <a href="product.html">sales product</a>
      <a href="product.html">smartphone</a>
      <a href="product.html">Computer store</a>
    </div>
    <div class="foot-item">
      <h2>Our links</h2>
      <div class="line"></div>
      <a href="index.html">home</a>
      <a href="product.html">products</a>
      <a href="about.html">About us</a>
      <a href="contact.html">contact us</a>
      <a href="addToCart.html">Cart</a>
    </div>
  </div>
</footer>`,n=document.querySelector(".section-footer");n.insertAdjacentHTML("afterbegin",l);
