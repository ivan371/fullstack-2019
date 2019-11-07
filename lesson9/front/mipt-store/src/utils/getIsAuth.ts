export default function getIsAuth(): boolean {
  return Boolean(window.localStorage.getItem('access'))
}
