/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/siteExtensionMappers";
import * as Parameters from "../models/parameters";
import { KuduClientContext } from "../kuduClientContext";

/** Class representing a SiteExtension. */
export class SiteExtension {
  private readonly client: KuduClientContext;

  /**
   * Create a SiteExtension.
   * @param {KuduClientContext} client Reference to the service client.
   */
  constructor(client: KuduClientContext) {
    this.client = client;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.SiteExtensionGetRemoteExtensionsResponse>
   */
  getRemoteExtensions(options?: Models.SiteExtensionGetRemoteExtensionsOptionalParams): Promise<Models.SiteExtensionGetRemoteExtensionsResponse>;
  /**
   * @param callback The callback
   */
  getRemoteExtensions(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRemoteExtensions(options: Models.SiteExtensionGetRemoteExtensionsOptionalParams, callback: msRest.ServiceCallback<any>): void;
  getRemoteExtensions(options?: Models.SiteExtensionGetRemoteExtensionsOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SiteExtensionGetRemoteExtensionsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getRemoteExtensionsOperationSpec,
      callback) as Promise<Models.SiteExtensionGetRemoteExtensionsResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.SiteExtensionGetRemoteExtensionResponse>
   */
  getRemoteExtension(id: string, options?: Models.SiteExtensionGetRemoteExtensionOptionalParams): Promise<Models.SiteExtensionGetRemoteExtensionResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getRemoteExtension(id: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getRemoteExtension(id: string, options: Models.SiteExtensionGetRemoteExtensionOptionalParams, callback: msRest.ServiceCallback<any>): void;
  getRemoteExtension(id: string, options?: Models.SiteExtensionGetRemoteExtensionOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SiteExtensionGetRemoteExtensionResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        options
      },
      getRemoteExtensionOperationSpec,
      callback) as Promise<Models.SiteExtensionGetRemoteExtensionResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.SiteExtensionGetLocalExtensionsResponse>
   */
  getLocalExtensions(options?: Models.SiteExtensionGetLocalExtensionsOptionalParams): Promise<Models.SiteExtensionGetLocalExtensionsResponse>;
  /**
   * @param callback The callback
   */
  getLocalExtensions(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalExtensions(options: Models.SiteExtensionGetLocalExtensionsOptionalParams, callback: msRest.ServiceCallback<any>): void;
  getLocalExtensions(options?: Models.SiteExtensionGetLocalExtensionsOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SiteExtensionGetLocalExtensionsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLocalExtensionsOperationSpec,
      callback) as Promise<Models.SiteExtensionGetLocalExtensionsResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.SiteExtensionGetLocalExtensionResponse>
   */
  getLocalExtension(id: string, options?: Models.SiteExtensionGetLocalExtensionOptionalParams): Promise<Models.SiteExtensionGetLocalExtensionResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getLocalExtension(id: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalExtension(id: string, options: Models.SiteExtensionGetLocalExtensionOptionalParams, callback: msRest.ServiceCallback<any>): void;
  getLocalExtension(id: string, options?: Models.SiteExtensionGetLocalExtensionOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SiteExtensionGetLocalExtensionResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        options
      },
      getLocalExtensionOperationSpec,
      callback) as Promise<Models.SiteExtensionGetLocalExtensionResponse>;
  }

  /**
   * @param id
   * @param requestInfo
   * @param [options] The optional parameters
   * @returns Promise<Models.SiteExtensionInstallExtensionResponse>
   */
  installExtension(id: string, requestInfo: Models.SiteExtensionInfo, options?: msRest.RequestOptionsBase): Promise<Models.SiteExtensionInstallExtensionResponse>;
  /**
   * @param id
   * @param requestInfo
   * @param callback The callback
   */
  installExtension(id: string, requestInfo: Models.SiteExtensionInfo, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param id
   * @param requestInfo
   * @param options The optional parameters
   * @param callback The callback
   */
  installExtension(id: string, requestInfo: Models.SiteExtensionInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  installExtension(id: string, requestInfo: Models.SiteExtensionInfo, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SiteExtensionInstallExtensionResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        requestInfo,
        options
      },
      installExtensionOperationSpec,
      callback) as Promise<Models.SiteExtensionInstallExtensionResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.SiteExtensionUninstallExtensionResponse>
   */
  uninstallExtension(id: string, options?: msRest.RequestOptionsBase): Promise<Models.SiteExtensionUninstallExtensionResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  uninstallExtension(id: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  uninstallExtension(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  uninstallExtension(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SiteExtensionUninstallExtensionResponse> {
    return this.client.sendOperationRequest(
      {
        id,
        options
      },
      uninstallExtensionOperationSpec,
      callback) as Promise<Models.SiteExtensionUninstallExtensionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getRemoteExtensionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/extensionfeed",
  queryParameters: [
    Parameters.filter,
    Parameters.allowPrereleaseVersions,
    Parameters.feedUrl
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getRemoteExtensionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/extensionfeed/{id}",
  urlParameters: [
    Parameters.id0
  ],
  queryParameters: [
    Parameters.version,
    Parameters.feedUrl
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getLocalExtensionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/siteextensions",
  queryParameters: [
    Parameters.filter,
    Parameters.checkLatest
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const getLocalExtensionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/siteextensions/{id}",
  urlParameters: [
    Parameters.id0
  ],
  queryParameters: [
    Parameters.checkLatest
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const installExtensionOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "api/siteextensions/{id}",
  urlParameters: [
    Parameters.id0
  ],
  requestBody: {
    parameterPath: "requestInfo",
    mapper: {
      ...Mappers.SiteExtensionInfo,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const uninstallExtensionOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "api/siteextensions/{id}",
  urlParameters: [
    Parameters.id0
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};
