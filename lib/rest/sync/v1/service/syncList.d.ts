/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';
import { SyncListItemList } from './syncList/syncListItem';
import { SyncListItemListInstance } from './syncList/syncListItem';
import { SyncListPermissionList } from './syncList/syncListPermission';
import { SyncListPermissionListInstance } from './syncList/syncListPermission';

type SyncListHideExpiredType = 'true'|'false';

/**
 * Initialize the SyncListList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Sync Service that the resource is associated with
 */
declare function SyncListList(version: V1, serviceSid: string): SyncListListInstance;

/**
 * Options to pass to update
 *
 * @property collectionTtl - How long, in seconds, before the Sync List expires and is deleted
 * @property ttl - An alias for collection_ttl
 */
interface SyncListInstanceUpdateOptions {
  collectionTtl?: number;
  ttl?: number;
}

interface SyncListListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncListContext;
  /**
   * create a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * create a SyncListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: SyncListListInstanceCreateOptions, callback?: (error: Error | null, item: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * Streams SyncListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: SyncListInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SyncListListInstanceEachOptions, callback?: (item: SyncListInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_list
   *
   * @param sid - The SID of the Sync List resource to fetch
   */
  get(sid: string): SyncListContext;
  /**
   * Retrieve a single target page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  /**
   * Retrieve a single target page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  /**
   * Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncListInstance[]) => any): Promise<SyncListInstance[]>;
  /**
   * Lists SyncListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncListListInstanceOptions, callback?: (error: Error | null, items: SyncListInstance[]) => any): Promise<SyncListInstance[]>;
  /**
   * Retrieve a single page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  /**
   * Retrieve a single page of SyncListInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncListListInstancePageOptions, callback?: (error: Error | null, items: SyncListPage) => any): Promise<SyncListPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property collectionTtl - How long, in seconds, before the Sync List expires and is deleted
 * @property ttl - Alias for collection_ttl
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface SyncListListInstanceCreateOptions {
  collectionTtl?: number;
  ttl?: number;
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property hideExpired - Hide expired Sync Lists and show only active ones.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SyncListListInstanceEachOptions {
  callback?: (item: SyncListInstance, done: (err?: Error) => void) => void;
  done?: Function;
  hideExpired?: SyncListHideExpiredType;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property hideExpired - Hide expired Sync Lists and show only active ones.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SyncListListInstanceOptions {
  hideExpired?: SyncListHideExpiredType;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property hideExpired - Hide expired Sync Lists and show only active ones.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SyncListListInstancePageOptions {
  hideExpired?: SyncListHideExpiredType;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncListPayload extends SyncListResource, Page.TwilioResponsePayload {
}

interface SyncListResource {
  account_sid: string;
  created_by: string;
  date_created: Date;
  date_expires: Date;
  date_updated: Date;
  links: string;
  revision: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface SyncListSolution {
  serviceSid?: string;
}


declare class SyncListContext {
  /**
   * Initialize the SyncListContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Sync Service with the Sync List resource to fetch
   * @param sid - The SID of the Sync List resource to fetch
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * remove a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListInstance) => any): Promise<boolean>;
  syncListItems: SyncListItemListInstance;
  syncListPermissions: SyncListPermissionListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * update a SyncListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncListInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListInstance) => any): Promise<SyncListInstance>;
}


declare class SyncListInstance extends SerializableClass {
  /**
   * Initialize the SyncListContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Sync Service that the resource is associated with
   * @param sid - The SID of the Sync List resource to fetch
   */
  constructor(version: V1, payload: SyncListPayload, serviceSid: string, sid: string);

  private _proxy: SyncListContext;
  accountSid: string;
  createdBy: string;
  dateCreated: Date;
  dateExpires: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListInstance) => any): Promise<SyncListInstance>;
  links: string;
  /**
   * remove a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListInstance) => any): Promise<boolean>;
  revision: string;
  serviceSid: string;
  sid: string;
  /**
   * Access the syncListItems
   */
  syncListItems(): SyncListItemListInstance;
  /**
   * Access the syncListPermissions
   */
  syncListPermissions(): SyncListPermissionListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a SyncListInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SyncListInstance) => any): Promise<SyncListInstance>;
  /**
   * update a SyncListInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncListInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListInstance) => any): Promise<SyncListInstance>;
  url: string;
}


declare class SyncListPage extends Page<V1, SyncListPayload, SyncListResource, SyncListInstance> {
  /**
   * Initialize the SyncListPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncListSolution);

  /**
   * Build an instance of SyncListInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListPayload): SyncListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SyncListContext, SyncListHideExpiredType, SyncListInstance, SyncListInstanceUpdateOptions, SyncListList, SyncListListInstance, SyncListListInstanceCreateOptions, SyncListListInstanceEachOptions, SyncListListInstanceOptions, SyncListListInstancePageOptions, SyncListPage, SyncListPayload, SyncListResource, SyncListSolution }
