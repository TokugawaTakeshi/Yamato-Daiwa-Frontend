import type FilesUploader from "./FilesUploader.base";


export const FilesUploaderLocalization__English: FilesUploader.Localization =

    {

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


export default FilesUploaderLocalization__English;
