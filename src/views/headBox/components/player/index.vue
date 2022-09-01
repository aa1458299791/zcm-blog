<template>
  <div class="player">
    <div class="audio_con">
      <span>听听音乐叭~~~</span>
      <audio
        ref="audio"
        :src="musicData"
        controls
        loop
        preload="auto"
        autoplay="autoplay"
        class="myaudio"
      ></audio>
    </div>
    <!-- <i class="el-icon-video-pause"></i> -->
  </div>
</template>

<script>
export default {
  name: 'player',
  data() {
    return {
      musicData: require('@/assets/ms/澪恩Seiwen - 此生不换（女生版）.mp3')
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  .audio_con {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 10px;
      color: lavender;
      margin-right: 5px;
    }
    // flex-direction: column;
    audio {
      width: 250px;
      height: 30px;
      // margin-right: 10px;
    }
  }
}
</style>
