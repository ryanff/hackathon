import { defineComponent, onMounted, ref } from "vue";

export const VideoUpload = defineComponent({
  name: "VideoUpload",
  setup() {
    const videoSrc = ref("");
    const videoRef = ref();
    const canvasRef = ref();

    const handleChange = (val: any) => {
      const res = URL.createObjectURL(val.target.files[0]);
      videoSrc.value = res;
    };

    const captureFrame = () => {
      const ctx = canvasRef.value.getContext("2d");
      ctx.drawImage(videoRef.value, 0, 0, 400, 300);
    };

    const playCallBack = () => {
      if (videoRef.value.paused) {
        return;
      }
      captureFrame();
      setTimeout(playCallBack, 40);
    };

    const init = () => {
      videoRef.value.addEventListener("play", playCallBack);
    };

    onMounted(init);

    return { videoSrc, videoRef, canvasRef, handleChange };
  },
  render() {
    return (
      <div class="w-full">
        <input type="file" onChange={this.handleChange} />

        <video
          ref="videoRef"
          src={this.videoSrc}
          type="video/mp4"
          controls
        ></video>
        <canvas ref="canvasRef"></canvas>
      </div>
    );
  },
});
