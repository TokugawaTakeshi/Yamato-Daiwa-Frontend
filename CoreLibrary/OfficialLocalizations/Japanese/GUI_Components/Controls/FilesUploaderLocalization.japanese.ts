import type { FilesUploaderLocalization } from "@yamato-daiwa/frontend";


export const filesUploaderYDF_ComponentLocalization__japanese: FilesUploaderLocalization = {

  processingsStatusesTable: {
    headers: {
      fileName: "ファイル名",
      status: "状態"
    }
  },

  uploadSingleFileByDragAndDropGuidance: "ファイルをドロップ",

  buttons: {

    filePicking: {
      buildLabel: ({ areMultipleFileAllowed }: Readonly<{ areMultipleFileAllowed: boolean; }>): string =>
          `ファイルを選ぶ${ areMultipleFileAllowed ? "（複数可）" : "" }`
    },

    singleImageDeleting: {
      label: "削除",
      accessibilityGuidance: "アップロードする画像を削除"
    }

  },

  singleImagePreviewer: {
    image: { alternatingText: "アップロードする画像のプレビュー" }
  }

};

