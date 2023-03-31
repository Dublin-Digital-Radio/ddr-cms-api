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
 * @interface EventItemListResponseDataItemAttributes
 */
export interface EventItemListResponseDataItemAttributes {
    /**
     * 
     * @type {string}
     * @memberof EventItemListResponseDataItemAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EventItemListResponseDataItemAttributes
     */
    bio?: string;
    /**
     * 
     * @type {string}
     * @memberof EventItemListResponseDataItemAttributes
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof EventItemListResponseDataItemAttributes
     */
    secureImageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof EventItemListResponseDataItemAttributes
     */
    imagePublicId?: string;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImage}
     * @memberof EventItemListResponseDataItemAttributes
     */
    image?: BlogListResponseDataItemAttributesImage;
    /**
     * 
     * @type {Date}
     * @memberof EventItemListResponseDataItemAttributes
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof EventItemListResponseDataItemAttributes
     */
    updatedAt?: Date;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy}
     * @memberof EventItemListResponseDataItemAttributes
     */
    createdBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesFilesAttributesCreatedBy;
    /**
     * 
     * @type {BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent}
     * @memberof EventItemListResponseDataItemAttributes
     */
    updatedBy?: BlogListResponseDataItemAttributesImageDataAttributesFolderDataAttributesParent;
}