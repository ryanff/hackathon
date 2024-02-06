import { defineComponent } from "vue";
// import { WebglContainer } from "@/components/WebglContainer/WebglContainer";
import { PixiContainer } from "@/components/PixiContainer/PixiContainer";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  },
  render() {
    return (
      <div class="w-full">
        {/* <WebglContainer></WebglContainer> */}
        <PixiContainer></PixiContainer>
      </div>
    );
  },
});
