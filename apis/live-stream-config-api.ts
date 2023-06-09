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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { LiveStreamConfigListResponse } from '../models';
import { LiveStreamConfigRequest } from '../models';
import { LiveStreamConfigResponse } from '../models';
/**
 * LiveStreamConfigApi - axios parameter creator
 * @export
 */
export const LiveStreamConfigApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteliveStreamConfig: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/live-stream-config`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
         * @param {boolean} [paginationWithCount] Return page/pageSize (default: true)
         * @param {number} [paginationPage] Page number (default: 0)
         * @param {number} [paginationPageSize] Page size (default: 25)
         * @param {number} [paginationStart] Offset value (default: 0)
         * @param {number} [paginationLimit] Number of entities to return (default: 25)
         * @param {string} [fields] Fields to return (ex: title,author)
         * @param {string} [populate] Relations to return
         * @param {string} [locale] Locale to apply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getliveStreamConfig: async (sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, locale?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/live-stream-config`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (paginationWithCount !== undefined) {
                localVarQueryParameter['pagination[withCount]'] = paginationWithCount;
            }

            if (paginationPage !== undefined) {
                localVarQueryParameter['pagination[page]'] = paginationPage;
            }

            if (paginationPageSize !== undefined) {
                localVarQueryParameter['pagination[pageSize]'] = paginationPageSize;
            }

            if (paginationStart !== undefined) {
                localVarQueryParameter['pagination[start]'] = paginationStart;
            }

            if (paginationLimit !== undefined) {
                localVarQueryParameter['pagination[limit]'] = paginationLimit;
            }

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (populate !== undefined) {
                localVarQueryParameter['populate'] = populate;
            }

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {LiveStreamConfigRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putliveStreamConfig: async (body: LiveStreamConfigRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putliveStreamConfig.');
            }
            const localVarPath = `/live-stream-config`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LiveStreamConfigApi - functional programming interface
 * @export
 */
export const LiveStreamConfigApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteliveStreamConfig(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await LiveStreamConfigApiAxiosParamCreator(configuration).deleteliveStreamConfig(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
         * @param {boolean} [paginationWithCount] Return page/pageSize (default: true)
         * @param {number} [paginationPage] Page number (default: 0)
         * @param {number} [paginationPageSize] Page size (default: 25)
         * @param {number} [paginationStart] Offset value (default: 0)
         * @param {number} [paginationLimit] Number of entities to return (default: 25)
         * @param {string} [fields] Fields to return (ex: title,author)
         * @param {string} [populate] Relations to return
         * @param {string} [locale] Locale to apply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getliveStreamConfig(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, locale?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LiveStreamConfigListResponse>>> {
            const localVarAxiosArgs = await LiveStreamConfigApiAxiosParamCreator(configuration).getliveStreamConfig(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, locale, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {LiveStreamConfigRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putliveStreamConfig(body: LiveStreamConfigRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LiveStreamConfigResponse>>> {
            const localVarAxiosArgs = await LiveStreamConfigApiAxiosParamCreator(configuration).putliveStreamConfig(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LiveStreamConfigApi - factory interface
 * @export
 */
export const LiveStreamConfigApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteliveStreamConfig(options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return LiveStreamConfigApiFp(configuration).deleteliveStreamConfig(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
         * @param {boolean} [paginationWithCount] Return page/pageSize (default: true)
         * @param {number} [paginationPage] Page number (default: 0)
         * @param {number} [paginationPageSize] Page size (default: 25)
         * @param {number} [paginationStart] Offset value (default: 0)
         * @param {number} [paginationLimit] Number of entities to return (default: 25)
         * @param {string} [fields] Fields to return (ex: title,author)
         * @param {string} [populate] Relations to return
         * @param {string} [locale] Locale to apply
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getliveStreamConfig(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, locale?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<LiveStreamConfigListResponse>> {
            return LiveStreamConfigApiFp(configuration).getliveStreamConfig(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, locale, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {LiveStreamConfigRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putliveStreamConfig(body: LiveStreamConfigRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<LiveStreamConfigResponse>> {
            return LiveStreamConfigApiFp(configuration).putliveStreamConfig(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LiveStreamConfigApi - object-oriented interface
 * @export
 * @class LiveStreamConfigApi
 * @extends {BaseAPI}
 */
export class LiveStreamConfigApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LiveStreamConfigApi
     */
    public async deleteliveStreamConfig(options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return LiveStreamConfigApiFp(this.configuration).deleteliveStreamConfig(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [sort] Sort by attributes ascending (asc) or descending (desc)
     * @param {boolean} [paginationWithCount] Return page/pageSize (default: true)
     * @param {number} [paginationPage] Page number (default: 0)
     * @param {number} [paginationPageSize] Page size (default: 25)
     * @param {number} [paginationStart] Offset value (default: 0)
     * @param {number} [paginationLimit] Number of entities to return (default: 25)
     * @param {string} [fields] Fields to return (ex: title,author)
     * @param {string} [populate] Relations to return
     * @param {string} [locale] Locale to apply
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LiveStreamConfigApi
     */
    public async getliveStreamConfig(sort?: string, paginationWithCount?: boolean, paginationPage?: number, paginationPageSize?: number, paginationStart?: number, paginationLimit?: number, fields?: string, populate?: string, locale?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<LiveStreamConfigListResponse>> {
        return LiveStreamConfigApiFp(this.configuration).getliveStreamConfig(sort, paginationWithCount, paginationPage, paginationPageSize, paginationStart, paginationLimit, fields, populate, locale, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {LiveStreamConfigRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LiveStreamConfigApi
     */
    public async putliveStreamConfig(body: LiveStreamConfigRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<LiveStreamConfigResponse>> {
        return LiveStreamConfigApiFp(this.configuration).putliveStreamConfig(body, options).then((request) => request(this.axios, this.basePath));
    }
}
