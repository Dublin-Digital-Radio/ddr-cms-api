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
import { BlogListResponseMeta } from './blog-list-response-meta';
import { PodcastListResponseDataItem } from './podcast-list-response-data-item';
/**
 * 
 * @export
 * @interface PodcastListResponse
 */
export interface PodcastListResponse {
    /**
     * 
     * @type {Array<PodcastListResponseDataItem>}
     * @memberof PodcastListResponse
     */
    data?: Array<PodcastListResponseDataItem>;
    /**
     * 
     * @type {BlogListResponseMeta}
     * @memberof PodcastListResponse
     */
    meta?: BlogListResponseMeta;
}