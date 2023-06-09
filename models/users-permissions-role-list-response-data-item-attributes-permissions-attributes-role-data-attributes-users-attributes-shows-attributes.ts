/* tslint:disable */
/* eslint-disable */
/**
 * DOCUMENTATION
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BlogListResponseDataItemAttributesImage } from './blog-list-response-data-item-attributes-image';
import { BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy } from './blog-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-files-attributes-created-by';
import { BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './blog-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
import { BlogListResponseDataItemAttributesImageDataAttributesRelated } from './blog-list-response-data-item-attributes-image-data-attributes-related';
/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
 */
export interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    tagline?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    airtimeUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    airtimePassword?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    instagram?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    facebook?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    website?: string;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImage}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    image?: BlogListResponseDataItemAttributesImage;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    slug?: string;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesRelated}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    users?: BlogListResponseDataItemAttributesImageDataAttributesRelated;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    mixcloudPlaylist?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    alwaysUploadToMixcloud?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShowsAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
