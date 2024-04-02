import { defineComponent } from "vue";
// import { WebglContainer } from "@/components/WebglContainer/WebglContainer";
// import { PixiContainer } from "@/components/PixiContainer/PixiContainer";
import { AutoComplete } from "@/components/AutoComplete/AutoComplete";
// import { VideoUpload } from "@/components/VideoUpload/VideoUpload";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  },
  render() {
    return (
      <div class="w-full">
        {/* <WebglContainer></WebglContainer> */}
        {/* <PixiContainer></PixiContainer> */}
        <AutoComplete />
      </div>
    );
  },
});
