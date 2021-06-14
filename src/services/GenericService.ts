export class GenericService {
  private static baseURL = process.env.REACT_APP_BASE_URL;

  static async get({
    endpoint,
    hasAuthToken,
  }: GenericServiceParams): Promise<APIResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(hasAuthToken
          ? {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          : {}),
      },
    });
    let dataResponse;
    try {
      dataResponse = await response.json();
    } catch (error) {
      console.log(response);
      dataResponse = {};
    }
    return {
      data: dataResponse,
      ok: response.ok,
      status: response.status,
    };
  }

  static async post({
    endpoint,
    body,
    hasAuthToken,
  }: GenericServiceParams): Promise<APIResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...(hasAuthToken
          ? {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          : {}),
      },
    });
    let dataResponse;
    try {
      dataResponse = await response.json();
    } catch (error) {
      console.log(response);
      dataResponse = {};
    }
    return {
      data: dataResponse,
      ok: response.ok,
      status: response.status,
    };
  }

  static async put({
    endpoint,
    body,
    hasAuthToken,
  }: GenericServiceParams): Promise<APIResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...(hasAuthToken
          ? {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          : {}),
      },
    });
    let dataResponse;
    try {
      dataResponse = await response.json();
    } catch (error) {
      console.log(response);
      dataResponse = {};
    }
    return {
      data: dataResponse,
      ok: response.ok,
      status: response.status,
    };
  }

  static async delete({
    endpoint,
    body,
    hasAuthToken,
  }: GenericServiceParams): Promise<APIResponse> {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...(hasAuthToken
          ? {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
          : {}),
      },
    });
    let dataResponse;
    try {
      dataResponse = await response.json();
    } catch (error) {
      console.log(response);
      dataResponse = {};
    }
    return {
      data: dataResponse,
      ok: response.ok,
      status: response.status,
    };
  }
}
