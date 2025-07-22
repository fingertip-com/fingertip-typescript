// @ts-nocheck
import initJq from 'jq-web';

export async function maybeFilter(args: Record<string, unknown> | undefined, response: any): Promise<any> {
  const jqFilter = args?.['jq_filter'];

  if (jqFilter && typeof jqFilter === 'string') {
    if (
      jqFilter.includes('.items[]') &&
      response?.items &&
      Array.isArray(response.items) &&
      response.items.length === 0
    ) {
      console.log('Detected empty items array with .items[] filter, returning empty array');
      return [];
    }

    try {
      const result = await jq(response, jqFilter);
      return result;
    } catch (error) {
      console.error('Error in jq filter:', error);
      console.error('jq filter error stack:', error.stack);

      // If it's the trim error on empty array, return empty array
      if (error.message && error.message.includes("Cannot read properties of undefined (reading 'trim')")) {
        console.log('Handling trim() error by returning empty array');
        return [];
      }

      throw error;
    }
  } else {
    return response;
  }
}

async function jq(json: any, jqFilter: string) {
  return (await initJq).json(json, jqFilter);
}
