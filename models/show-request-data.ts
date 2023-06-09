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
/**
 * 
 * @export
 * @interface ShowRequestData
 */
export interface ShowRequestData {
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    tagline?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShowRequestData
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    airtimeUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    airtimePassword?: string;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    instagram?: string;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    facebook?: string;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    website?: string;
    /**
     * 
     * @type {number | string}
     * @memberof ShowRequestData
     */
    image?: number | string;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    slug?: string;
    /**
     * 
     * @type {Array<number | string>}
     * @memberof ShowRequestData
     */
    users?: Array<number | string>;
    /**
     * 
     * @type {string}
     * @memberof ShowRequestData
     */
    mixcloudPlaylist?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ShowRequestData
     */
    alwaysUploadToMixcloud?: boolean;
}
