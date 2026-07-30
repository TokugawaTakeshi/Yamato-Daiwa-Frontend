import type { FilesUploaderLocalization } from "@yamato-daiwa/frontend";


export const FilesUploaderYDF_GUI_ComponentLocalization__Russian: FilesUploaderLocalization = {

  processingsStatusesTable: {
    headers: {
      fileName: "Имя файла",
      status: "Статус"
    }
  },

  uploadSingleFileByDragAndDropGuidance: "Загрузить",

  buttons: {

    filePicking: {
      buildLabel: ({ areMultipleFileAllowed }: Readonly<{ areMultipleFileAllowed: boolean; }>): string =>
          `Выбрать файл${ areMultipleFileAllowed ? "ы" : "" }`
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
