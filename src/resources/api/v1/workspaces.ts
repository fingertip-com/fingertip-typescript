// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Workspaces extends APIResource {
  /**
   * Retrieves a specific workspace and its related data by workspace ID
   */
  retrieve(workspaceID: string, options?: RequestOptions): APIPromise<WorkspaceRetrieveResponse> {
    return this._client.get(path`/api/v1/workspaces/${workspaceID}`, options);
  }

  /**
   * Updates an existing workspace with provided partial data
   */
  update(
    workspaceID: string,
    body: WorkspaceUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WorkspaceUpdateResponse> {
    return this._client.patch(path`/api/v1/workspaces/${workspaceID}`, { body, ...options });
  }
}

export interface WorkspaceRetrieveResponse {
  workspace: WorkspaceRetrieveResponse.Workspace;
}

export namespace WorkspaceRetrieveResponse {
  export interface Workspace {
    id: string;

    createdAt: string;

    name: string;

    sites: Array<Workspace.Site>;

    slug: string;

    updatedAt: string;
  }

  export namespace Workspace {
    export interface Site {
      id: string;

      businessType: string | null;

      createdAt: string;

      description: string | null;

      homePageId: string | null;

      locationId: string | null;

      name: string;

      overridePlan: string | null;

      slug: string;

      timeZone: string | null;

      updatedAt: string;

      workspaceId: string | null;

      logoMedia?: unknown;

      socialIcons?: unknown;

      status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
    }
  }
}

export interface WorkspaceUpdateResponse {
  workspace: WorkspaceUpdateResponse.Workspace;
}

export namespace WorkspaceUpdateResponse {
  export interface Workspace {
    id: string;

    createdAt: string;

    name: string;

    sites: Array<Workspace.Site>;

    slug: string;

    updatedAt: string;
  }

  export namespace Workspace {
    export interface Site {
      id: string;

      businessType: string | null;

      createdAt: string;

      description: string | null;

      homePageId: string | null;

      locationId: string | null;

      name: string;

      overridePlan: string | null;

      slug: string;

      timeZone: string | null;

      updatedAt: string;

      workspaceId: string | null;

      logoMedia?: unknown;

      socialIcons?: unknown;

      status?: 'EMPTY' | 'UNPUBLISHED' | 'PREVIEW' | 'SOFT_CLAIM' | 'ENABLED' | 'DEMO';
    }
  }
}

export interface WorkspaceUpdateParams {
  name?: string;
}

export declare namespace Workspaces {
  export {
    type WorkspaceRetrieveResponse as WorkspaceRetrieveResponse,
    type WorkspaceUpdateResponse as WorkspaceUpdateResponse,
    type WorkspaceUpdateParams as WorkspaceUpdateParams,
  };
}
