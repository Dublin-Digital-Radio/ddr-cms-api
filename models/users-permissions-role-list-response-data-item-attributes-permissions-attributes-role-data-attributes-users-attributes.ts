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
import { BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './blog-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
import { UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShows } from './users-permissions-role-list-response-data-item-attributes-permissions-attributes-role-data-attributes-users-attributes-shows';
/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
 */
export interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    confirmationToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    blocked?: boolean;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    role?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    phone?: string;
    /**
     * 
     * @type {UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShows}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    shows?: UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributesShows;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRoleDataAttributesUsersAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
