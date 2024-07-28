import {defineComponent} from "vue";
import {WebglContainer} from "@/components/WebglContainer/WebglContainer";

export default defineComponent({
    name: 'Webgl',
    setup() {
        return {}
    },
    render() {
        return <WebglContainer></WebglContainer>
    }
})
