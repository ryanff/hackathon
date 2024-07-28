import { PropType } from 'vue';

interface ListItem {
    name: string;
}
export declare const AutoComplete: import('vue').DefineComponent<{
    tags: {
        type: PropType<ListItem[]>;
        default: () => never[];
    };
}, {
    displayTags: import('vue').Ref<{
        name: string;
    }[]>;
    searchKeyword: import('vue').Ref<string>;
    inputRef: import('vue').Ref<any>;
    matchRes: import('vue').Ref<{
        name: string;
    }[]>;
    handleChange: () => Promise<void>;
    handleFocus: () => void;
    handleBlur: () => void;
}, unknown, {}, {
    renderTags(): JSX.Element;
    renderResults(): JSX.Element;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    tags: {
        type: PropType<ListItem[]>;
        default: () => never[];
    };
}>>, {
    tags: ListItem[];
}, {}>;
export {};
