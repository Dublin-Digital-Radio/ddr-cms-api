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
import { BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy } from './blog-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-files-attributes-created-by';
import { BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './blog-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
/**
 * 
 * @export
 * @interface NavItemListResponseDataItemAttributes
 */
export interface NavItemListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof NavItemListResponseDataItemAttributes
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof NavItemListResponseDataItemAttributes
     */
    text?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NavItemListResponseDataItemAttributes
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof NavItemListResponseDataItemAttributes
     */
    order?: number;
    /**
     * 
     * @type {Date}
     * @memberof NavItemListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NavItemListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy}
     * @memberof NavItemListResponseDataItemAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof NavItemListResponseDataItemAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
