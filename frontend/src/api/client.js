const TOKEN_KEY = 'quickcart_token'
// const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')
const API_BASE_URL = 'https://quickcart-ku03.onrender.com'

function buildApiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (!API_BASE_URL) {
    return `/api${normalizedPath}`
  }

  if (API_BASE_URL.endsWith('/api')) {
    return `${API_BASE_URL}${normalizedPath}`
  }

  return `${API_BASE_URL}/api${normalizedPath}`
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token)
  else localStorage.removeItem(TOKEN_KEY)
}

export async function api(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }
  const token = getToken()
  if (token) headers.Authorization = `Token ${token}`

  const res = await fetch(buildApiUrl(path), {
    ...options,
    headers,
  })

  const text = await res.text()
  let data = null
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      data = { detail: text }
    }
  }

  if (!res.ok) {
    const err = new Error(data?.detail || res.statusText || 'Request failed')
    err.status = res.status
    err.data = data
    throw err
  }
  return data
}
