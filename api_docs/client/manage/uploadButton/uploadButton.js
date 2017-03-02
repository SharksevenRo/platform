// Meteor packages imports
import { Template } from 'meteor/templating';

// Collection imports
import DocumentationFiles from '/api_docs/files/collection';

Template.manageApiDocumentationModalUploadButton.onRendered(() => {
  // Assign resumable browse to element
  DocumentationFiles.resumable.assignBrowse($('#file-browse'));
});
