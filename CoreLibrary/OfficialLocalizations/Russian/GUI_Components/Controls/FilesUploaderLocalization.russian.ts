import type { FilesUploaderLocalization } from "@yamato-daiwa/frontend";


export const filesUploaderYDF_ComponentLocalization__russian: FilesUploaderLocalization = {

  processingsStatusesTable: {
    headers: {
      fileName: "File Name",
      status: "Status"
    }
  },

  uploadSingleFileByDragAndDropGuidance: "Upload",

  buttons: {

    filePicking: {
      buildLabel: ({ areMultipleFileAllowed }: Readonly<{ areMultipleFileAllowed: boolean; }>): string =>
          `Select file${ areMultipleFileAllowed ? "s" : "" }`
    },

    singleImageDeleting: {
      label: "Удалить",
      accessibilityGuidance: "Удалить файл"
    }

  },

  singleImagePreviewer: {
    image: { alternatingText: "Превью выбранного изображения" }
  }

};

