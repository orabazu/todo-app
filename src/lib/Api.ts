import { API_URL } from 'const/api';
class Api {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get<T>(url: string, params: any): Promise<T> {
    let response;
    const startTime = new Date().getTime();
    const queryParams = params ? `?${params}` : ``;
    try {
      response = await fetch(`${API_URL}/${url}${queryParams}`);
    } catch (e) {
      throw { status: 0, message: e };
    }

    if (!response.ok) {
      reportError('GET', url, response, startTime);
      const data = await getJSONOrThrow(response);
      throw { status: response.status, ...data };
    }
    return await getJSONOrThrow(response);
  }
}

function reportError(method: string, url: string, response: Response, startTime: number) {
  const duration = new Date().getTime() - startTime;
  const pathname = new URL(url, window.location.origin).pathname;
  // Ideally log sentry or other logger here
  console.error({ pathname, method, duration, status: response.status });
}

async function getJSONOrThrow(response: Response) {
  try {
    return await response.json();
  } catch (e) {
    return { statusText: response.statusText };
  }
}

export const api = new Api();
