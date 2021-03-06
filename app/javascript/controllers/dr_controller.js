import { Controller } from "stimulus"
import { DirectUpload } from "@rails/activestorage"

export default class extends Controller {
  connect() {
    const input = document.querySelector('input[type=file]')
    // Bind to normal file selection
    input.addEventListener('change', (event) => {
      Array.from(input.files).forEach(file => uploadFile(file))
      // you might clear the selected files from the input
      input.value = null
    })

    const uploadFile = (file) => {
      // your form needs the file_field direct_upload: true, which
      //  provides data-direct-upload-url
      const url = input.dataset.directUploadUrl
      const upload = new DirectUpload(file, url)

      upload.create((error, blob) => {
        if (error) {
          // Handle the error
        } else {
          // Add an appropriately-named hidden input to the form with a
          //  value of blob.signed_id so that the blob ids will be
          //  transmitted in the normal upload flow
          const hiddenField = document.createElement('input')
          hiddenField.setAttribute("type", "hidden");
          hiddenField.setAttribute("value", `${blob.signed_id}`);
          hiddenField.name = input.name
          this.element.querySelector('form').appendChild(hiddenField)
        }
      })
    }
  }
}
