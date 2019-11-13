const BASE_URL = 'http://localhost:8000/api/'

export default async (
  url: RequestInfo,
  params: RequestInit = {}
): Promise<any> => {
  const headers = {} as any
  const token = window.localStorage.getItem('access')

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const response = await fetch(`${BASE_URL}${url}`, {
    ...params,
    headers: {
      ...params.headers,
      ...headers
    }
  })

  return await response.json()
}
