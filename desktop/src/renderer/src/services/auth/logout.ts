import { DBSTORE } from '@renderer/config/bdstore'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function logoutService() {
  try {
    await localStorage.removeItem(DBSTORE)
  } catch (error) {
    console.log(error)
  }
}
