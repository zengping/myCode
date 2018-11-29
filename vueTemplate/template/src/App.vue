<template>
  <div>
    <transition name="flow" type="animation" :duration="{ enter: 1000, leave: 500 }">
      <router-view />
    </transition>
    <j-alert />
    <j-confirm />
  </div>
</template>

<script>
  import JAlert from '@/components/JAlert'
  import JConfirm from '@/components/JConfirm'
  export default {
    name: 'App',
    data() {
      return {
        defaultPage: false,
        pageName: '首页'
      }
    },
    components: {
      JAlert,
      JConfirm
    }
  }

</script>

<style>
  @import "assets/css/message-box.css";

  .flow-leave-active {
    -webkit-transform-origin: 50% 30%;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .4);
    -moz-transform-origin: 50% 30%;
    -moz-box-shadow: 0 0 20px rgba(0, 0, 0, .4);
    transform-origin: 50% 30%;
    box-shadow: 0 0 20px rgba(0, 0, 0, .4);
    -webkit-transform: translateX(-100%) scale(.5);
    -webkit-animation-name: flowouttoleft;
    -webkit-animation-timing-function: ease;
    -webkit-animation-duration: 500ms;
    -moz-transform: translateX(-100%) scale(.5);
    -moz-animation-name: flowouttoleft;
    -moz-animation-timing-function: ease;
    -moz-animation-duration: 500ms;
    transform: translateX(-100%) scale(.5);
    animation-name: flowouttoleft;
    animation-timing-function: ease;
    animation-duration: 500ms
  }

  @-webkit-keyframes flowouttoleft {
    0% {
      -webkit-transform: translateX(0) scale(1)
    }

    50% {
      -webkit-transform: translateX(0) scale(.5)
    }

    100% {
      -webkit-transform: translateX(-100%) scale(.5)
    }
  }

  @-moz-keyframes flowouttoleft {
    0% {
      -moz-transform: translateX(0) scale(1)
    }

    50% {
      -moz-transform: translateX(0) scale(.5)
    }

    100% {
      -moz-transform: translateX(-100%) scale(.5)
    }
  }

  @keyframes flowouttoleft {
    0% {
      transform: translateX(0) scale(1)
    }

    50% {
      transform: translateX(0) scale(.5)
    }

    100% {
      transform: translateX(-100%) scale(.5)
    }
  }

  .flow-enter-active {
    -webkit-transform-origin: none;
    -webkit-box-shadow: none;
    -moz-transform-origin: none;
    -moz-box-shadow: none;
    transform-origin: none;
    box-shadow: none;
    -webkit-transform: translateX(0) scale(1);
    -webkit-animation-name: flowinfromright;
    -webkit-animation-timing-function: ease;
    -webkit-animation-duration: 1000ms;
    -moz-transform: translateX(0) scale(1);
    -moz-animation-name: flowinfromright;
    -moz-animation-timing-function: ease;
    -moz-animation-duration: 1000ms;
    transform: translateX(0) scale(1);
    animation-name: flowinfromright;
    animation-timing-function: ease;
    animation-duration: 1000ms
  }

  @-webkit-keyframes flowinfromright {
    0% {
      -webkit-transform: translateX(100%) scale(.5)
    }

    50% {
      -webkit-transform: translateX(100%) scale(.5)
    }

    75% {
      -webkit-transform: translateX(0) scale(.5)
    }

    100% {
      -webkit-transform: translateX(0) scale(1)
    }
  }

  @-moz-keyframes flowinfromright {
    0% {
      -moz-transform: translateX(100%) scale(.5)
    }

    50% {
      -moz-transform: translateX(100%) scale(.5)
    }

    75% {
      -moz-transform: translateX(0) scale(.5)
    }

    100% {
      -moz-transform: translateX(0) scale(1)
    }
  }

  @keyframes flowinfromright {
    0% {
      transform: translateX(100%) scale(.5)
    }

    50% {
      transform: translateX(100%) scale(.5)
    }

    75% {
      transform: translateX(0) scale(.5)
    }

    100% {
      transform: translateX(0) scale(1)
    }
  }

</style>
