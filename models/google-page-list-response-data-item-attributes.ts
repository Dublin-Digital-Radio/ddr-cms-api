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
 * @interface GooglePageListResponseDataItemAttributes
 */
export interface GooglePageListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof GooglePageListResponseDataItemAttributes
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof GooglePageListResponseDataItemAttributes
     */
    googleDocId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GooglePageListResponseDataItemAttributes
     */
    mSWordFormat?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof GooglePageListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GooglePageListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy}
     * @memberof GooglePageListResponseDataItemAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof GooglePageListResponseDataItemAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
