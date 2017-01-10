import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'lodash';
import { Organizations } from '/organizations/collection';
import { Apis } from '/apis/collection';
import { OrganizationApis } from './';


OrganizationApis.schema = new SimpleSchema({
  organizationId: {
    type: String,
    optional: false,
    autoform: {
      options () {
        // Get all organizations, available in data context
        const organizations = Organizations.find().fetch();

        // Create array of options with label/value attributes
        const organizationOptions = _.map(organizations, (organization) => ({
          label: organization.name,
          value: organization._id,
        }));

        return organizationOptions;
      },
    },
  },
  apiId: {
    type: String,
    optional: false,
    autoform: {
      options () {
        // Get all Apis, available in data context
        const apis = Apis.find().fetch();

        // Create array of options with label/value attributes
        const apiOptions = _.map(apis, (api) => ({
          label: api.name,
          value: api._id,
        }));

        return apiOptions;
      },
    },
  },
});

// Internationalize schema texts
OrganizationApis.schema.i18n('schemas.organizationApis');

// Attach schema to collection
OrganizationApis.attachSchema(OrganizationApis.schema);