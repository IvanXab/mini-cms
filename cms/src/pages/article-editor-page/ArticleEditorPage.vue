<template>
  <div class="article-editor-page">
    <EditorContent class="article-editor-page__editor" :editor />
  </div>
</template>

<script setup lang="ts">
import { EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  extensions: [StarterKit],
  content: '',
  autofocus: true,
  editable: true,
});
</script>

<style scoped lang="scss">
.article-editor-page {
  padding: 40px;

  &__editor {
    border: 1px solid #ddd;
    min-height: 400px;

    &:deep(.tiptap) {
      height: 100%;
    }
  }
}
</style>