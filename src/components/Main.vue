<template>
  <div id="main">
    <h1>Vanilla Bridge</h1>
    <div>
      <p>내 스타일에 맞게</p>
      <p>사람이 해주는 진짜 소개팅</p>
      <div class="btns">
        <Button name="다크모드"/>
        <Button name="라이트모드"/>
      </div>
    </div>
    <div class="app-stores">
      <div @click="goAppStore('google')">
        <i style="color: white; font-size: 1.5rem; margin-right: 20px; cursor: pointer" class="fab fa-google-play">
          <span style="margin: 0 5px">Google Play</span>
        </i>
      </div>
      <div @click="goAppStore('apple')">
        <i style="color: white; font-size: 1.5rem; margin-right: 20px; cursor: pointer" class="fab fa-app-store-ios">
          <span style="margin: 0 5px">App Store</span>
        </i>
      </div>
    </div>

  </div>
</template>

<script>
  import Button from "@/components/Main/Button";
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: "Main",
    components: {
      Button
    },
    computed: {
      ...mapState(['darkMode'])
    },
    methods: {
      ...mapMutations(["SET_DARKMODE"]),
      goAppStore(platform) {
        if (platform === 'google') window.open("https://play.google.com/store/apps/details?id=com.vanillabridge.app")
        else if (platform === 'apple') window.open("https://apps.apple.com/us/app/%EB%B0%94%EB%8B%90%EB%9D%BC%EB%B8%8C%EB%A6%BF%EC%A7%80/id1219876826?app=itunes&ign-mpt=uo%3D4")
      }
    }
  }
</script>

<style scoped>
  #main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 720px;
  }
  h1 {
    font-size: 80px;
    color: #F6F6F8;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
  p {
    font-size: 2rem;
    color: #F6F6F8;
    font-weight: lighter;
    margin: 0.3rem 0;
  }
  .btns {
    display: flex;
    margin: 1rem 0;

  }
  .app-stores {
    display: flex;
  }
  @media (max-width: 800px) {
    #main {
      display: none;
    }
  }
</style>