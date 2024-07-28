import { VNode } from "vue";
import { ComponentRenderProxy } from "vue";

declare global {
  namespace JSX {
    type Element = VNode;
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
