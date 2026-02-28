<template>
  <div class="article-editor-page">
    <EditorContent :editor />

    <BubbleMenu
      v-if="editor"
      :editor="editor"
      :options="{ placement: 'bottom', offset: 8 }"
    >
      <div class="bubble-menu">
        <button
          :class="['bubble-menu__button', { 'is-active': editor.isActive('bold') }]"
          @click="editor.chain().focus().toggleBold().run()"
        >
          Bold
        </button>

        <button
          :class="['bubble-menu__button', { 'is-active': editor.isActive('italic') }]"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          Italic
        </button>

        <button
          :class="['bubble-menu__button', { 'is-active': editor.isActive('strike') }]"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          Strike
        </button>
      </div>
    </BubbleMenu>
  </div>
</template>

<script setup lang="ts">
import { EditorContent, useEditor } from "@tiptap/vue-3";
import { BubbleMenu } from "@tiptap/vue-3/menus";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  extensions: [StarterKit],
  content: '',
  autofocus: true,
  editable: true,
  editorProps: {
    attributes: {
      class: 'base-editor',
    },
  },
});
</script>

<style scoped lang="scss">
.article-editor-page {
  padding: 40px;

  &:deep(.base-editor) {
    height: 100%;
    min-height: 400px;
    border: 1px solid #ddd;
  }
}

.bubble-menu {
  display: flex;
  padding: 0.2rem;
  border: 1px solid rgba(61, 37, 20, .05);
  border-radius: 0.7rem;
  background-color: #fff;
  box-shadow: 0 12px 33px 0 rgba(0, 0, 0, .06), 0 3.618px 9.949px 0 rgba(0, 0, 0, .04);

  &__button {
    background-color: unset;

    &:hover {
      background-color: rgba(61, 37, 20, .12);
    }

    &.is-active {
      background-color: #6a00f5;

      &:hover {
        background-color: #5800cc;
      }
    }
  }
}
</style>