import {
  PropType,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";
import { Subject, tap, filter, switchMap } from "rxjs";

interface ListItem {
  name: string;
}

export const AutoComplete = defineComponent({
  name: "AutoComplete",
  props: {
    tags: {
      type: Array as PropType<ListItem[]>,
      default: () => [],
    },
  },
  setup(props) {
    const subject$ = new Subject<string>();

    const tags = ref<ListItem[]>(props.tags);

    const searchKeyword = ref("");

    const inputRef = ref();

    const matchRes = ref<ListItem[]>([]);

    const handleChange = async () => {
      // todo fetch data
      //   matchRes.value = Array.from({ length: 10 }, (_, i) => ({
      //     name: `${searchKeyword.value}-${Math.random().toFixed(2)}`,
      //   }));
      subject$.next(searchKeyword.value);
    };

    const handleFocus = () => {
      console.log("handleFocus");
    };

    const handleBlur = () => {
      console.log("handleBlur");
    };

    const addKeyword2Tags = () => {
      if (!searchKeyword.value) return;
      const tag = { name: searchKeyword.value };
      tags.value.push(tag);
      searchKeyword.value = "";
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        addKeyword2Tags();
      }
    };

    const bindEvents = () => {
      if (inputRef.value) {
        inputRef.value.addEventListener("keydown", handleKeyDown);
      }
    };

    const unBindEvents = () => {
      if (inputRef.value) {
        inputRef.value.removeEventListener("keydown", handleKeyDown);
      }
    };

    const initRxjsWatch = () => {
      subject$
        .pipe(
          tap(() => (matchRes.value = [])),
          filter((text) => text.length > 0),
          switchMap((text) => {
            // request ,cancel previous request
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(
                  Array.from({ length: 10 }, (_, i) => ({
                    name: `${text}-${Math.random().toFixed(2)}`,
                  }))
                );
              }, 1000);
            });
          })
        )
        .subscribe((res: any) => {
          matchRes.value = res;
        });
    };

    const init = () => {
      bindEvents();
      initRxjsWatch();
    };

    onMounted(init);

    onBeforeUnmount(unBindEvents);

    return {
      tags,
      searchKeyword,
      inputRef,
      matchRes,
      handleChange,
      handleFocus,
      handleBlur,
    };
  },
  methods: {
    renderTags() {
      return (
        <div class="inline-block">
          {this.tags.map((tag) => {
            return (
              <div class="inline-block mx-0.5 px-0.5 border rounded">
                {tag.name}
              </div>
            );
          })}
          <input
            class="bg-white border inline-block"
            ref="inputRef"
            vModel={this.searchKeyword}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onInput={this.handleChange}
          ></input>
        </div>
      );
    },
    renderResults() {
      return (
        <div class="absolute">
          {this.matchRes.map((res) => {
            return <div class="border">{res.name}</div>;
          })}
        </div>
      );
    },
  },
  render() {
    return (
      <div>
        <div class="border px-1 py-0.5 relative w-[400px]">
          {this.renderTags()}

          {this.renderResults()}
        </div>
      </div>
    );
  },
});
