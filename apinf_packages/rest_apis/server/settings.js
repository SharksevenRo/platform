/* Copyright 2017 Apinf Oy
 This file is covered by the EUPL license.
 You may obtain a copy of the licence at
 https://joinup.ec.europa.eu/community/eupl/og_page/european-union-public-licence-eupl-v11 */

// Meteor contributed packages imports
import { Restivus } from 'meteor/nimble:restivus';

// APInf imports
import catalogGeneralDescription from '/apinf_packages/rest_apis/lib/descriptions/catalog_texts';

const SettingsV1 = new Restivus({
  apiPath: 'rest',
  version: 'v1',
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
  useDefaultAuth: true,
  prettyJson: true,
  enableCors: true,
});

SettingsV1.swagger = {
  meta: {
    swagger: '2.0',
    info: {
      description: catalogGeneralDescription,
      version: '1.0.0',
      title: 'Admin API for Branding configuration',
    },
    securityDefinitions: {
      userSecurityToken: {
        in: 'header',
        name: 'X-Auth-Token',
        type: 'apiKey',
      },
      userId: {
        in: 'header',
        name: 'X-User-Id',
        type: 'apiKey',
      },
    },
  },
  tags: {
    authentication: 'Authentication',
    branding: 'Branding',
  },
  params: {
    branding: {
      name: 'branding',
      in: 'body',
      description: 'Data for adding or editing Branding configuration',
      schema: {
        $ref: '#/definitions/branding',
      },
    },
  },
  definitions: {
    // The schema defining the type used for the body parameter in POST or PUT method
    branding: {
      required: ['name', 'url'],
      properties: {
        siteTitle: {
          type: 'string',
          example: 'Site title',
        },
        siteSlogan: {
          type: 'string',
          example: 'Site slogan',
        },
        siteFooter: {
          type: 'string',
          example: 'Site footer',
        },
        primary: {
          type: 'string',
          description: 'A primary background color of site theme',
          example: '#343099',
        },
        primaryText: {
          type: 'string',
          description: 'A primary text color of site theme',
          example: '#ffffff',
        },
        coverPhotoOverlay: {
          type: 'string',
          description: 'A color to overlay the cover photo',
          example: '#dfdbff',
        },
        overlayTransparency: {
          type: 'number',
          description: 'A transparency value to overlay color',
          example: '10',
        },
        featuredApis: {
          type: 'string',
          description: 'Provide IDs or Names of APIs that. The maximum value is 8',
          example: 'api-id, api2-id, api3-id'
        },




        url: {
          type: 'string',
          format: 'url',
          example: 'https://my.rest.api.com/v1',
        },
        lifecycleStatus: {
          type: 'string',
          enum: ['design', 'development', 'testing', 'production', 'deprecated'],
          example: 'design/development/testing/production/deprecated',
        },
        isPublic: {
          type: 'string',
          enum: ['true', 'false'],
          example: 'true/false',
        },
      },

    },
    apiResponse: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          example: 'api-id-value',
        },
        name: {
          type: 'string',
          example: 'My REST API',
        },
        latestMonitoringStatusCode: {
          type: 'string',
          example: '-1',
        },
        description: {
          type: 'string',
          example: 'My REST API description',
        },
        url: {
          type: 'string',
          example: 'http://my.rest.api.com/v1',
        },
        managerIds: {
          type: 'array',
          items: {
            type: 'string',
            example: 'manager-id',
          },
        },
        slug: {
          type: 'string',
          example: 'organization-slug',
        },
        lifecycleStatus: {
          type: 'string',
          example: 'design/development/testing/production/deprecated',
        },
        authorizedUserIds: {
          type: 'array',
          items: {
            type: 'string',
            example: 'user-id',
          },
        },
        created_at: {
          type: 'string',
          example: '2012-07-14T01:00:00+01:00',
        },
        bookmarkCount: {
          type: 'string',
          example: '0',
        },
        isPublic: {
          type: 'boolean',
          example: 'true',
        },
        friendlySlugs: {
          type: 'object',
          properties: {
            slug: {
              type: 'object',
              properties: {
                base: {
                  type: 'string',
                  example: 'my-rest-api',
                },
                index: {
                  type: 'string',
                  example: '0',
                },
              },
            },
          },
        },
        updated_at: {
          type: 'string',
          example: '2017-07-14T01:00:00+01:00',
        },
        apiLogoFileId: {
          type: 'string',
          example: 'file-id',
        },
        logoURL: {
          type: 'string',
          example: 'link-address-to-logo-image',
        },
      },
    },
    loginRequest: {
      required: ['username', 'password'],
      properties: {
        username: {
          type: 'string',
          description: 'Username',
          example: 'johndoe',
        },
        password: {
          type: 'string',
          description: 'Password for user',
          example: 'mypassword',
        },
      },
    },
    loginResponse: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          example: 'success',
        },
        data: {
          type: 'object',
          properties: {
            authToken: {
              type: 'string',
              example: 'auth-token-value',
            },
            userId: {
              type: 'string',
              example: 'user-id-value',
            },
          },
        },
      },
    },

  },
};

// Generate Swagger to route /rest/v1/settings.json
SettingsV1.addSwagger('settings.json');

export default SettingsV1;
