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
 * @interface LiveStreamConfigListResponseDataItemAttributes
 */
export interface LiveStreamConfigListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof LiveStreamConfigListResponseDataItemAttributes
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LiveStreamConfigListResponseDataItemAttributes
     */
    playerEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LiveStreamConfigListResponseDataItemAttributes
     */
    description?: string;
    /**
     * 
     * @type {Date}
     * @memberof LiveStreamConfigListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof LiveStreamConfigListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy}
     * @memberof LiveStreamConfigListResponseDataItemAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof LiveStreamConfigListResponseDataItemAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
