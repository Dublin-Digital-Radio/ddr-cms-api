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
/**
 * 
 * @export
 * @interface PosterListResponseDataItemAttributes
 */
export interface PosterListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof PosterListResponseDataItemAttributes
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof PosterListResponseDataItemAttributes
     */
    displayFrom?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PosterListResponseDataItemAttributes
     */
    displayUntil?: Date;
    /**
     * 
     * @type {string}
     * @memberof PosterListResponseDataItemAttributes
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof PosterListResponseDataItemAttributes
     */
    active?: string;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImage}
     * @memberof PosterListResponseDataItemAttributes
     */
    image?: BlogListResponseDataItemAttributesImage;
    /**
     * 
     * @type {Date}
     * @memberof PosterListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PosterListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy}
     * @memberof PosterListResponseDataItemAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof PosterListResponseDataItemAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}
