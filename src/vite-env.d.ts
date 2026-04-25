/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEACHER_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
