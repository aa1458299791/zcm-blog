<template>
  <div class="snowflake">
    <canvas ref="snowflake" id="cvx"></canvas>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snowflake',
  data() {
    return {
      cvs: null,
      ctx: null,
      bgColors: null,
      count: 0
    }
  },
  mounted() {
    this.getWidthHeight()
    this.initData()
  },
  methods: {
    getWidthHeight() {
      this.cvs = document.querySelector('#cvx')
      this.ctx = this.cvs.getContext('2d')
      const { clientWidth: width, clientHeight: height } =
        document.documentElement

      this.cvs.width = width
      this.cvs.height = height

      this.ctx.fillStyle = '#ffffff'

      this.bgColors = Array.from(new Array(400)).map(v => {
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          step: Math.random() * 2.5 + 0.5
        }
      })
    },
    initData() {
      if (this.count % 3 === 0) {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
        this.ctx.beginPath()
        this.bgColors.forEach(v => {
          v.y = v.y > this.cvs.height ? 0 : v.y + v.step
          this.ctx.rect(v.x, v.y, 3, 3)
        })
        this.ctx.fill()
      }
      this.count++

      requestAnimationFrame(this.initData)
    }
  }
}
</script>

<style lang="scss" scoped>
.snowflake {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  pointer-events: none;
}
#cvx {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
