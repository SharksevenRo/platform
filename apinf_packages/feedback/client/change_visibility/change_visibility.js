/* Copyright 2017 Apinf Oy
This file is covered by the EUPL license.
You may obtain a copy of the licence at
https://joinup.ec.europa.eu/community/eupl/og_page/european-union-public-licence-eupl-v11 */

// Meteor packages imports
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

// Meteor contributed packages imports
import { Modal } from 'meteor/peppelg:bootstrap-3-modal';

import { FlowRouter } from 'meteor/kadira:flow-router';

Template.changeFeedbackVisibility.events({
  'click #confirm-change-visibility': function () {
    // Get slug
    const slug = FlowRouter.getParam('slug');

    // Call meteor method
    Meteor.call('changeAllFeedbacksVisibility', slug, this.toPublic);

    // Close modal
    Modal.hide('changeFeedbackVisibility');
  },
});
