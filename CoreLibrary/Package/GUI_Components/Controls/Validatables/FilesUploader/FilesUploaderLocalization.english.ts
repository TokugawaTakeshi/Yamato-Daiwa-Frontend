import type FilesUploaderLocalization from "./FilesUploaderLocalization";


export const filesUploaderYDF_ComponentLocalization__english: FilesUploaderLocalization = {

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
      label: "Delete",
      accessibilityGuidance: "Delete the image"
    }

  },

  singleImagePreviewer: {
    image: { alternatingText: "Uploaded image preview" }
  }

};
