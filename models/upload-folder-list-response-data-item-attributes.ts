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
import { BlogListResponseDataItemAttributesImageDataAttributesFolder } from './blog-list-response-data-item-attributes-image-data-attributes-folder';
import { BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent } from './blog-list-response-data-item-attributes-image-data-attributes-folder-data-attributes-parent';
import { BlogListResponseDataItemAttributesImageDataAttributesRelated } from './blog-list-response-data-item-attributes-image-data-attributes-related';
/**
 * 
 * @export
 * @interface UploadFolderListResponseDataItemAttributes
 */
export interface UploadFolderListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    pathId?: number;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolder}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    parent?: BlogListResponseDataItemAttributesImageDataAttributesFolder;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesRelated}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    children?: BlogListResponseDataItemAttributesImageDataAttributesRelated;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesRelated}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    files?: BlogListResponseDataItemAttributesImageDataAttributesRelated;
    /**
     * 
     * @type {string}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    path?: string;
    /**
     * 
     * @type {Date}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof UploadFolderListResponseDataItemAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}