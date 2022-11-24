<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: none !important;
}

::selection {
  color: #0d86ff;
  background: transparent;
}

@font-face {
  font-family: "iSans";
  src: local("iSans"),
    url(./assets/fonts/ttf/IRANSansWeb.ttf) format("truetype");
}

@font-face {
  font-family: "iSans";
  src: local("iSans"), url(./assets/fonts/eot/IRANSansWeb.eot) format("eot");
}

@font-face {
  font-family: "iSans";
  src: local("iSans"), url(./assets/fonts/woff/IRANSansWeb.woff) format("woff");
}

@font-face {
  font-family: "iSans";
  src: local("iSans"),
    url(./assets/fonts/woff2/IRANSansWeb.woff2) format("woff2");
}

body {
  font-family: iSans !important;
  font-size: 14px;
  background-color: #272333;
  color: #f1f2f4;
  background-image: url(./assets/image/triangles-bottom.svg),
    url(./assets/image/triangles-bottom.svg);
  background-position: left top, right bottom;
  background-repeat: no-repeat;
  background-size: inherit;
}

#app {
  height: 100vh !important;
}

div#swal2-html-container {
  direction: rtl;
}

.response {
  display: inline-block !important;
}

@media print {
  .page_visibility * {
    display: none;
  }

  .print_visibility * {
    display: block;
  }
}

::-webkit-scrollbar {
  width: 5px;
  background: #ddd;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: linear-gradient(
    327deg,
    rgba(63, 13, 51, 0.8) 0%,
    rgba(10, 44, 100, 0.8) 63%,
    rgba(10, 44, 100, 0.8) 100%
  );
}
</style>
