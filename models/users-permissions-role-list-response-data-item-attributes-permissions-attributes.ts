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
import { UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRole } from './users-permissions-role-list-response-data-item-attributes-permissions-attributes-role';
/**
 * 
 * @export
 * @interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes
 */
export interface UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes {
    /**
     * 
     * @type {string}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes
     */
    action?: string;
    /**
     * 
     * @type {UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRole}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes
     */
    role?: UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributesRole;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UsersPermissionsRoleListResponseDataItemAttributesPermissionsAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
